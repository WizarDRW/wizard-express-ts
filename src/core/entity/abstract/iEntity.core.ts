export interface iEntity{
    id: string;
    bindList(...args: any[]): any[];
    bind(obj: object): object;
}