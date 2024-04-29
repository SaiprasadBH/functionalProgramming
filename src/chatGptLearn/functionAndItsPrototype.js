// Function.prototype:
// - In JavaScript, all functions are objects, and like any object, they have properties and methods.
// - Function.prototype is a special object that contains methods that all functions can use.
// - It acts as a blueprint for functions.

// Example:

// Define a simple function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Output the prototype property of the greet function
console.log(greet.prototype); // Output: { constructor: [Function: greet] }

// call():
// - The call() method is used to call a function with a specified 'this' value and arguments provided individually.
// - The first argument of call() is the value that will be assigned to 'this' within the function.
// - Subsequent arguments are passed as individual arguments to the function.

// Example:

// Define a person object
const person = {
  firstName: "John",
  lastName: "Doe",
};

// Define a function that uses 'this' to access properties of the person object
function introduce(greeting) {
  console.log(greeting + ", I am " + this.firstName + " " + this.lastName);
}

// Call the introduce function with 'this' value as the person object and 'Hello' as an argument
introduce.call(person, "Hello"); // Output: Hello, I am John Doe

// apply():
// - The apply() method is similar to call(), but it takes arguments as an array.
// - The first argument of apply() is the value that will be assigned to 'this' within the function.
// - The second argument is an array of arguments to be passed to the function.

// Example:

// Define a person object
const person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

// Define a function that uses 'this' to access properties of the person object
function introduce(age, city) {
  console.log(
    "I am " +
      this.firstName +
      " " +
      this.lastName +
      ", " +
      age +
      " years old, from " +
      city
  );
}

// Call the introduce function with 'this' value as the person2 object, and [25, 'New York'] as arguments array
introduce.apply(person2, [25, "New York"]); // Output: I am Jane Doe, 25 years old, from New York

// bind():
// - The bind() method creates a new function that, when called, has its 'this' value set to a specific value, and arguments are fixed.
// - bind() returns a new function with the specified 'this' value and fixed arguments.

// Example:

// Define a person object
const person3 = {
  firstName: "Alice",
  lastName: "Smith",
};

// Define a function that uses 'this' to access properties of the person object
function greetName(city) {
  console.log(
    "Hello, " + this.firstName + " " + this.lastName + " from " + city + "!"
  );
}

// Create a new function greetAlice with 'this' value as the person3 object and 'New York' as a fixed argument
let greetAlice = greetName.bind(person3, "New York");

// Call the greetAlice function
greetAlice(); // Output: Hello, Alice Smith from New York!
