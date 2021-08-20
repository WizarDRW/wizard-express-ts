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
  get(sql: string, param: any): any {
    var ad: T = this.data;
    var res = ad.bind({
      id: "21",
      date: new Date(),
      content: sql,
      user: { name: "Nedim" },
    });
    return res;
  }
  getAll(sql: any, param: ""): T[] {
    var ad: T = this.data;
    return ad.bindList(
      {
        id: "21",
        date: new Date(),
        content: sql,
        user: { name: "Nedim" },
      },
      {
        id: "242141",
        date: new Date(),
        content: sql,
        user: { name: "Burak" },
      }
    );
  }
}
