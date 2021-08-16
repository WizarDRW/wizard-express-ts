import {iEntity} from './abstract/iEntity.core'

export class Entity implements iEntity {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }

    constructor(id: string){
        this.id = id;
    }
}