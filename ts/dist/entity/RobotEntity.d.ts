import { FastapiEntityBase } from '../FastapiEntityBase';
import type { FastapiSDK } from '../FastapiSDK';
import type { Control } from '../types';
import type { Robot, RobotLoadMatch } from '../FastapiTypes';
declare class RobotEntity extends FastapiEntityBase<Robot> {
    constructor(client: FastapiSDK, entopts: any);
    make(this: RobotEntity): RobotEntity;
    load(this: any, reqmatch?: RobotLoadMatch, ctrl?: Control): Promise<RobotEntity>;
}
export { RobotEntity };
