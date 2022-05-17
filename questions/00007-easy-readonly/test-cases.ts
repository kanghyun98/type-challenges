import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

/*
*해설
@ readonly → when you define a property, you can use `readonl ` to prevent re-assignment.
@ const → A `cons ` variable cannot be re-assigned, just like a `readonl ` property.
@ Readonly<Type> → Constructs a type with all properties of Type set to readonly

T의 요소들을 readonly로 모두 바꾸기 위헤, 순회하면서 readonly를 적용한다
*/
