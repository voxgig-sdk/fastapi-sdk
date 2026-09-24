
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FastapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FastapiSDK.test()
    equal(testsdk instanceof FastapiSDK, true,
      'FastapiSDK.test() must return a client synchronously')
  })

})
