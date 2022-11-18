let currentTime = 1400;
let susieage = 19;

if (susieage < 21) {
  console.log("Access Denied because you're under 21");
}

let bobage = 34;

if (bobage <= 21) {
  console.log("Access Denied");
} else {
  console.log("access granted");
}

if (susieage >= 21 || currentTime < 1600) {
  console.log("access granted because the bar is closed");
} else {
  console.log("bar is open so you gotta be older than 21");
}

const susieObj = {
  age: 19,
  // age: 22, // try like this to see it work.
  dollars: 7,
};

if (susieObj.age >= 21 && susieObj.dollars >= 5) {
  console.log("Welcome to the club Susie");
} else if (susieObj.age < 21) {
  console.log("*Susie has been thrown out of the club*");
} else if (susieObj.dollars < 5) {
  console.log("You don't have enough cash");
} else {
  console.log("this is for when all the other conditionals fail.");
}

let hungry = true;

if (!hungry) {
  console.log("Go climb");
} else {
  console.log("Eat. then climb");
}
