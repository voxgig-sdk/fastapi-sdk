import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { Simple, SimpleLoadMatch } from '../FastapiTypes';
declare class SimpleEntity extends FastapiEntityBase<Simple> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: SimpleEntity): SimpleEntity;
    load(this: any, reqmatch?: SimpleLoadMatch, ctrl?: Control): Promise<SimpleEntity>;
}
export { SimpleEntity };
