import { Context } from './Context';
declare class FastapiError extends Error {
    isFastapiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FastapiError };
