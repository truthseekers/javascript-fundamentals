let result;

// Side effects: Changing something outside of the function. (avoid when possible)
function addWithSideEffects(numOne, numTwo) {
  result = numOne + numTwo;
}

// The function doesn't modify anything outside of itself, so it's "pure" (good)
function addPurely(numOne, numTwo) {
  return numOne + numTwo;
}

addWithSideEffects(4, 18);
console.log(result);

let result2 = addPurely(12, 24);
