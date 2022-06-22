import type { Alike, Expect } from '@type-challenges/utils';

type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [P in K]: T[P] } & { [P in Exclude<keyof T, K>]: T[P] };

type test = MyReadonly2<Todo1>;

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
];

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

/*
*해설
K에 default 값으로 keyof T를 할당
& 연산자를 사용하여, K에 포함된 T의 키값들은 readonly 처리하여 반환한 타입과 K에 포함되지 않은 T의 키값들은 그냥 반환한 타입을 결합
*/
