# ProjectName SDK exists test

import pytest
from fastapi_sdk import FastapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FastapiSDK.test(None, None)
        assert testsdk is not None
