import type { Equal, Expect } from '@type-challenges/utils';

type MyExclude<T, U> = T extends U ? never : T;

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
];

/*
*해설
T 요소 중 U에 포함되는 경우 제외시키도록 삼항 연산자를 사용
*/
