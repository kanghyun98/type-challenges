import type { Equal, Expect } from '@type-challenges/utils';

// 00189-easy-awaited
type MyAwaited<T> = T extends Promise<infer S> ? MyAwaited<S> : T;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T],
): Promise<{
  [k in keyof T]: MyAwaited<T[k]>;
}>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
];

/*
*해설
PromiseAll 함수의 argument로 배열이 오고, 해당 배열의 타입을 반환값으로 만들어야하므로 argument에 대한 타입을 위처럼 만든다.
그리고 이전에 만들었던 MyAwaited 타입을 이용해 배열에 resolve된 Promise가 와도 반환값의 타입을 반환하도록 만든다.
*/
