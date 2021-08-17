import { iEntity } from "../entity/abstract/iEntity.core";

export interface iRepositoryBaseNoSql<T extends iEntity> {
  add(collection: string, entity: T): T;
  update(collection: string, entity: T): T;
  delete(collection: string, id: string): T;
  get(collection: string, param: any): Promise<T>;
  getAll(collection: string, param: any): Promise<T[]>;
}
