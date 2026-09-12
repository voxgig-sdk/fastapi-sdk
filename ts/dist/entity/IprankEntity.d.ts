import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { Iprank, IprankLoadMatch } from '../FastapiTypes';
declare class IprankEntity extends FastapiEntityBase<Iprank> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: IprankEntity): IprankEntity;
    load(this: any, reqmatch?: IprankLoadMatch, ctrl?: Control): Promise<IprankEntity>;
}
export { IprankEntity };
