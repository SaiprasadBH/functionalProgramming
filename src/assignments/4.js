const person = {
  name: "Saiprasad",
};

function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, my name is Saiprasad
