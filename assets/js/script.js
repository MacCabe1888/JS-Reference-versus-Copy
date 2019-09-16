// Strings, Numbers and Booleans


// Arrays
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
// However, what happens when we update that array?
team[3] = "Lux";
// We have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We make a copy instead!
// One way:

// Or, create a new array and concatenate the old one in:

// Or, use the ES6 spread syntax:

// Now, when we update it, the original one isn't changed:


// Objects
// The same thing goes for objects. Let's say we take a person object
const person = {
  name: "Cameron",
  age: 25
};
// and save it as a new variable:

// How do we make a copy instead?

// Using the spread operator:

// Note that this goes only one level deep for both arrays and objects.
// Lodash has a "cloneDeep" method, but you should think twice before using it.
