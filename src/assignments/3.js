/**Every function created using function keyword also receive a special argument called arguments.
 * It is an Array like object but not an array. However, we can use methods of Array.prototype on it.
 * Can you use a method Array.prototype.slice on arguments of a function and convert the argument into an array */
function convertToArray() {
  let argsArray = Array.prototype.slice.call(arguments);
  return argsArray;
}

let result = convertToArray(1, 2, 3, 4, 6);
console.log(result);
