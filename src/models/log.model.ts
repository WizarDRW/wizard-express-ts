import {Entity} from '../core/entity/Entity.core'

export class Log extends Entity {
    /**
     * Log tarihi
     */
    private _date : Date;
    public get date() : Date {
        return this._date;
    }
    public set date(v : Date) {
        this._date = v;
    }
    
    /**
     * Log içeriği
     */
    private _content : string;
    public get content() : string {
        return this._content;
    }
    public set content(v : string) {
        this._content = v;
    }
    
    /**
     * İşlem yapan kullanıcı
     */
    private _user : string;
    public get user() : string {
        return this._user;
    }
    public set user(v : string) {
        this._user = v;
    }
    
}