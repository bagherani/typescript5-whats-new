import { add, double, printValue } from "./10.overload-in-js-doc";
import { val } from "./utils.mjs";
console.log(val);

const bar = "22";
enum Numbers {
  Two = 2,
  Four = 4,
  Eight = 8,
  Test = "test",
  X = bar,
  ff = Math.random(),
}

type Two = 2;
type TwoAndFour = Two | 4;
const tf: TwoAndFour = 4;

const n: Numbers = Numbers.Eight;

type B = "a" | "b" | "c";

const getQ = (): B => {
  return "a";
};

let q: Numbers;

switch (q) {
  case Numbers.Two:
  case Numbers.Four:
  case Numbers.Eight:
  case Numbers.Test:
}

declare function takesFunction(f: () => undefined): undefined;
// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  // no returns
});
// ❌ error!
// A function whose declared type is neither 'void' nor 'any' must return a value.
takesFunction((): undefined => {
  // no returns
});
// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  return;
});
// ✅ works
takesFunction(() => {
  return undefined;
});
// ✅ works
takesFunction((): undefined => {
  return;
});

function loggedMethod(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("LOG: Entering method.");
    const result = originalMethod.call(this, ...args);
    console.log("LOG: Exiting method.");
    return result;
  }
  return replacementMethod;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
const p = new Person("Ray");
p.greet();
