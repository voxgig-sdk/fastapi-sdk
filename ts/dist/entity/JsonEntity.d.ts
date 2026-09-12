import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { Json, JsonLoadMatch } from '../FastapiTypes';
declare class JsonEntity extends FastapiEntityBase<Json> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: JsonEntity): JsonEntity;
    load(this: any, reqmatch?: JsonLoadMatch, ctrl?: Control): Promise<JsonEntity>;
}
export { JsonEntity };
