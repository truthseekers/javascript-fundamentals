let myName = "Bob";

console.log("My name is: " + myName);

myName = "Tim";

console.log("My name is now: ", myName);

const otherName = "Cindy";

console.log("My name is: ", otherName);

// Cant do this because otherName is a "const". the value cannot be "reassigned";
otherName = "Tammy";

// doesn't even make it here because of the error above.
console.log("My name is now: ", otherName);
