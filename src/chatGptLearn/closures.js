/*Closures are an important concept in JavaScript. 
They allow functions to remember the variables from the scope in which they were created, even after that scope has finished executing.

Here's a simple explanation with an example */

function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // Output: I am from outerFunction

/*Closures in JavaScript enable inner functions to retain access to variables 
  from their outer functions even after the outer function has finished executing.
  In the provided example:

The outerFunction defines a variable outerVariable and a nested function innerFunction.
When outerFunction is called and assigned to closureExample, it returns innerFunction.
Despite outerFunction having completed its execution, innerFunction still retains access to outerVariable.
Therefore, when closureExample() is invoked, it successfully accesses and utilizes outerVariable, exemplifying the concept of closures. */

/*Lexical scope is a fundamental concept in JavaScript that determines how variable names are resolved in nested functions.
 In simple terms, it means that a function can access variables defined in its parent function, as well as variables defined globally. */
