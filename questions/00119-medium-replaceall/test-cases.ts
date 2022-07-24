import type { Equal, Expect } from '@type-challenges/utils';

type ReplaceAll<
  S extends string,
  F extends string,
  T extends string,
> = S extends `${infer A}${F}${infer B}`
  ? F extends ''
    ? S
    : `${ReplaceAll<A, F, T>}${T}${ReplaceAll<B, F, T>}`
  : S;

type test = ReplaceAll<'foobarfoobar', 'ob', 'b'>; // 'fobarfobar'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
];

/*
*해설
116번 replace 문제와 비슷하게 해결하였으나, replaceAll인 점을 고려하여 재귀적으로 수행될 수 있게 만들었다.

replace에서는 문자열 S를 `${infer A}${F}${infer B}`로 두어 F -> T로 교체될 수 있도록 만들은 반면,
replaceAll에서는 `${infer A}${F}${infer B}`의 F를 T로 대체하는 부분은 동일하나, A와 B에 각각 ReplaceAll을 재귀적으로 적용하여 
모든 F에 대해 replace가 적용될 수 있도록 만들었다.
*/
