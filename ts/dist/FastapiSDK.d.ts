import { IndexGetEntity } from './entity/IndexGetEntity';
import { IprankEntity } from './entity/IprankEntity';
import { JsonEntity } from './entity/JsonEntity';
import { RobotEntity } from './entity/RobotEntity';
import { SimpleEntity } from './entity/SimpleEntity';
import { TableEntity } from './entity/TableEntity';
export type * from './FastapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FastapiEntityBase } from './FastapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FastapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    IndexGet(entopts?: Record<string, any>): IndexGetEntity;
    Iprank(entopts?: Record<string, any>): IprankEntity;
    Json(entopts?: Record<string, any>): JsonEntity;
    Robot(entopts?: Record<string, any>): RobotEntity;
    Simple(entopts?: Record<string, any>): SimpleEntity;
    Table(entopts?: Record<string, any>): TableEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FastapiSDK;
    tester(testopts?: any, sdkopts?: any): FastapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FastapiSDK;
export { stdutil, config, BaseFeature, FastapiEntityBase, FastapiSDK, SDK, };
