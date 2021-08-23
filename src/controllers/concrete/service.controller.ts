import { iServiceDal } from "../../data-access/sql/abstract/iService.dal";
import { Service } from "../../models/service.model";
import { iServiceManager } from "../abstract/iService.controller"
import {Request, Response, NextFunction} from "express"
import { Datas } from "../../utils/fake-datas/index"


export class ServiceController implements iServiceManager{
  private static instance: ServiceController;

  private constructor(private readonly logdal: iServiceDal) {}

  public static getInstance(logdal: iServiceDal): ServiceController {
    if (!ServiceController.instance)
        ServiceController.instance = new ServiceController(logdal);

    return ServiceController.instance;
  }

  getAll(req: Request, res: Response, next: NextFunction): Service[] {
    var result: any[];
    result = this.logdal.getAll(Datas.services, "");
    return result;
  }
  get(req: Request, res: Response, next: NextFunction): Service {
    var result: Service = new Service();
    result = this.logdal.get("select * from services where id=21", "");
    return result;
  }
  add(req: Request, res: Response): Service {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response): Service {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): string {
    throw new Error("Method not implemented.");
  }
}