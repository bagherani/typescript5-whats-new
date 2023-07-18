// importsNotUsedAsValues & preserveValueImports => verbatimModuleSyntax

// set --verbatimModuleSyntax : true
// add type before Device

import { Device } from "./module.js";

export function getDefaultDevice(): Device {
  return { id: "", someFunction() {} };
}
