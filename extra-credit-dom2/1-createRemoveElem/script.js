let newElem = document.createElement("p");
newElem.innerText = "I am a paragraph tag";

console.log(newElem);
console.log(newElem);

document.getElementsByTagName("body")[0].appendChild(newElem);
// document.getElementsByTagName("body")[0].appendChild(newElem); // Can't do this. need to create a new element.

let newElem2 = document.createElement("li");
newElem2.innerText = "i am a list item";
newElem2.id = "iamanid"; // doesn't show updates on the onclick. those are events and work a little different

let mylist = document.getElementById("myTodos");

mylist.appendChild(newElem2);

document.getElementById("removeMe").remove();
