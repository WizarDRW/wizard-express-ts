import { iEntity } from "../core/entity/abstract/iEntity.core";
import { Entity } from "../core/entity/Entity.core";

export class Log extends Entity {
  /**
   * Log tarihi
   */
  date: Date;
  /**
   * Log içeriği
   */
  content: string;
  /**
   * İşlem yapan kullanıcı
   */
  user: object;

  bind(args: any) {
    super.bindId(args["id"]);
    this.date = args["date"];
    this.content = args["content"];
    this.user = args["user"];
    return this;
  }

  public bindList(...args: object[]): object[] {
    throw new Error("Method not implemented.");
  }
}
