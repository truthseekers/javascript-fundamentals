// expression ? (this is what happens if expression is true) : (this is what happens if expression is false)

true ? console.log("true") : console.log("false");

false ? console.log("true") : console.log("false");

const expression = 10 <= 12;

expression ? console.log(true) : console.log(false);

expression
  ? console.log("10 is less than 12")
  : console.log("10 is more than 12");

let age = 20;

age >= 21
  ? console.log("lets go get a drank")
  : console.log("No drank for you child");

// You CAN nest ternaries... if you want to get fired. Don't feel bad if you can't understand. it's confusing.
// You're literally just chaining ternaries together.

age >= 21
  ? console.log("lets go get a drank")
  : age > 17
  ? console.log("You are an adult but cant drink")
  : console.log("you are a child");
