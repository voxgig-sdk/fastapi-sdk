# Fastapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FastapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      FastapiBaseFeature.new
    when "ratelimit"
      FastapiRatelimitFeature.new
    when "retry"
      FastapiRetryFeature.new
    when "test"
      FastapiTestFeature.new
    when "timeout"
      FastapiTimeoutFeature.new
    else
      FastapiBaseFeature.new
    end
  end
end
