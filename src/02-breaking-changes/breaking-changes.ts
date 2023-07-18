// Node.js 10     for ts 5
// Node.js 14.17  for ts 5.1

/* ts API changes:
 const ts = require("ts"); ts.readJson = ...
 typescriptServices.js has been removed (the entrypoint for ts npm package)
 protocol.d.ts doesn't exist anymore
*/

// version 4
function func(ns: number | string) {
  return ns * 4; // Error, possible implicit coercion
}

// version 5
// relational operators
function func2(ns: number | string) {
  return ns > 4; // Now also an error
}

// Enum Overhaul and Refactoring
enum SomeEvenDigit {
  Zero = 0,
  Two = 2,
  Four = 4,
}
// Now correctly an error
let m: SomeEvenDigit = 1;

//
enum Letters {
  A = "a",
}
enum Numbers {
  one = 1,
  two = Letters.A,
}
// Now correctly an error
const t: number = Numbers.two;

// More Accurate Type-Checking for Parameter Decorators in Constructors Under --experimentalDecorators

// deprecated switches and would be removed in ts 5.5
/*
--target: ES3
--out
--noImplicitUseStrict
--keyofStringsOnly
--suppressExcessPropertyErrors
--suppressImplicitAnyIndexErrors
--noStrictGenericChecks
--charset
--importsNotUsedAsValues
--preserveValueImports
prepend in project references
*/

// ts 5.1
// Explicit typeRoots Disables Upward Walks for node_modules/@types
