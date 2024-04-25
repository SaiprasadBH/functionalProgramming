const person = {
  name: "Eve",
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.sayHello(); // What does this print? and why?

/* arrow function do not have their own this context, they inherit from outer scope, so when person.sayHello() is called 
global scope is outer scope rather than person where name is undefined , so it prints "Hello,my name is undefined" */
