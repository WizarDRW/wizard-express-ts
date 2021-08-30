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

  bind(args: Log) {
    var log = new Log();
    log = args;
    return log;
  }

  bindList(...args: any[]): any[] {
    var arr: any[] = [];
    args.forEach((element) => {
      var log = new Log();
      arr.push((log = element));
    });
    return arr;
  }

  public findId(expression: (this: void, value: Log, index: number, obj: Log[]) => object, ...args: Log[]): object {
    return args.find(expression);
  }
}
