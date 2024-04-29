// Higher-order function example: map
// A higher-order function is a function that can take another function as an argument, or it can return a function as its result, or both.

// map is a higher-order function because it takes another function (callback) as an argument.
function map(array, callback) {
  // Create a new array to store the results
  const newArray = [];
  // Iterate over each element of the array
  for (let i = 0; i < array.length; i++) {
    // Apply the callback function to the current element and push the result into the new array
    newArray.push(callback(array[i]));
  }
  // Return the new array
  return newArray;
}

// Usage of map
const numbers = [1, 2, 3, 4, 5];
// Define a callback function to double each number
const double = function (number) {
  return number * 2;
};
// Use map to double each number in the array
const doubled = map(numbers, double);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
