import type { Equal, Expect } from '@type-challenges/utils';

type StringToUnion<T extends string> = T extends `${infer S}${infer R}`
  ? S | StringToUnion<R>
  : never;

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<
    Equal<
      StringToUnion<'coronavirus'>,
      'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'
    >
  >,
];

/*
*해설
문자열 T를 `${infer S}${infer R}`로 두어 한 문자와 나머지 문자열에 대해 union type이 적용될 수 있도록 만들고 
재귀적으로 이를 적용하여 문자열 T의 모든 문자에 대해 union type이 적용될 수 있도록 만듦
*/
