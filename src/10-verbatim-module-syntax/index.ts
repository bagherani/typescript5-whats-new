// importsNotUsedAsValues & preserveValueImports & isolatedModules => verbatimModuleSyntax

// set verbatimModuleSyntax : true
// add type before Device

import { Device } from "./module";

export function getDefaultDevice(): Device {
  return { id: "", someFunction() {} };
}
