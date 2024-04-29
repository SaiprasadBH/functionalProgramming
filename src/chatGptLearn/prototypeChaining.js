// Prototype Chaining Explained:
// Prototype chaining is like a family tree where objects inherit traits from their ancestors.
// In JavaScript, objects can inherit properties and behaviors from other objects through their prototype chain.

// Animal object
// This object represents an animal with a default name and a method to say its name
let animal = {
  name: "Unknown", // Default name for the animal
  // Method to say the name of the animal
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

// Creating a cat object
// This object represents a cat with a specific name
let cat = {
  name: "Whiskers", // Specific name for the cat
};

// Making cat object inherit the sayName method from the animal object
// We set the __proto__ property of cat to the animal object, so cat inherits properties and methods from animal
cat.__proto__ = animal;

// Now, the cat object can say its name using the inherited sayName method
// This will output "My name is Whiskers" because the cat object has inherited the sayName method from the animal object
cat.sayName();

// Summary:
// Prototype chaining allows objects to inherit properties and methods from other objects through their prototype chain.
// In the example, the cat object inherits the sayName method from the animal object, even though it's not directly defined on the cat object itself.
