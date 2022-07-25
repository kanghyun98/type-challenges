import type { Equal, Expect } from '@type-challenges/utils';

type AppendArgument<F, T> = F extends (...args: infer A) => infer R
  ? (...args: [...A, T]) => R
  : never;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];

/*
*해설
함수 F에 대해서 F extends (...args: infer A) => infer R 라면,
추가하고자 하는 타입 T를 args의 타입에 추가해주면 되므로 (...args: [...A, T]) => R 타입을 반환한다
*/
