import express from 'express'
import {LogController} from '../controllers/concrete/log.controller'
import { LogDal } from '../data-access/concrete/log.dal';
import {iLogService} from '../controllers/abstract/iLog.controller'

const logv1: iLogService = LogController.getInstance(new LogDal());
// const logv1: iLogService = new LogController(new LogDal());

const route = express.Router();

route.get('/getAll', logv1.getAll)

route.get('/get', logv1.get)

route.post('/', logv1.add)

export default route;