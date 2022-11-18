// https://stackoverflow.com/questions/8568970/how-can-i-console-log-functions-alongside-all-their-properties
// https://developer.mozilla.org/en-US/docs/Web/API/console

function multiplyTwoNums(numOne, numTwo) {
  return numOne * numTwo;
}

function addTwelveToSum(numOne, numTwo) {
  return numOne + numTwo + 12;
}

multiplyTwoNums.favQuote = "I like pie";

function doSomething5times(randomParam, func, arg1, arg2) {
  console.log("this is a random parameter: ", randomParam);
  // func() below is the function that was passed in when doSomething5Times was called.
  //So in this example its either multiplyTwoNums OR addTwelveToSum
  // function actually RUNS whe you add the () to the end.
  console.log(func(arg1, arg2));
  console.log(func(arg1, arg2));
  console.log(func(arg1, arg2));
  console.log(func(arg1, arg2));
  console.log(func(arg1, arg2));
  console.log("the job is done");
}

// See the function details
console.dir(multiplyTwoNums);

// retrieve the favQuote property off multiplyTwoNums "object/function"
console.log(multiplyTwoNums.favQuote);

// use the function
console.log(multiplyTwoNums(4, 6));

// Pass the function to another function! WITHOUT the () because we don't want to call the function yet.
doSomething5times("pizza bytes", multiplyTwoNums, 18, 7);
doSomething5times("elephant toenail", addTwelveToSum, 6, 10);
