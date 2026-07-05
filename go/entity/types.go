// Typed models for the Fastapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// IndexGet is the typed data model for the index_get entity.
type IndexGet struct {
}

// IndexGetLoadMatch is the typed request payload for IndexGet.LoadTyped.
type IndexGetLoadMatch struct {
}

// Iprank is the typed data model for the iprank entity.
type Iprank struct {
}

// IprankLoadMatch is the typed request payload for Iprank.LoadTyped.
type IprankLoadMatch struct {
}

// Json is the typed data model for the json entity.
type Json struct {
}

// JsonLoadMatch is the typed request payload for Json.LoadTyped.
type JsonLoadMatch struct {
}

// Robot is the typed data model for the robot entity.
type Robot struct {
}

// RobotLoadMatch is the typed request payload for Robot.LoadTyped.
type RobotLoadMatch struct {
}

// Simple is the typed data model for the simple entity.
type Simple struct {
}

// SimpleLoadMatch is the typed request payload for Simple.LoadTyped.
type SimpleLoadMatch struct {
}

// Table is the typed data model for the table entity.
type Table struct {
}

// TableLoadMatch is the typed request payload for Table.LoadTyped.
type TableLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
