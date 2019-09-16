// Strings, Numbers, and Booleans
// Strings:
let name1 = "Cameron";
let name2 = name1;
console.log(name1, name2);
name1 = "Cam";
console.log(name1, name2);
// Numbers:
let age1 = 50;
let age2 = age1;
console.log(age1, age2);
age1 = 100;
console.log(age1, age2);
// Booleans:
let bool1 = true;
let bool2 = bool1;
console.log(bool1, bool2);
bool2 = false;
console.log(bool1, bool2);

// Arrays
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
// and we want to make a copy of it.
// You might think we can just do something like this:
const team = players;
console.log(players, team);
// However, what happens when we update that array?
team[3] = "Lux";
console.log(players, team);
// We have edited the original array, too!
// We also change the value of "team" when we update the original "players" array:
players[3] = "Poppy";
console.log(players, team);
// Why? It's because we made an array reference, not an array copy. Both variables point to the same array!
// So, how do we fix this? We make a copy instead!
// One way:
const team1 = players.slice();
// Or, create a new array and concatenate the old one in:
const team2 = [].concat(players);
// Or, use the ES6 spread syntax:
const team3 = [...players];
// Or, use the Array.from() method:
const team4 = Array.from(players);
// Now, when we update it, the original one isn't changed:
[team1[3], team2[3], team3[3], team4[3]] = ["Adam", "Beth", "Christine", "David"];
console.log(players, team1, team2, team3, team4);

// Objects
// The same thing goes for objects. Let's say we take a person object
const person = {
  name: "Cameron",
  age: 25
};
// and save it as a new variable, which we then update:
const captain = person;
console.log(person, captain);
captain.number = 99;
console.log(person, captain);
// Deleting a property affects both object references as well:
delete person.number;
console.log(person, captain);
// How do we make a copy instead?
const captain1 = Object.assign({}, person, { name: "Adam", number: 99 });
// Or, use the spread operator:
const captain2 = {...captain1};
[captain2.name, captain2.age] = ["Beth", 40];
// Now we have three distinct objects:
console.log(person, captain1, captain2);

// Note that this goes only one level deep for both arrays and objects.
// Lodash has a "cloneDeep" method, but you should think twice before using it.
