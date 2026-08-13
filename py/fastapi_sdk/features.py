# Fastapi SDK feature factory

from fastapi_sdk.feature.base_feature import FastapiBaseFeature
from fastapi_sdk.feature.test_feature import FastapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FastapiBaseFeature(),
        "test": lambda: FastapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
