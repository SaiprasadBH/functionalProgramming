// Concept Explanation:
//
// We often want to encapsulate properties or data within functions to prevent direct access
// and modification from outside. One way to achieve this is by using closures.
//
// Closures allow us to create private variables and methods within a function's scope
// and provide access to these variables through a returned object with methods.
//
// In this example, the 'counter' function creates a counter object with encapsulated
// properties using closure. The 'count' variable is declared using 'let', making it
// accessible only within the 'counter' function's scope. The returned object contains
// methods ('increment', 'decrement', and 'getCount') that operate on the encapsulated 'count'
// variable. These methods can access and modify the 'count' variable due to closure, but the
// variable itself is not directly accessible from outside the 'counter' function, preserving
// its privacy.

// Counter function that creates a counter object with encapsulated properties using closure
function counter() {
  let count = 0; // Encapsulated variable for count

  // Return an object with methods that use the encapsulated count
  return {
    // Method to increment the count
    increment: function () {
      count++; // Increment the count
      return count; // Return the updated count
    },
    // Method to decrement the count
    decrement: function () {
      count--; // Decrement the count
      return count; // Return the updated count
    },
    // Method to get the current count
    getCount: function () {
      return count; // Return the current count
    },
  };
}

// Create a counter object
const myCounter = counter();

// Output the current count
console.log(myCounter.getCount()); // Output: 0

// Increment the count and output the updated count
console.log(myCounter.increment()); // Output: 1

// Increment the count again and output the updated count
console.log(myCounter.increment()); // Output: 2

// Decrement the count and output the updated count
console.log(myCounter.decrement()); // Output: 1
