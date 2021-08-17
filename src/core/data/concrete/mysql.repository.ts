import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBase } from "../iRepositoryBase";


export class MySqlRepository<T extends iEntity> implements iRepositoryBase<T>{
    entity: new() => T;
    
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
        var ad: T = new this.entity()
        return ad;
    }
    getAll(sql: any, param: ""): T[] {
        throw new Error(sql);
    }
}