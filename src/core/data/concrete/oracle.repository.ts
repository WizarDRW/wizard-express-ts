import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBase } from "../iRepositoryBase";

export class OracleRepository<T extends iEntity> implements iRepositoryBase<T>{
    add(sql: any, entity: any): T {
        throw new Error("Method not implemented.");
    }
    update(sql: any, entity: any): T {
        throw new Error("Method not implemented.");
    }
    delete(sql: any, id: any): T {
        throw new Error("Method not implemented.");
    }
    get(sql: any, param: any): T {
        throw new Error("Method not implemented.");
    }
    getAll(sql: any, param: ""): T[] {
        throw new Error("Method not implemented.");
    }
    
}