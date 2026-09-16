# Fastapi SDK feature factory

from fastapi_sdk.feature.base_feature import FastapiBaseFeature
from fastapi_sdk.feature.ratelimit_feature import FastapiRatelimitFeature
from fastapi_sdk.feature.retry_feature import FastapiRetryFeature
from fastapi_sdk.feature.test_feature import FastapiTestFeature
from fastapi_sdk.feature.timeout_feature import FastapiTimeoutFeature


_FEATURES = {
    "base": lambda: FastapiBaseFeature(),
    "ratelimit": lambda: FastapiRatelimitFeature(),
    "retry": lambda: FastapiRetryFeature(),
    "test": lambda: FastapiTestFeature(),
    "timeout": lambda: FastapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
