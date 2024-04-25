const person = {
  name: "Charlie",
};

function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name}.`);
}

// how do we invoke introduce as a method on person object?
introduce.apply(person, ["Hi"]);
