import { Log } from "../../models/log.model";

export interface iLogService {
    getAll(req, res, next): Array<Log>,
    get(req, res, next): any,
    add(req, res): Log,
    update(req, res): Log,
    delete(req, res): string
}