import { Request, Response, NextFunction } from "express";
import { Log } from "../../models/log.model";
import { iLogService } from "../abstract/iLog.controller";
import { iLogDal } from "../../data-access/sql/abstract/iLog.dal";

export class LogController implements iLogService {
  private static instance: LogController;

  private constructor(private readonly logdal: iLogDal) {}

  public static getInstance(logdal: iLogDal): LogController {
    if (!LogController.instance)
      LogController.instance = new LogController(logdal);

    return LogController.instance;
  }

  getAll(req: Request, res: Response, next: NextFunction): Log[] {
    var result: any[];
    result = this.logdal.getAll("select * from logs", "");
    return result;
  }
  get(req: Request, res: Response, next: NextFunction): Log {
    var result: Log = new Log();
    result = this.logdal.get("select * from logs where id=21", "");
    return result;
  }
  add(req: Request, res: Response): Log {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response): Log {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): string {
    throw new Error("Method not implemented.");
  }
}
