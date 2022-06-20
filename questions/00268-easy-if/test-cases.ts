import type { Equal, Expect } from '@type-challenges/utils';

type If<C extends boolean, T, F> = C extends true ? T : F;

type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>];

// @ts-expect-error
type error = If<null, 'a', 'b'>;

/*
*해설
C는 boolean 타입이 올 수 있도록 설정
C가 true면 T 반환, false이면 F 반환
*/
