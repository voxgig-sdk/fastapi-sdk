

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FastapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RobotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FASTAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('FASTAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FastapiSDK.test()
    const ent = testsdk.Robot()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FASTAPI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'robot.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"robot","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /robots.txt","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/robots.txt","q":{},"r":{},"s":[{"lit":"robots.txt"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"robot","name__orig":"robot","Name":"Robot","name_":"robot","name-":"robot","NAME":"ROBOT","index$":3}, {"active":true,"entity":"robot","key$":"BasicRobotFlow","kind":"basic","name":"BasicRobotFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"robot_ref01","srcdatavar":"robot_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-robot_ref01"}}],"index$":0}]}, 'Robot', {"GET /robots.txt":{"protocol":"http","operationId":"robotstxt_robots_txt_get","responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let robot_ref01_data = Object.values(setup.data.existing.robot)[0] as any

    // LOAD
    const robot_ref01_ent = client.Robot()
    const robot_ref01_match_dt0: any = {}
    const robot_ref01_data_dt0 = (await robot_ref01_ent.load(robot_ref01_match_dt0)).data()
    assert(null != robot_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/robot/RobotTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FastapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['robot01','robot02','robot03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FASTAPI_TEST_ROBOT_ENTID': idmap,
    'FASTAPI_TEST_LIVE': 'FALSE',
    'FASTAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FASTAPI_TEST_ROBOT_ENTID']

  const live = 'TRUE' === env.FASTAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FASTAPI_TEST_ROBOT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FastapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FASTAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
