
import { Context } from './Context'


class FastapiError extends Error {

  isFastapiError = true

  sdk = 'Fastapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FastapiError
}

