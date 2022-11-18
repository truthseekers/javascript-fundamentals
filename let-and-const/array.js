// We'll cover arrays later, but here's the basics:
// Each element is in a position or "index".
// index counting starts at 0. So 0 is the first, 1 is the 2nd, etc.
// array[index] is how you access or modify an element in an array.
const myarray = ["cats", "dog", "elephant"];

console.log("myarray: ", myarray);
myarray[0] = "kitty";
myarray[3] = "rhino";

console.log("myarray: ", myarray);

// cannot reassign, so this will not work
myarray = ["one", "two", "three"];
