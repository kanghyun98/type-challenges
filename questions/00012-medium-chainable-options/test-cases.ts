import type { Alike, Expect } from '@type-challenges/utils';

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V,
  ): Chainable<T & { [k in K]: V }>;
  get(): T;
};

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const resulst2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

type cases = [Expect<Alike<typeof result1, Expected1>>, Expect<Alike<typeof result2, Expected2>>];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};
