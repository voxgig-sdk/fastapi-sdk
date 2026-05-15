
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FastapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FastapiSDK.test()
    equal(null !== testsdk, true)
  })

})
