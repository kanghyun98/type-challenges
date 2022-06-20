import type { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type MyAwaited<T> = T extends Promise<infer S> ? MyAwaited<S> : T;

// type MyAwaited<T> = T extends Promise<infer S> ? (S extends Promise<unknown> ? MyAwaited<S> : S) : T;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
];

// @ts-expect-error
type error = MyAwaited<number>;

/*
* 해설
@ infer -> 타입스크립트 엔진이 런타임 상황에 타입 추론할 수 있도록 하고, 해당 타입을 뒤에 오는 변수에 할당

Promise에 감싸인 타입을 알아내기 위해 T가 Promise 타입으로 들어왔다면, 
Promise<S> 형태에서 타입 S를 반환할 수 있도록 infer 키워드 활용
*/
