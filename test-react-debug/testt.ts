interface FuncType {
    (name: string): Record<string, any>
    (name: string, age: number): Record<string, any>

}

declare const func: FuncType;



declare function func2(name: string): Record<string, any>;
declare function func2(name: string, age: number): Record<string, any>;


Promise.all