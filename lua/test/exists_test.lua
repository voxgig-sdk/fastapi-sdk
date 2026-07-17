-- Fastapi SDK exists test

local sdk = require("fastapi_sdk")

describe("FastapiSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
