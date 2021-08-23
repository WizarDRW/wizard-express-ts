import { CommonRouterConfig } from "./common";
import express, { Request, Response } from "express";
import { ServiceController } from "../controllers/concrete/service.controller";
import { ServiceDal } from "../data-access/sql/concrete/service.dal";

export class ServiceRouter extends CommonRouterConfig {
  constructor(app: express.Application) {
    super(app, "LogRouter");
  }

  configureRoutes() {
    this.app
      .route("/services")
      .get((req: Request, res: Response, next: express.NextFunction) => {
        const cont = ServiceController.getInstance(new ServiceDal());
        var result = cont.getAll(req, res, next);
        res.send(result);
      });
    this.app
      .route("/service")
      .get((req: Request, res: Response, next: express.NextFunction) => {
        const cont = ServiceController.getInstance(new ServiceDal());
        var result = cont.get(req, res, next);
        res.send(result);
      });
    return this.app;
  }
}
