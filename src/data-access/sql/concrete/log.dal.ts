import { MySqlRepository } from "../../../core/data/concrete/mysql.repository";
import { iLogDal } from "../abstract/iLog.dal";

import { Log } from "../../../models/log.model";

export class LogDal extends MySqlRepository<Log> implements iLogDal {}
