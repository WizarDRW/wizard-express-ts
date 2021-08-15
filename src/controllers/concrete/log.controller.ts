import { Request, Response } from 'express'
import { Log } from '../../models/log.model';
import {iLogService} from '../abstract/iLog.controller'
import {iLogDal} from '../../data-access/abstract/iLog.dal'

export class LogController implements iLogService{
    private static instance: LogController;

    private constructor(private readonly logdal: iLogDal) {}

    public static getInstance(logdal: iLogDal): LogController{
        if(!LogController.instance)
            LogController.instance = new LogController(logdal);
        
        return LogController.instance;
    }

    getAll(req: any, res: any, next: any): Log[] {
        throw new Error('Method not implemented.');
    }
    get(req: Request, res: Response, next: any): any {
        const result: Log = new Log();
        result.content = this.logdal.get('','')
        return res.send(result)
    }
    add(req: any, res: any): Log {
        throw new Error('Method not implemented.');
    }
    update(req: any, res: any): Log {
        throw new Error('Method not implemented.');
    }
    delete(req: any, res: any): string {
        throw new Error('Method not implemented.');
    }
}