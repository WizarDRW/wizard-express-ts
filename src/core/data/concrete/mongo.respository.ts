import { MongoContext } from "../../context/mongo.context";
import { iEntity } from "../../entity/abstract/iEntity.core";
import { iRepositoryBaseNoSql } from "../iRepositoryBaseNosql";
import mongoose from 'mongoose'

export class MongoRepository<T extends iEntity> implements iRepositoryBaseNoSql<T>{
    constructor(private conn: string){
        var db = MongoContext.getInstance(this.conn);
        db.connection();
    }

    add(collection: string, entity: T): T {
        throw new Error("Method not implemented.");
    }
    update(collection: string, entity: T): T {
        throw new Error("Method not implemented.");
    }
    delete(collection: string, id: string): T {
        throw new Error("Method not implemented.");
    }
    async get(collection: string, param: any): Promise<T> {
        const result: T = await mongoose.model(collection, new mongoose.Schema<T>()).find(param)
        return result;
    }
    async getAll(collection: string, param: any): Promise<T[]> {
        const result: T[] = await mongoose.model(collection, new mongoose.Schema<T>()).aggregate(param)
        return result;
    }    
}