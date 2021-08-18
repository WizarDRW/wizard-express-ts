
export interface NoParamConstractor<T>{
    new(): T;
  }

export class Factory {
  create<T>(type: new () => T): T {
    return new type();
  }
}
