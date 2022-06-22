import type { Equal, Expect } from '@type-challenges/utils';

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

/*
*해설
객체 T의 키값들 중 K에 포함되는 값들은 제거하고 반환할 수 있도록 Exclude를 활용
(Exclude 동작 방식은 43번 MyExclude 구현부에서 확인 가능)
*/
