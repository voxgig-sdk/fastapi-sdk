# frozen_string_literal: true

# Typed models for the Fastapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Iprank entity data model.
class Iprank
end

# Request payload for Iprank#load.
class IprankLoadMatch
end

# Json entity data model.
class Json
end

# Request payload for Json#load.
#
# @!attribute [rw] ip
#   @return [String, nil]
JsonLoadMatch = Struct.new(
  :ip,
  keyword_init: true
)

