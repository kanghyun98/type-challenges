import type { Equal, Expect } from '@type-challenges/utils';

// type IsNever<T> = T extends never ? true : false;
type IsNever<T> = [T] extends [never] ? true : false;

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
];

/*
*해설
타입 T가 never 타입일 때만 true를 반환하는 IsNever을 구현하기 위해,
처음에는 "T extends never"를 사용하려 했으나, 이는 T 값이 존재하지 않는 경우에만 true로 반환되기 때문에 무조건 false가 반환된다.
그래서 T 타입 자체가 never 타입인지 확인하기 위해 "[T] extends [never]"를 사용하여 해결하였다.
*/
