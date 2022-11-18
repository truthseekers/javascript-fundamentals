const ptag = document.getElementById("noticeme");

ptag.style.fontSize = "44px";
ptag.style.background = "hotpink";

function changebg() {
  console.log("changebg clicked!");

  const color = document.getElementById("background-input").value;
  document.getElementById("background-input").value = "";
  console.log("color is: ", color);
  document.getElementsByTagName("body")[0].style.background = color;
  //   console.log("body: ", body);
}

function addNewPTag() {
  const newP = document.createElement("li");

  newP.innerText = "I like pie do you like pie?";

  document.getElementsByTagName("body")[0].appendChild(newP);
}
