import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "index_get",
    "accessor": "IndexGet",
    "op": "load",
    "method": "GET",
    "path": "/",
    "args": [],
    "select": {
      "ip": "v1"
    },
    "headers": [],
    "query": [
      "ip"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "iprank",
    "accessor": "Iprank",
    "op": "load",
    "method": "GET",
    "path": "/stat/iprank",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "json",
    "accessor": "Json",
    "op": "load",
    "method": "GET",
    "path": "/json",
    "args": [],
    "select": {
      "ip": "v1"
    },
    "headers": [],
    "query": [
      "ip"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "robot",
    "accessor": "Robot",
    "op": "load",
    "method": "GET",
    "path": "/robots.txt",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "simple",
    "accessor": "Simple",
    "op": "load",
    "method": "GET",
    "path": "/simple",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "table",
    "accessor": "Table",
    "op": "load",
    "method": "GET",
    "path": "/table",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
