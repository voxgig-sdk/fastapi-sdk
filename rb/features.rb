# Fastapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FastapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      FastapiBaseFeature.new
    when "test"
      FastapiTestFeature.new
    else
      FastapiBaseFeature.new
    end
  end
end
