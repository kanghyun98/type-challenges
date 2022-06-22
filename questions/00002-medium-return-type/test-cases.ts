import type { Equal, Expect } from '@type-challenges/utils';

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer S ? S : never;

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
];

type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

/*
*해설
generic으로 받는 T 타입은 함수이어야하며, 함수가 맞다면 return 값에 대한 타입 S를 타입스크립트에서 런타임 환경에 추론하여 반환
*/
