import type { Equal, Expect } from '@type-challenges/utils';

type Concat<A extends any[], B extends any[]> = [...A, ...B];

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
];

/*
*해설
배열 A와 B가 들어왔을 때, spread operation '...' 을 사용하여 두 배열을 결합
*/
