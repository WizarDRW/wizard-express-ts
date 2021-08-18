export interface NoParamConstractor<T> {
  new (): T;
}

export class Factory {
  private static instance: Factory;

  private constructor() {}

  public static getInstance(): Factory {
    if (!Factory.instance) Factory.instance = new Factory();

    return Factory.instance;
  }
  create<T>(type: {new (...args: any[]): T}, ...ctrlArgs: any[]): T {
    let obj = new type(...ctrlArgs)
    return obj;
  }
}
