import type { Equal, Expect } from '@type-challenges/utils';

type KebabCase<T extends string> = T extends `${infer S}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<S>}${KebabCase<R>}`
    : `${Uncapitalize<S>}-${KebabCase<Uncapitalize<R>>}`
  : T;

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
];

/*
*해설
@Uncapitalize: Converts the first character in the string to a lowercase equivalent.

문자열 T를 `${infer S}${infer R}`로 두고,
첫 문자인 S에 대해서는 무조건 소문자가 될 수 있게 Uncapitalize<S>를 적용하고,
나머지 문자열 R에 대해서는 맨 앞 문자가 소문자면 KebabCase를 재귀적으로 적용, 
아니라면 "-"를 붙여주고 Uncapitalize<R>한 문자열에 대해 KebabCase를 재귀적으로 적용한다.
*/
