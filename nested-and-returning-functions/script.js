//// Original:
// function increaseJumpHeight() {
//   let counter = 0;
//   function increment() {
//     counter++;
//     console.log(`you can now jump ${counter} feet`);
//   }
//   return increment;
// }

// let character1Increase = increaseJumpHeight(); // this function has its own separate "memory", its own counter.
// let character2Increase = increaseJumpHeight(); // This also has its own counter.

// const c1 = {
//   levelUp: increaseJumpHeight,
//   name: "bob",
// }

// const c2 = {
//   levelUp: increaseJumpHeight,
//   name: "bob",
// };

// character1Increase();
// character1Increase();
// character2Increase();
// character1Increase();
// character2Increase();
// character1Increase();

function increaseJumpHeight() {
  let counter = 0;
  function increment() {
    counter++;
    console.log(`you can now jump ${counter} feet`);
  }
  return increment;
}

const c1 = {
  levelUp: increaseJumpHeight(),
  name: "bob",
};

const c2 = {
  levelUp: increaseJumpHeight(),
  name: "bobby",
};

c1.levelUp();
c1.levelUp();
c1.levelUp();
c2.levelUp();
c2.levelUp();
