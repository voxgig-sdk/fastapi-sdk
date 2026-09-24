"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastapiError = void 0;
class FastapiError extends Error {
    isFastapiError = true;
    sdk = 'Fastapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FastapiError = FastapiError;
//# sourceMappingURL=FastapiError.js.map