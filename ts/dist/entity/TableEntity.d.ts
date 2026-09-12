import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { Table, TableLoadMatch } from '../FastapiTypes';
declare class TableEntity extends FastapiEntityBase<Table> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: TableEntity): TableEntity;
    load(this: any, reqmatch?: TableLoadMatch, ctrl?: Control): Promise<TableEntity>;
}
export { TableEntity };
