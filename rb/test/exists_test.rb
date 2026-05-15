# Fastapi SDK exists test

require "minitest/autorun"
require_relative "../Fastapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FastapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
