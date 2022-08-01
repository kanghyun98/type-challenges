import type { Equal, Expect } from '@type-challenges/utils';

type Diff<A, B> = {
  [K in Exclude<keyof (A & B), keyof (A | B)>]: K extends keyof A
    ? A[K]
    : K extends keyof B
    ? B[K]
    : never;
};

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
];

/*
*해설
(합집합 - 교집합) 부분에 대한 타입을 원하므로 Exclude 타입을 적용하여 
해당 키 값들에 대해서만 순회를 돌 수 있게 만들었다.
*/
