const myPerson = {
  name: "Bobby",
  age: 24,
  favColor: "blue",
  height: 169,
};

myPerson.age = 26;
myPerson.isHungry = true;

console.log(myPerson);

// Cant do this. Cannot reassign a const
myPerson = {
  name: "Cindy",
  age: 24,
};
