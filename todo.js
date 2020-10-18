const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("#taskInput"),
  todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  //Arrow expression
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });

  // const cleanToDos = toDos.filter(function(toDo){
  //     return toDo.id !== parseInt(li.id);
  // });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  todoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //Arrow expression
    parsedToDos.forEach((toDo) => {
      paintToDo(toDo.text);
    });
    // Traditional Form
    // parsedToDos.forEach(function(toDo){
    //     paintToDo(toDo.text);
    // });
  }
}

function clearTasks() {
  localStorage.removeItem("toDos");
  const ul = document.querySelector(".js-toDoList");
  while (ul.firstChild !== null) {
    ul.removeChild(ul.firstChild);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleTaskSubmit);
}

init();
