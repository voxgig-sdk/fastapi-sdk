# Fastapi SDK utility: make_context
require_relative '../core/context'
module FastapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    FastapiContext.new(ctxmap, basectx)
  }
end
