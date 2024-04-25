function sayName() {
  console.log(this.name);
}

const person1 = {
  name: "Alice",
  speak: sayName,
};

const person2 = {
  name: "Bob",
  speak: sayName,
};

sayName(); // What does this print?
person1.speak(); // What does this print?
person2.speak(); // What does this print?
