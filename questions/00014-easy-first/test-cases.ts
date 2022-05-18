import type { Equal, Expect } from '@type-challenges/utils';

type First<T extends any[]> = T extends [] ? never : T[0];

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
];

/*
*해설
반환되는 타입이 배열의 첫 요소이지만, 배열이 [] 형태로 들어올 경우 never를 반환해야하므로 삼항 연산자를 사용해 처리하였다.
*/
