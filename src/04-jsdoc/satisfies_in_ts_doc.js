// @ts-check
/**
 * @typedef CompilerOptions
 * @prop {string} [OUTDIR]
 */

/**
 * @satisfies {CompilerOptions}
 */
let myCompilerOptions = {
  outdir: "../lib",
  //  ~~~~~~ oops! we meant outDir
};
