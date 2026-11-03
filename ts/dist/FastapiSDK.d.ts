import { IprankEntity } from './entity/IprankEntity';
import { JsonEntity } from './entity/JsonEntity';
export type * from './FastapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FastapiEntityBase } from './FastapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
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
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Iprank(entopts?: Record<string, any>): IprankEntity;
    Json(entopts?: Record<string, any>): JsonEntity;
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
export type { DirectResult };
