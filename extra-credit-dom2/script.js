const ptags = document.getElementsByTagName("p");

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

for (const ptag of ptags) {
  ptag.style.fontSize = "44px";
}

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
