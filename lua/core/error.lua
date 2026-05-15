-- Fastapi SDK error

local FastapiError = {}
FastapiError.__index = FastapiError


function FastapiError.new(code, msg, ctx)
  local self = setmetatable({}, FastapiError)
  self.is_sdk_error = true
  self.sdk = "Fastapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FastapiError:error()
  return self.msg
end


function FastapiError:__tostring()
  return self.msg
end


return FastapiError
