// Example 1: this in a regular function
const user = {
  name: "John",
  greet: function () {
    // Inside a regular function, `this` refers to the object that the function is a property of.
    console.log("Hello, my name is " + this.name);
  },
};

user.greet(); // Output: Hello, my name is John

// Example 2: this in a nested function
const student = {
  name: "Alice",
  greet: function () {
    // Inside a nested function, `this` refers to the global object (or `undefined` in strict mode).
    function sayHello() {
      console.log("Hello, my name is " + this.name);
    }
    sayHello();
  },
};

student.greet(); // Output: Hello, my name is undefined

// Example 3: this in an arrow function
const employee = {
  name: "Bob",
  greet: function () {
    // Inside an arrow function, `this` refers to the `this` value of the enclosing lexical context.
    const sayHello = () => {
      console.log("Hello, my name is " + this.name);
    };
    sayHello();
  },
};

employee.greet(); // Output: Hello, my name is Bob
