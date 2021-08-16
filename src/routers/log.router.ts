import { CommonRouterConfig } from "./common";
import express, {Request, Response} from 'express'
import {LogController} from '../controllers/concrete/log.controller'
import { LogDal } from "../data-access/concrete/log.dal";

export class LogRouter extends CommonRouterConfig{
    constructor(app: express.Application){
        super(app, 'LogRouter')
    }

    configureRoutes() {
        this.app.route('/log')
        .get((req: Request, res: Response, next: express.NextFunction) => {
            const cont = LogController.getInstance(new LogDal());
            var result = cont.get(req, res, next)
            res.send(result)
        })
        return this.app;
    }
}