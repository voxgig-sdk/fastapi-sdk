package voxgigfastapisdk

import (
	"github.com/voxgig-sdk/fastapi-sdk/go/core"
	"github.com/voxgig-sdk/fastapi-sdk/go/entity"
	"github.com/voxgig-sdk/fastapi-sdk/go/feature"
	_ "github.com/voxgig-sdk/fastapi-sdk/go/utility"
)

// Type aliases preserve external API.
type FastapiSDK = core.FastapiSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FastapiEntity = core.FastapiEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FastapiError = core.FastapiError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewIndexGetEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewIndexGetEntity(client, entopts)
	}
	core.NewIprankEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewIprankEntity(client, entopts)
	}
	core.NewJsonEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewJsonEntity(client, entopts)
	}
	core.NewRobotEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewRobotEntity(client, entopts)
	}
	core.NewSimpleEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewSimpleEntity(client, entopts)
	}
	core.NewTableEntityFunc = func(client *core.FastapiSDK, entopts map[string]any) core.FastapiEntity {
		return entity.NewTableEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFastapiSDK = core.NewFastapiSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
