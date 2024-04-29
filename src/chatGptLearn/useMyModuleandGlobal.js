// Importing variables and functions from the module.
const { moduleVar, moduleFunction } = require("./myModuleandGlobal");

// Now we can use moduleVar and moduleFunction here.
console.log(moduleVar); // Output: I am module scoped
moduleFunction(); // Output: I am module scoped function

// Now we can use the globalVar here.
console.log(global.globalVar); // Output: I am global
