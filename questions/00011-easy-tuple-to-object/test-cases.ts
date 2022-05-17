import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

/*
*해설
@ PropertyKey -> type PropertyKey = string | number | symbol 으로 정의되어 있음
@ T[number] → 배열의 값이 순회되도록 만든다. (배열의 요소는 [index: number]: Element; 의 타입을 가짐)

typeof tuple == readonly ["tesla", "model 3", "model X", "model Y"] 이므로
generic으로 들어오는 T도 요소가 readonly인 배열이어야 하므로 TupleToObject<T extends readonly PropertyKey[]> 으로 정의해준다.

요소 타입을 PropertyKey으로 두었는데, 처음엔 string으로 두었다가 Object의 key값으로 number, symbol도 올 수 있기 때문에 변경하였다.
*/
