import { Log } from "../../models/log.model";
import {Request, Response, NextFunction} from "express"

export interface iLogService {
    getAll(req: Request, res: Response, next: NextFunction): Array<Log>,
    get(req: Request, res: Response, next: NextFunction): any,
    add(req: Request, res: Response): Log,
    update(req: Request, res: Response): Log,
    delete(req: Request, res: Response): string
}