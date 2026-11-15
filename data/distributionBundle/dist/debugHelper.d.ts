import { Logger } from 'clientnode';
export declare const log: Logger;
export interface ChangedValue<Type> {
    path: Array<string>;
    oldValue: Type;
    newValue: Type;
}
export declare const getChanges: <Type, SubValue>(oldValue: Type, newValue: Type, path?: Array<string>, recursiveLimit?: number) => ChangedValue<SubValue>[] | {
    oldValue: Type;
    newValue: Type;
    path: string[];
}[];
export declare const useOldValue: <Type>(value: Type) => Type | undefined;
export declare const useLogChanges: <Type>(value: Type, description?: Array<string> | string, recursiveLimit?: number) => void;
