import type { Equal, Expect } from '@type-challenges/utils';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];

/*
*해설
@ keyof T -> T의 key 값을 union type으로 이은 mapped type을 생성
@ in -> javascript에서는 object가 해당 property를 갖고있는지 판별해주는 연산자인데, 타입스크립트에서는 이를 key의 union에서 item들을 순회하는데 사용한다.
(in keyword is used there as part of the syntax to iterate over all the items in a union of keys) 

MyPick 제네릭의 두번째 인자로 오는 요소 K가 T의 key의 부분집합이므로, MyPick<T, K extends keyof T> 로 정의
*/
