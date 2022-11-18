let mystring = "Hello I am a cool stringz that talks about nothing...";

// We usually need to do "things" with data like "strings". Well, strings have functions, also known as "methods" available to them.

// What if we need to find out what the 18th character of the string is?
console.log(mystring.charAt(18)); // s
console.log(mystring[18]); // s

// What if we need to find out how LONG the string is?
console.log(mystring.length); // 53

// What if we need to find out if the string includes the letter "z"?
console.log(mystring.includes("z")); // true

// What if we Need to find where in the string the letter z first occurs
console.log(mystring.indexOf("z")); // 24

// What if we need to cut up the string into a list of words?
// we can "split" the string into a list by passing in a pattern in which to split by. In this example we'll split by "spaces"
let resultOfSplit = mystring.split(" ");
console.log(resultOfSplit); // ['Hello', 'I', 'am', 'a', 'cool', 'stringz', 'that', 'talks', 'about', 'nothing...']

// What if we need a small piece of the string somewhere in the middle?
// We can pass in the beginning and ending index of the portion of the string we want.
console.log(mystring.slice(14, 19)); // ool s

// Objects have a DIFFERENT set of functions or methods.

let myObj = {
  make: "Toyota",
  model: "Venza",
  year: "2013",
};

// What if we need to see if this object has the property "color" on it?
// year?

console.log(myObj.hasOwnProperty("color")); // false
console.log(myObj.hasOwnProperty("year")); // true

// this is a method on Objects that allow us to get ALL property names in an object.
// The function call looks weird, and we're not sure what that Object thing is at the front
// but it'll make more sense when we get to Object oriented programming.
console.log(Object.getOwnPropertyNames(myObj)); // ['make', 'model', 'year']

let animals = [
  "cat",
  "dog",
  "pig",
  "fish",
  "shark",
  "humpback",
  "ant",
  "cricket",
];

// we can loop through an array with forEach. The first parameter represents the current element in the loop.
// the second parameter represents the position or "index" of the current element.
animals.forEach((elem, index) => {
  console.log(`the array item: ${elem} is at position # ${index}`);
});

// We can change the value at a specific index.
animals[2] = "COOOOWWWW";

console.log(animals);

// we can print the length of the array.
console.log(animals.length);

// we can add a new element to the end of an array.
animals.push("fox");

console.log(animals);

// we can remove the last element of an array.
animals.pop();

console.log(animals);

// We can remove the first element of an array.
animals.shift();
console.log(animals);

// We can FIND an element that fulfills specific requirements.
// In this example, we'll FIND an element that has the letter 'o' in it.
// We do this with "find" where we pass in a function that loops through each element until it finds a match.

// Shorthand
let foundElem = animals.find((element) => element.includes("o"));
// longhand
foundElem = animals.find((element) => {
  return element.includes("o"); // this evaluates to true or false. If the specific element being tested returns true, then the find element returns this element.
});

console.log(`First element to contain 'o' is: ${foundElem}`);

console.log("before splice(2,1): ", animals); // ['dog', 'COOOOWWWW', 'fish', 'shark', 'humpback', 'ant', 'cricket']
animals.splice(2, 1); // start deleting at index 2 (fish) and delete 1 (fish)
console.log("after splice(2,1): ", animals); // ['dog', 'COOOOWWWW', 'shark', 'humpback', 'ant', 'cricket']

// start deleting at index 1 (COOOWWWW), delete a total of two (cow & shark) then ADD all params (x, y , z, a) to array starting at index 1
animals.splice(1, 2, "x", "y", "z", "a");

console.log("after splice(1, 2, x, y, z, a): ", animals); //['dog', 'x', 'y', 'z', 'a', 'humpback', 'ant', 'cricket']

// filter an array. filter() takes in a function. The first parameter (which we've called word) represents the element in the array.
// The second part after the => is the "test". If the result of the test is "true", then that element is part of the returned array.
// if the result is false, the element is not returned out of the function to elemsWithA, but it's not deleted from the original array.
// this shorthand version auto-returns.
let elemsWithA = animals.filter((word) => word.includes("a"));
console.log("elems with a: ", elemsWithA);

// Now we return elements WITHOUT the letter "a". If you need a more complex filter, you can use the curly brackets as seen below, but
// you'll have to manually return true/false.
let elemsWithoutA = animals.filter((word) => {
  if (!word.includes("a")) {
    return true;
  }
});

console.log("elems without a: ", elemsWithoutA);
