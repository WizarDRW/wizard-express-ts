import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBase } from "../iRepositoryBase";
import { Factory, NoParamConstractor } from "../../factories/proxy.factory";
import {Datas} from "../../../utils/fake-datas/index"

export class MySqlRepository<T extends iEntity> implements iRepositoryBase<T> {
  data: T;

  constructor(ctor: NoParamConstractor<T>) {
    this.data = new ctor();
  }

  add(sql: any, entity: T): T {
    var ad: T = this.data;
    var res = ad.bind(sql);
    var push = ad.bindList(sql);
    push.push(res);
    return entity;
  }
  update(sql: any, entity: any): T {
    var ad: T = this.data;
    var res = ad.bindList(sql);
    res.push(entity);
    return entity;
  }
  delete(sql: any, id: any): T {
    throw new Error(sql);
  }
  get(sql: any, param: any): any {
    var ad: T = this.data;
    var res = ad.bind(sql);
    return res;
  }
  getAll(sql: any, param: ""): T[] {
    var ad: T = this.data;
    return ad.bindList(sql);
  }
}
