import type { Equal, Expect } from '@type-challenges/utils';

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: 'A';
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: 'B';
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: 'C';
  name: number;
  flag: string;
};

type NoNameNodeA = {
  type: 'A';
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: 'C';
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

// implement
type ReplaceKeys<N, T, C> = {
  [K in keyof N]: K extends T ? (K extends keyof C ? C[K] : never) : N[K];
};

type test = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>;

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
];

/*
*해설
N(Nodes)에 대해 [K in keyof N]를 적용시키면, K는 각 노드의 프로퍼티 키(ex: type, flag 등)를 가리킨다.
프로퍼티 키 K가 ReplaceKeys 타입의 두번째 제네릭 인자로 들어오는 키 종류에 포함되어 있다면, 그리고 세번째 제네릭 인자로 들어오는 객체의 키 목록에 포함되어 있다면,
해당 타입을 세번째 제네릭 인자에 해당하는 타입으로 변경된다.
만약, 두번째 제네릭 인자로 들어오는 키 종류에 포함되어 있지 않다면 그대로 반환된다.
*/
