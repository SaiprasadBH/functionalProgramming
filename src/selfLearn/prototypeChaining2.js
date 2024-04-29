// Constructor function
// This function creates new Animal objects with a given name
function Animal(name) {
  this.name = name; // Sets the name property of the new object to the provided name
}

// Adding a method to the prototype of Animal
// This method is shared by all instances of Animal and allows them to say their name
Animal.prototype.sayName = function () {
  console.log("My name is " + this.name); // Prints the name of the animal
};

// Creating an instance of Animal
// We create a new object named 'cat' using the Animal constructor function
// The 'name' parameter is passed to the constructor to set the name property of the cat
let cat = new Animal("Whiskers");

// Accessing the method through the prototype chain
// When we call the sayName method on the cat object, JavaScript first looks for it on the cat object itself.
// Since it's not found directly on the cat object, JavaScript looks up the prototype chain and finds it on the Animal prototype.
// This is how cat inherits the sayName method from the Animal prototype.
cat.sayName(); // Output: My name is Whiskers
