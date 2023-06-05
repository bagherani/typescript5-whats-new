import { add, double, printValue } from "./10.overload-in-js-doc";
enum Numbers {
  Two = 2,
  Four = 4,
  Eight = 8,
}

const n: Numbers = Numbers.Eight;

type B = "a" | "b" | "c";

const getQ = (): B => {
  return "a";
};

let q: B = getQ();

switch (q) {
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
