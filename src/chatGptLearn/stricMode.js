// Enabling Strict Mode in Individual Files:

// In each JavaScript file, you can include "use strict"; at the top to enable strict mode.
// This ensures that strict mode is applied to all the code in the file, preventing silent errors and enforcing better coding practices.

// Example with CommonJS Modules:

// Let's say you have a Node.js project with multiple files structured like this:

/*
project/
  |- src/
  |   |- main.js
  |   |- utils.js
*/

// main.js
"use strict";

// Importing function greet from utils.js
const { greet } = require("./utils");

// Calling greet function
greet("John");

// utils.js
("use strict");

// Function to greet a person
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Exporting greet function
module.exports = { greet };

// Package.json Configuration:

// You can also specify "use strict" in your package.json file to enable strict mode for all files in your project.

/*
{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "Node.js project with strict mode enabled",
  "scripts": {
    "start": "node src/main.js"
  },
  "main": "src/main.js",
  "author": "Your Name",
  "license": "MIT",
  "engines": {
    "node": ">=10"
  },
  "eslintConfig": {
    "rules": {
      "strict": ["error", "global"]
    }
  }
}
*/

// In this package.json configuration:
// - "strict": ["error", "global"] under eslintConfig specifies that strict mode should be enforced globally for the project using ESLint.

// Summary:

// - In a Node.js project with CommonJS (Node.js) configuration, strict mode is enabled by default for all JavaScript files.
// - You can include "use strict"; at the top of your files for clarity or compatibility, but it's not necessary for strict mode to be enabled.
// - You can also configure ESLint to enforce strict mode globally for your project in the package.json file.
