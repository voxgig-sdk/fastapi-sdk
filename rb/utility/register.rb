# Fastapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FastapiUtility.registrar = ->(u) {
  u.clean = FastapiUtilities::Clean
  u.done = FastapiUtilities::Done
  u.make_error = FastapiUtilities::MakeError
  u.feature_add = FastapiUtilities::FeatureAdd
  u.feature_hook = FastapiUtilities::FeatureHook
  u.feature_init = FastapiUtilities::FeatureInit
  u.fetcher = FastapiUtilities::Fetcher
  u.make_fetch_def = FastapiUtilities::MakeFetchDef
  u.make_context = FastapiUtilities::MakeContext
  u.make_options = FastapiUtilities::MakeOptions
  u.make_request = FastapiUtilities::MakeRequest
  u.make_response = FastapiUtilities::MakeResponse
  u.make_result = FastapiUtilities::MakeResult
  u.make_point = FastapiUtilities::MakePoint
  u.make_spec = FastapiUtilities::MakeSpec
  u.make_url = FastapiUtilities::MakeUrl
  u.param = FastapiUtilities::Param
  u.prepare_auth = FastapiUtilities::PrepareAuth
  u.prepare_body = FastapiUtilities::PrepareBody
  u.prepare_headers = FastapiUtilities::PrepareHeaders
  u.prepare_method = FastapiUtilities::PrepareMethod
  u.prepare_params = FastapiUtilities::PrepareParams
  u.prepare_path = FastapiUtilities::PreparePath
  u.prepare_query = FastapiUtilities::PrepareQuery
  u.result_basic = FastapiUtilities::ResultBasic
  u.result_body = FastapiUtilities::ResultBody
  u.result_headers = FastapiUtilities::ResultHeaders
  u.transform_request = FastapiUtilities::TransformRequest
  u.transform_response = FastapiUtilities::TransformResponse
}
