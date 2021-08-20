import { Entity } from "../core/entity/Entity.core";

export class Service extends Entity {
  name: string;

  path: string;

  public bind(args: Service) {
    var service = new Service();
    service = args;
    return service;
  }

  public bindList(...args: any[]): any[] {
    var arr: any[] = [];
    args.forEach((element) => {
      var service = new Service();
      arr.push((service = element));
    });
    return arr;
  }
}
