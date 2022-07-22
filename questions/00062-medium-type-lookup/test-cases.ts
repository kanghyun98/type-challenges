import type { Equal, Expect } from '@type-challenges/utils';

type LookUp<U, T> = U extends { type: T } ? U : never;

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

type dog = LookUp<Animal, 'dog'>;

type cases = [Expect<Equal<LookUp<Animal, 'dog'>, Dog>>, Expect<Equal<LookUp<Animal, 'cat'>, Cat>>];

/*
*해설
union type인 U를 순회하며 type 프로퍼티 값이 T에 해당하는 타입을 반환한다.
만약 같은 type 프로퍼티 값을 가진 타입이 두 개 이상 존재한다면, 반환되는 타입 또한 union type이다.
*/
