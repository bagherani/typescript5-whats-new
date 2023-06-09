import { vehicles } from "./models/index.js";

function takeASpaceship(s: vehicles.Spaceship) {
  // ✅ ok - `vehicles` only used in a type position
}

function makeASpaceship() {
  // return new vehicles.Spaceship();
  //         ^^^^^^^^
  // 'vehicles' cannot be used as a value because it was exported using 'export type'.
}

// swc 1.3.38
/*
export type * as xx from "./module";
*/

const BaseValue = 10;
const prefix = "/data";
const enum Values {
  First = BaseValue, // 10
  Second, // 11
  Third, // 12
}
const enum Routes {
  Parts = `${prefix}/parts`, // "/data/parts"
  Invoices = `${prefix}/invoices`, // "/data/invoices"
}
