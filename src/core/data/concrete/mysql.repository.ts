import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBase } from "../iRepositoryBase";


export class MySqlRepository<T extends iEntity> implements iRepositoryBase<T>{
    add(sql: any, entity: any): T {
        throw new Error(sql);
    }
    update(sql: any, entity: any): T {
        throw new Error(sql);
    }
    delete(sql: any, id: any): T {
        throw new Error(sql);
    }
    get(sql: any, param: any): string {
        return 'Deneme'
    }
    getAll(sql: any, param: ""): T[] {
        throw new Error(sql);
    }
}