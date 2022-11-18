console.log("hello world");

let myelem = document.getElementById("test");

myelem.addEventListener("click", logTheValue);

function logTheValue() {
  console.log("woo a p has been clicked!");

  console.log(this);
  console.log(this.innerText);
  console.log(this.id);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function logRandomNumber() {
  console.log(getRandom(1, 10000));
}
