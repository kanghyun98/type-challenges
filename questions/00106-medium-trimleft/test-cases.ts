import type { Equal, Expect } from '@type-challenges/utils';

type Empty = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Empty}${infer R}` ? TrimLeft<R> : S;

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
];

/*
*해설
여백을 처리하기 위해 직접 지정해줘야하는 것을 알아야 한다.
그래서 Empty라는 타입을 만들었고, 문자열 S의 좌측에 여백이 있으면 이를 제거하고
여백이 없을 때까지 재귀적으로 반복하는 로직이다.
*/
