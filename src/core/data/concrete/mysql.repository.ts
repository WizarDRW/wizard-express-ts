import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBase } from "../iRepositoryBase";
import { Factory, NoParamConstractor } from "../../factories/proxy.factory";

export class MySqlRepository<T extends iEntity> implements iRepositoryBase<T> {
  data: T;

  constructor(ctor: NoParamConstractor<T>) {
    this.data = new ctor();
  }

  add(sql: any, entity: any): T {
    throw new Error(sql);
  }
  update(sql: any, entity: any): T {
    throw new Error(sql);
  }
  delete(sql: any, id: any): T {
    throw new Error(sql);
  }
  get(sql: any, param: any): T {
    var ad: T = this.data;
    ad.id = '12';
    return ad;
  }
  getAll(sql: any, param: ""): T[] {
    throw new Error(sql);
  }
}
