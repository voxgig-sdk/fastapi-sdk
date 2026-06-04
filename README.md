# Fastapi SDK

Look up geolocation, network and robot-detection info for any IP address via realip.cc

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About FastAPI

[realip.cc](https://realip.cc) is a free IP geolocation and network-info service built on FastAPI and maintained by Bboysoul. The OpenAPI document is titled simply "FastAPI" because it inherits the framework default, but the actual product is IP lookup at `https://realip.cc`.

What you typically get back for a given IP address:

- IP address, city, province, country, continent and ISO country code
- ISP / network owner and network range
- Coordinates (latitude / longitude) and postal code
- Timezone
- Data update timestamp
- A robot / bot classification signal and an IP rank score

Operational notes: the service is open and does not document an API key requirement. Concurrent requests are rate-limited (specific thresholds are not published). CORS is reported as disabled, so calls are best made from server-side code. Human-readable docs live at `/docs` (Swagger UI). The author also publishes a blog at [bboy.app](https://www.bboy.app).

## Try it

**TypeScript**
```bash
npm install fastapi
```

**Python**
```bash
pip install fastapi-sdk
```

**PHP**
```bash
composer require voxgig/fastapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fastapi-sdk/go
```

**Ruby**
```bash
gem install fastapi-sdk
```

**Lua**
```bash
luarocks install fastapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FastapiSDK } from 'fastapi'

const client = new FastapiSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fastapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fastapi": {
      "command": "/abs/path/to/fastapi-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **IndexGet** | Root lookup that returns IP geolocation and network info for the caller (or a supplied IP) — served from `/`. | `/` |
| **Iprank** | IP reputation / rank score for a given address, used to gauge how suspicious an IP is. | `/stat/iprank` |
| **Json** | JSON-formatted IP info response variant. | `/json` |
| **Robot** | Robot / bot detection signal indicating whether the IP looks like an automated client. | `/robots.txt` |
| **Simple** | Minimal / plain-text variant of the IP lookup response. | `/simple` |
| **Table** | Tabular (human-readable) variant of the IP lookup response. | `/table` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fastapi_sdk import FastapiSDK

client = FastapiSDK({})


# Load a specific indexget
indexget, err = client.IndexGet(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'fastapi_sdk.php';

$client = new FastapiSDK([]);


// Load a specific indexget
[$indexget, $err] = $client->IndexGet(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fastapi-sdk/go"

client := sdk.NewFastapiSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Fastapi_sdk"

client = FastapiSDK.new({})


# Load a specific indexget
indexget, err = client.IndexGet(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("fastapi_sdk")

local client = sdk.new({})


-- Load a specific indexget
local indexget, err = client:IndexGet(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FastapiSDK.test()
const result = await client.IndexGet().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FastapiSDK.test(None, None)
result, err = client.IndexGet(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FastapiSDK::test(null, null);
[$result, $err] = $client->IndexGet(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.IndexGet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FastapiSDK.test(nil, nil)
result, err = client.IndexGet(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:IndexGet(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the FastAPI

- Upstream: [https://realip.cc](https://realip.cc)
- API docs: [https://realip.cc/docs](https://realip.cc/docs)

---

Generated from the FastAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
