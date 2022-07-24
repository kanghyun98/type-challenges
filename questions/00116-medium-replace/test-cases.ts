import type { Equal, Expect } from '@type-challenges/utils';

type Replace<
  S extends string,
  F extends string,
  T extends string,
> = S extends `${infer A}${F}${infer B}` ? (F extends '' ? S : `${A}${T}${B}`) : S;

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
];

/*
*해설
기존 문자열: S, 변경될 문자열: F, 변경할 문자열: T
문자열 S를 `${infer A}${F}${infer B}`로 두어 F -> T로 교체될 수 있도록 만들었다.
F가 빈문자열이거나 F를 찾을 수 없을 경우, 기존 문자열 S가 그대로 나올 수 있도록 만들었다.
*/
