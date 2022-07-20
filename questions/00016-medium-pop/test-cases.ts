import type { Equal, Expect } from '@type-challenges/utils';

type Pop<T extends any[]> = T extends [...infer B, infer L] ? B : never;

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
];

/*
*해설
rest property를 사용하여 배열 T의 마지막 요소를 L, 나머지는 B로 두고, B의 타입을 런타임 환경에서 추론하여 반환
*/
