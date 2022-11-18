function addTodo() {
  const todo = document.getElementById("newtodo").value;
  document.getElementById("newtodo").value = "";
  console.log("todo is: ", todo);

  const uniqueId = getRandom(1, 10000);

  const newElem = document.createElement("li");
  newElem.id = uniqueId;
  newElem.innerText = todo;
  //   newElem.onclick = markComplete;
  newElem.addEventListener("click", markComplete);

  let todoListUL = document.getElementById("todos");

  todoListUL.appendChild(newElem);

  // document.getElementsByTagName("body")[0].appendChild(newElem);
  //   console.log("body: ", body);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function markComplete() {
  console.log("marked complete!");
  console.log(this);
  console.log(this.innerText);
  console.log(this.id);
  let clickedElement = document.getElementById(this.id);
  clickedElement.remove();
  let completedTodosUL = document.getElementById("completed");
  completedTodosUL.appendChild(clickedElement);
}
