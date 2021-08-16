import {Entity} from '../core/entity/Entity.core'

export class Log extends Entity {
    /**
     * Log tarihi
     */
    date : Date;
    /**
     * Log içeriği
     */
    content : string;
    /**
     * İşlem yapan kullanıcı
     */
    user : object;

    constructor(id: string, date: Date, content: string, user: object){
        super(id);
        this.date = date;
        this.content = content;
        this.user = user;
    }
}