// Usually for counting up or down.
for (let i = 0; i < 15; i++) {
  console.log(`current value of i: ${i}`);
}

let numOfDogs = 100;

// can be used for counting up and down, or run until something changes.
// Example: Have an alarm clock that beeps every 5 seconds until the "stop" button is pressed.
while (numOfDogs > 5) {
  console.log(`we have ${numOfDogs} dogs`);

  numOfDogs -= 2;
}

let numOfCats = 100;

do {
  console.log(`We have ${numOfCats} too many cats`);
  numOfCats--;
} while (numOfCats > 3);
console.log("jk we like cats too.");

// you can also loop through Objects, but I'm going to leave that as an exercise for you to practice on your own.
// I'll include some exercises and solutions in the downloads.
