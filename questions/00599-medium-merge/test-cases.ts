import type { Equal, Expect } from '@type-challenges/utils';

type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof B ? B[K] : K extends keyof A ? A[K] : never;
};

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >,
];

/*
*해설
객체 A와 B의 결합된 타입을 제공하는 Merge를 만들기 위해 A와 B의 key 값들(union type)을 순회(with 'in' operator)한다.
조건에서 B의 키가 A의 키를 override 한다고 했으므로, 키 값 K가 B의 키 값인지 먼저 확인 후 해당하는 키 값을 적용하도록 만들었다.

*/
