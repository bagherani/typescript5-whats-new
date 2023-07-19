// importsNotUsedAsValues & preserveValueImports & isolatedModules => verbatimModuleSyntax

// set verbatimModuleSyntax : true
// add type before Device

import { type Device } from "./module.js";

export function getDefaultDevice(): Device | null {
  return null;
}
