# Fastapi SDK utility: feature_add
module FastapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
