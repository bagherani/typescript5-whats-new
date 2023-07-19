declare function foo<T>(x: T): T;

const x1 = foo("a");
const x2 = foo(["a", ["b", "c"]]);
const x3 = foo({ a: 1, b: "c", d: ["e", 2, true, { f: "g" }] });
