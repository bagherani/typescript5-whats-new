// @ts-check
/**
 * @typedef CompilerOptions
 * @prop {string} [OUTDIR]
 */

/**
 * @satisfies {CompilerOptions}
 */
let myCompilerOptions = {
  OUTDIR: "../lib",
  //  ~~~~~~ oops! we meant outDir
};
