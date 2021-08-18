export interface iEntity{
    id: string;

    bindList(...args: Array<object>): Array<object>;
    bindId(id: string): void;
    bind(obj: object): object;
}