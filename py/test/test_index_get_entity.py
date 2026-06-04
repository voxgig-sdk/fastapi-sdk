# IndexGet entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from fastapi_sdk import FastapiSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestIndexGetEntity:

    def test_should_create_instance(self):
        testsdk = FastapiSDK.test(None, None)
        ent = testsdk.IndexGet(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _index_get_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "index_get." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set FASTAPI_TEST_INDEX_GET_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        index_get_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.index_get")))
        index_get_ref01_data = None
        if len(index_get_ref01_data_raw) > 0:
            index_get_ref01_data = helpers.to_map(index_get_ref01_data_raw[0][1])

        # LOAD
        index_get_ref01_ent = client.IndexGet(None)
        index_get_ref01_match_dt0 = {}
        index_get_ref01_data_dt0_loaded, err = index_get_ref01_ent.load(index_get_ref01_match_dt0, None)
        assert err is None
        assert index_get_ref01_data_dt0_loaded is not None



def _index_get_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/index_get/IndexGetTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = FastapiSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["index_get01", "index_get02", "index_get03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "FASTAPI_TEST_INDEX_GET_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "FASTAPI_TEST_INDEX_GET_ENTID": idmap,
        "FASTAPI_TEST_LIVE": "FALSE",
        "FASTAPI_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("FASTAPI_TEST_INDEX_GET_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("FASTAPI_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = FastapiSDK(helpers.to_map(merged_opts))

    _live = env.get("FASTAPI_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("FASTAPI_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
