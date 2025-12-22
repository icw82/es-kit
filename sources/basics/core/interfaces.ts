/**
 * Вспомогательные общие классы
 */

/** Тип для булевых значений, представленных в виде строк */
export type BooleanAsString = 'true' | 'false';

/**
 * Тип возвращаемого значения, которое может возвращать либо само значение либо
 * Promise с этим значением
 */
export type SyncOrAsync<T> = T | Promise<T>;
export type SingleOrArray<T> = T | T[];

export type Optional<T extends object, K extends keyof T> =
	Omit<T, K> & Partial<Pick<T, K>>;

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

{ // TODO: Тестирование дженерика
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type A = ArrayElement<string[]>; // string

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type B = ArrayElement<readonly string[]>; // string

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type C = ArrayElement<[string, number]>; // string | number

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type D = ArrayElement<['foo', 'bar']>; // 'foo' | 'bar'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type E = ArrayElement<(string | (boolean | object))[]>;
    // string | boolean | object

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type S = ArrayElement<string[] | (boolean | object)[]>;
    // string | boolean | object
}
