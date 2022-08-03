import type { Equal, Expect } from '@type-challenges/utils';

type AnyOf<T extends unknown[]> = T extends [infer S, ...infer R]
  ? S extends 0 | '' | false | [] | Record<string, never>
    ? AnyOf<R>
    : true
  : false;

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
];

/*
*해설
배열 요소 중 하나라도 true 값이면 true를 반환, 아니면 false를 반환하는 AnyOf 타입의 구현
(js에서 빈 배열, 빈 객체가 true로 평가되지만, 문제에서 이 또한 false로 반환할 수 있도록 구현하라고 함)

배열을 순회할 수 있게, 배열 T를 "T extends [infer S, ...infer R]" 로 두고, S 요소에 대해 true or false 를 판단할 수 있도록 만들었다.
true or false를 판단하는 기준은 Union Type을 이용해 ( 0 | '' | false | [] | Record<string, never> ) 을 사용하였다.

주의할 점)
빈 객체인 {}는 Object 타입과 동일하게 동작하므로, 이를 Union Type의 요소로 두게 되면
빈 객체와 배열 뿐만 아니라 값이 들어있는 객체와 배열, number, string, boolean에 해당하는 값들이 true로 반환된다.
(참고자료: https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript)
*/
