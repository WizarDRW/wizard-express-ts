import { iEntity } from "../entity/abstract/iEntity.core";

export interface iRepositoryBase<T extends iEntity> {
    add(sql, entity): T;
    update(sql, entity): T;
    delete(sql, id): T;
    get(sql, param): string;
    getAll(sql, param: ''): Array<T>;
}