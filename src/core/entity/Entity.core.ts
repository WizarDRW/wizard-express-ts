import {iEntity} from './abstract/iEntity.core'

export abstract class Entity implements iEntity {
    public abstract bindList(...args: object[]): object[];
    public abstract bind(obj: object): object;
    bindId(id: string) {
        this.id = id
    }
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }
    
}