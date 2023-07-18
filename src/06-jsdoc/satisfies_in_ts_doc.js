// @ts-check
/**
 * @typedef CompilerOptions
 * @prop {boolean} [strict]
 * @prop {string} [outDir]
 */
/**
 * @typedef ConfigSettings
 * @prop {CompilerOptions} [compilerOptions]
 * @prop {string | string[]} [extends]
 */
/**
 * @satisfies {ConfigSettings}
 */
let myConfigSettings = {
  compilerOptions: {
    strict: true,
    outDir: "../lib",
  },
  extends: [
    "@tsconfig/strictest/tsconfig.json",
    "../../../tsconfig.base.json"
  ],
};
