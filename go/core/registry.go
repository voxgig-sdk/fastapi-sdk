package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewIndexGetEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

var NewIprankEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

var NewJsonEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

var NewRobotEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

var NewSimpleEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

var NewTableEntityFunc func(client *FastapiSDK, entopts map[string]any) FastapiEntity

