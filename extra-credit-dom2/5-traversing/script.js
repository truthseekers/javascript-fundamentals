let outer = document.getElementById("one");

outer.style.background = "hotpink";
console.log(outer.childNodes);
console.log(outer.children);

console.log(outer.childNodes[7].childNodes);

outer.childNodes[7].style.background = "yellowgreen";
outer.childNodes[7].style.padding = "25px";

let leveltwo = outer.childNodes[7];

let levelthree = leveltwo.childNodes[7];

levelthree.style.background = "orange";

console.log(levelthree.parentNode.parentNode.childNodes[3]);
levelthree.parentNode.parentNode.childNodes[3].style.background = "blue";
