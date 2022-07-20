import type { Equal, Expect } from '@type-challenges/utils';

type Last<T extends any[]> = T extends [...any, infer L] ? L : never;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
];

/*
*해설
rest property를 사용하여 배열 T의 마지막 요소를 L로 두고, L의 타입을 런타임 환경에서 추론하여 반환
*/
