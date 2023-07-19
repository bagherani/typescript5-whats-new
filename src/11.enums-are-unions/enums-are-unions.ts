const BaseValue = 10;
const prefix = "/data";
const enum Values {
  First = BaseValue, // 10
  Second, // 11
  Third, // 12
}

// type Values = Values.First | Values.Second | Values.Third;

const enum Routes {
  Parts = `${prefix}/parts`, // "/data/parts"
  Invoices = `${prefix}/invoices`, // "/data/invoices"
}

// Routes.Parts
