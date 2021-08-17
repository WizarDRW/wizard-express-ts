import { iEntity } from "../entity/abstract/iEntity.core";

export interface iRepositoryBase<T extends iEntity> {
  add(sql: string, entity: T): T;
  update(sql: string, entity: T): T;
  delete(sql: string, id: string): T;
  get(sql: string, param: any): T;
  getAll(sql: string, param: any): Array<T>;
}
