import type { Equal, Expect } from '@type-challenges/utils';

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}` ? N : `${T}`;

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
];

/*
*해설
숫자값 자체를 절댓값을 구하는 것은 불가능하므로,
숫자를 문자열로 변환 후, "-" 문자가 앞에 붙어 있다면 "-"를 제외한 문자열을, 없다면 그대로를 반환할 수 있도록 만든다.
*/
