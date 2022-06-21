import type { Equal, Expect } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
];

/*
*해설
generic으로 받는 T 타입은 함수이어야하며, 함수가 맞다면 arguments에 대한 타입 P를 타입스크립트에서 런타임 환경에 추론하여 반환
*/
