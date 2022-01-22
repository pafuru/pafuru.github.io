const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function delToDo(event){
    const lists = event.target.parentElement;
    lists.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(lists.id));
    saveToDos();
}

function paintToDo(newTodo){
    const lists = document.createElement("li");
    lists.id = newTodo.id;
    const spans = document.createElement("span");
    spans.innerText = newTodo.text;

    const btn = document.createElement("button");
    btn.innerText = "❌"
    btn.addEventListener("click", delToDo);

    lists.appendChild(spans);
    lists.appendChild(btn);
    
    toDoList.appendChild(lists);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}