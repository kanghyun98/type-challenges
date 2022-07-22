import type { Equal, Expect } from '@type-challenges/utils';

type Empty = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends `${Empty}${infer R}` | `${infer R}${Empty}` ? Trim<R> : S;

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
];

/*
*해설
106번 문제 TrimLeft와 매우 비슷하다.
단, 우측에 있는 여백도 제거해야하므로 union type을 사용하였다.
*/
