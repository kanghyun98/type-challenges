import type { Equal, Expect } from '@type-challenges/utils';

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
];

/*
*해설
배열 T가 [infer F, ...infer R] 확장자가 아니면, 즉 빈 배열이면 빈 배열이 반환되도록 만들고,
만약 맞다면, R에 Flatten을 적용하고
F가 배열 내부의 배열일 수 있으므로, F가 배열인지도 검사하여 Flatten을 적용할 수 있도록 한다.
*/
