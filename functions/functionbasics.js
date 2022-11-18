function printHello() {
  console.log("hello");
}

// const printHello2 = () => {
//   console.log("hello2");
// };

const printHello2 = (name = "Mystery character") => {
  console.log("hello2 ", name);
};

function printHelloWithName(name) {
  console.log("Hello ", name);
}

// const printHelloWithName2 = (name) => {
//   console.log("Hello2 ", name);
// };

function printHelloWithDefaultName(name = "Mystery stranger") {
  console.log("Hello there again ", name);
}

// const printHelloWithDefaultName2 = (name = "Mysterious person") => {
//   console.log("Hello again ", name);
// };

function addTwoNums(numOne, numTwo) {
  if (typeof numOne === "number" && typeof numTwo === "number") {
    console.log("valid inputs. calculating...");
    console.log(`${numOne} + ${numTwo} = ${numOne + numTwo}`);
  } else {
    console.warn("Enter valid input please");
  }
}

function emptyFirstParam(first, second, third) {
  console.log(`firstParam: ${first}. second: ${second}. third: ${third}`);
}

function betterEmptyParams(obj) {
  console.log(
    `firstParam: ${obj.first}, second: ${obj.second}. third: ${obj.third}`
  );
}

printHello();
printHello2();
printHello2("Bob");
printHelloWithName();
printHelloWithName("Sandy");
printHelloWithDefaultName();
printHelloWithDefaultName("Juicy J");

addTwoNums(4, 5);
addTwoNums(12, 18);
addTwoNums(5);
let _ = undefined;
emptyFirstParam(undefined, _, "bla");
betterEmptyParams({ first: undefined, third: "lalala" });
