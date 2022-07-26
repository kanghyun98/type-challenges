import type { Equal, Expect } from '@type-challenges/utils';

type LengthOfString<T extends string, L extends string[] = []> = T extends `${infer S}${infer R}`
  ? LengthOfString<R, [...L, R]>
  : L['length'];

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

/*
*해설
타입에선 그냥 문자열의 길이를 추출할 수 없으므로, 문자열의 각 요소를 배열의 요소로 만든 후 배열의 길이를 파악하는 방식을 사용한다.
문자열 T와 문자열의 요소를 저장할 배열 L을 generic으로 받고
문자열 T가 `${infer S}${infer R}`의 확장자라면, 
재귀적으로 맨앞 문자열 S를 제외한 새로운 문자열 R과 기존 배열 L과 문자열 R을 포함한 배열을 generic으로 넘긴다.
최종적으로 빈 문자열이 된다면, 배열 L의 길이를 파악하여 결과를 반환한다.
*/
