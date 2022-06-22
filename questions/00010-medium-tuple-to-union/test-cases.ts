import type { Equal, Expect } from '@type-challenges/utils';

type TupleToUnion<T extends any[]> = T[number];

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
];

/*
*해설
T가 배열인 경우, 배열의 값들을 타입으로 가진다. 
T[number]를 해주는 이유는, 배열도 키값으로 숫자를 갖는 객체이기 때문이다.
*/
