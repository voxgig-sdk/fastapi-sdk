# Fastapi SDK feature factory

from feature.base_feature import FastapiBaseFeature
from feature.test_feature import FastapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FastapiBaseFeature(),
        "test": lambda: FastapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
