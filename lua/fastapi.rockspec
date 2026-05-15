package = "voxgig-sdk-fastapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/fastapi-sdk.git"
}
description = {
  summary = "Fastapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["fastapi_sdk"] = "fastapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
