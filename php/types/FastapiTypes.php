<?php
declare(strict_types=1);

// Typed models for the Fastapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** IndexGet entity data model. */
class IndexGet
{
}

/** Request payload for IndexGet#load. */
class IndexGetLoadMatch
{
    public ?string $ip = null;
}

/** Iprank entity data model. */
class Iprank
{
}

/** Request payload for Iprank#load. */
class IprankLoadMatch
{
}

/** Json entity data model. */
class Json
{
}

/** Request payload for Json#load. */
class JsonLoadMatch
{
    public ?string $ip = null;
}

/** Robot entity data model. */
class Robot
{
}

/** Request payload for Robot#load. */
class RobotLoadMatch
{
}

/** Simple entity data model. */
class Simple
{
}

/** Request payload for Simple#load. */
class SimpleLoadMatch
{
}

/** Table entity data model. */
class Table
{
}

/** Request payload for Table#load. */
class TableLoadMatch
{
}

