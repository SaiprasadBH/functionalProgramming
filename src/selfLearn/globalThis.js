// In the browser environment, `globalThis` refers to the global object, which is `window`.
console.log(globalThis === window); // Output: true (only if you run it on browser)

// In Node.js, the global object is referred to as `global`.
console.log(global === globalThis); // Output: true

// Accessing Global Variables:
// You can use `globalThis` or `global` to access global variables from anywhere in your code.
// Defining Global Variables:
// You can also define global variables by attaching properties directly to `globalThis` or `global`.
globalThis.myGlobalVariable = "Hello from global scope";
console.log(myGlobalVariable); // Output: Hello from global scope

// Note: It's generally not recommended to create global variables unless absolutely necessary,
// as they can lead to naming collisions and make code harder to maintain.

// `globalThis` (or `window` in the browser) is the global object that provides access to global variables and functions.

// In Node.js, the global object is referred to as `global`.
