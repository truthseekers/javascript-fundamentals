const ptags = document.getElementsByTagName("p");

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

for (const ptag of ptags) {
  ptag.style.fontSize = "64px";
}

let currentColor = "yellowgreen";

function changebg() {
  console.log("Button clicked!");

  let newBgColor = currentColor === "yellowgreen" ? "hotpink" : "yellowgreen";

  currentColor = newBgColor;

  document.getElementsByTagName("body")[0].style.background = newBgColor;
  //   console.log("body: ", body);
}
