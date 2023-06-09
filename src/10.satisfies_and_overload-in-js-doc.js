/**
 * 
 * @param {number} value val
 * @param {string} maximumFractionDigits str
 */
export function printValue(value, maximumFractionDigits) {
  if (typeof value === "number") {
    const formatter = Intl.NumberFormat("en-US", {
      maximumFractionDigits,
    });
    value = formatter.format(value);
  }
  console.log(value);
}

/**
 * @type {{
* (input:number) => number;
* (input:string, value: number) => string;
* }}
*/
export const double = function (input, value) {
  if (typeof input === 'number') {
    return input * 2
  }
  return input + input
}

/**
 * @overload
 * @param {number} a
 */
/**
 * @overload
 * @param {number} a
 * @param {string} b
 */
export function add(a, b) {

}
