let mystring = "i am a string. or... text";

console.log("mystring: ", mystring);

let defineLater;

console.log(defineLater);

defineLater = "Its gonna be a string now!";

console.log(defineLater);

// Different ways to handle strings:
console.log("first part of string. ", mystring, " third part");
console.log("first part of string. " + mystring + " third part of string");
console.log(`first part of string. ${mystring} third part of string`);

// number
let myage = 47;

console.log("I am currently: " + myage + " years old");

console.log("years pass...");

myage++;
myage += 1;
myage = myage + 1;
console.log("I am currently: " + myage + " years old");

let mybool = false;

console.log("mybool is ", mybool);

let myArray = ["cats", "dogs", "elephants"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray);

let myObject = {
  age: 29,
  name: "Katrina",
  gender: "female",
  occupation: "dentist",
  location: {
    zip: "12345",
    state: "AZ",
    city: "Flagstaff",
  },
  incrementAge() {
    // Dont try to understand this. covered later.
    this.age++;
  },
  favAnimals: ["cows", "dolphins", "unicorns"],
};

console.log("object: ", myObject);
console.log("object.age: ", myObject.age);
myObject.incrementAge();
console.log("object.age: ", myObject.age);

// array
let todoList = ["wash dishes", "eat an apple", "call mom"];

console.log("I need to do the following: ", todoList);

console.log("what is this: ", 14 * "cats"); // NaN (not a number)

let emptyvalue;

console.log("emptyvalue: ", emptyvalue); //undefined
