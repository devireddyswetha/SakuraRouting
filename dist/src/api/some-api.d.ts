/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/api';
import { NextFunction, Request, Response } from 'express';
import { LogService } from '../services/log-service';
export { SakuraApi };
declare const SomeApi_base: {
    new (...args: any[]): {
        sapi?: SakuraApi;
        sapiConfig?: any;
    };
    getRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    getAllRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    putRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    postRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    deleteRouteHandler?: (req: Request, res: Response, next: NextFunction) => void;
    sapi?: SakuraApi;
    sapiConfig?: any;
} & (new (...args: any[]) => {});
export declare class SomeApi extends SomeApi_base {
    private logservice;
    constructor(logservice: LogService);
    users(req: Request, res: Response, next: NextFunction): void;
    saveUser(req: Request, res: Response, next: NextFunction): void;
}
