# Fastapi SDK utility: prepare_body
require_relative 'media'
module FastapiUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FastapiUtilities.raw_body(ctx.reqdata) if FastapiUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
