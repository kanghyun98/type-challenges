import type { Equal, Expect } from '@type-challenges/utils';

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  isMotherRussia: false | undefined;
};

type AppendToObject<O, K extends string, V> = {
  [T in keyof O | K]: T extends keyof O ? O[T] : V;
};

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
];

/*
*해설
generic 설명) 기존 객체: O, 새로 들어올 key: K, 새로 들어올 value: V
객체 O의 키 값들과 새로 들어올 키 값인 K를 union type으로 묶은 뒤,
in 연산자를 사용해 순회하며, 
기존 객체 O에 있는 값이면 기존 값 그대로, 아니면 V 값을 반환하도록 만들어 새로운 객체를 생성한다.
*/
