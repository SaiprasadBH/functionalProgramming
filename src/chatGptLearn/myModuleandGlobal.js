// Module Scope Explanation:
// Variables and functions defined within a module are scoped to that module (module scope).
// Exporting variables and functions to make them accessible outside the module.

// Global Scope Explanation:
// Variables defined in the global scope are accessible from anywhere in the Node.js application.

// Variables and functions defined here are only known to this file (module).
const moduleVar = "I am module scoped";

function moduleFunction() {
  console.log("I am module scoped function");
}

// Exporting variables and functions to make them available to other files.
module.exports = { moduleVar, moduleFunction };

// Variables defined here are available everywhere in your Node.js application.
global.globalVar = "I am global";
