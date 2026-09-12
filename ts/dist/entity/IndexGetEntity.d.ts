import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { IndexGet, IndexGetLoadMatch } from '../FastapiTypes';
declare class IndexGetEntity extends FastapiEntityBase<IndexGet> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: IndexGetEntity): IndexGetEntity;
    load(this: any, reqmatch?: IndexGetLoadMatch, ctrl?: Control): Promise<IndexGetEntity>;
}
export { IndexGetEntity };
