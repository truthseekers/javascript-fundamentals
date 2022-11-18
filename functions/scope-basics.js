let flavor = "chocolate"; // global scope.

function ilikepie() {
  console.log("global flavor: ", flavor);
}

function ilikepie2() {
  let flavor = "key lime";
  console.log("separate function scope: ", flavor);
}

function ilikepiebroken() {
  console.log("broken flavor: ", flavor);
  let flavor = "orange"; // because function has a flavor variable, you have to initialize the variable before trying to use it.
}

function ilikepieparam(flavor) {
  console.log("param: ", flavor);
}

// let flavor = "chocolate"; // global scope.

// function ilikepie() {
//   let flavor = "cherry"; // only defined once in the ilikepie scope
//   console.log("ilikepie scope: ", flavor);
// }

// function ialsolikepie() {
//   let flavor = "key lime"; // only defined once in the ialsolikepie scope.
//   console.log("ialsolikepie scope: ", flavor);
//   //   let flavor = "habanero"; // Cant define the same variable twice in the same scope.
// }

// function usingGlobalScopeInFunction() {
//   console.log("usingGlobalScopeInFunction: ", flavor); // chocolate. Because no flavor is defined in this function, it uses the global scope.
// }

// function clashingVariables() {
//   console.log("clashingVariables first: ", flavor); // this works, unless you try to define a flavor below it...
//   // For the below two lines to work, you need to comment the above line first before uncommenting the below two lines.
//   // let flavor = "burnt"; // This doesn't work because you're trying to use the same variable name from two different scopes in the same place.
//   //console.log("clashingVariables second: ", flavor)
// }

// // let flavor = "orange"; // this is in the global scope and flavor is already defined. Cant do this.

// console.log("global scope: ", flavor);
// ilikepie();
// console.log("global scope: ", flavor);
// ialsolikepie();
// usingGlobalScopeInFunction();
// clashingVariables();
