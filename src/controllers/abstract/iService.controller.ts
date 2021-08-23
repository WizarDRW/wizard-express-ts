import { Service } from "../../models/service.model";
import {Request, Response, NextFunction} from "express"

export interface iServiceManager {
    getAll(req: Request, res: Response, next: NextFunction): Array<Service>,
    get(req: Request, res: Response, next: NextFunction): any,
    add(req: Request, res: Response): Service,
    update(req: Request, res: Response): Service,
    delete(req: Request, res: Response): string
}