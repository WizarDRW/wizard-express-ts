import { MySqlRepository } from "../../../core/data/concrete/mysql.repository";
import { iServiceDal } from "../abstract/iService.dal";

import { Service } from "../../../models/service.model";

export class ServiceDal
  extends MySqlRepository<Service>
  implements iServiceDal
{
  constructor() {
    super(Service);
  }
}
