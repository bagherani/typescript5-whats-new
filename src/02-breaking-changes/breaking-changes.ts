// Node.js 10     for ts 5
// Node.js 14.17  for ts 5.1

/* ts API changes:
 const ts = require("ts"); ts.readJson = ...
 typescriptServices.js has been removed (the entrypoint for ts npm package)
 protocol.d.ts doesn't exist anymore
*/

// relational operators
function func2(num: number | string) {
  return num > 4; // Now also an error
}

// Enum Overhaul and Refactoring
enum SomeEvenDigit {
  Zero = 0,
  Two = 2,
  Four = 4,
}
// error
let m: SomeEvenDigit = 1;

//
enum Letters {
  A = "a",
}

enum Numbers {
  NumA = Letters.A,
}

// Now correctly an error
const t: number = Numbers.NumA;

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
*/

// ts 5.1
// Explicit typeRoots Disables Upward Walks for node_modules/@types
