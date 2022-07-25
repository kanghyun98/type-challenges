import type { Equal, Expect } from '@type-challenges/utils';

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];

type test = Permutation<'A' | 'B' | 'C'>;

type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<
    Equal<
      Permutation<'A' | 'B' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<
    Equal<
      Permutation<'B' | 'A' | 'C'>,
      | ['A', 'B', 'C']
      | ['A', 'C', 'B']
      | ['B', 'A', 'C']
      | ['B', 'C', 'A']
      | ['C', 'A', 'B']
      | ['C', 'B', 'A']
    >
  >,
  Expect<Equal<Permutation<never>, []>>,
];

/*
*해설
우선 never이 들어왔을 때, 빈 배열 []을 반환하기 위한 처리를 먼저 진행하고,
T에 A, B, C가 순차적으로 들어가며, 해당 요소를 제거한 타입들에 대해 재귀적으로 순열을 구하는 방식이다.
*/
