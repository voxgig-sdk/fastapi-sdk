# Fastapi SDK utility: make_context

from fastapi_sdk.core.context import FastapiContext


def make_context_util(ctxmap, basectx):
    return FastapiContext(ctxmap, basectx)
