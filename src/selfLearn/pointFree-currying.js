// Point-free Functions:

// Point-free style: Add function
// Point-free style, also known as tacit programming, is a functional programming technique where functions are defined without reference to their arguments.
// In the point-free version, `add` is a function that takes one argument `x` and returns another function that takes `y` as its argument.
const add = (x) => (y) => x + y;

// Currying Functions:

// Curried version: Multiply function
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.
// This function takes `x` and returns another function that takes `y`, which in turn returns a function that takes `z`.
function curryMultiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
