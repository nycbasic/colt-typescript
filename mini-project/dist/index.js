"use strict";
// exclamation mark used for certain, a value will be returned that is not null.
const btn = document.getElementById("btn");
// Type Assertions to define the specific element
const input = document.getElementById("todo-input");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");
const todos = getTodos();
function getTodos() {
    const storage = localStorage.getItem("todos");
    if (storage === null)
        return [];
    return JSON.parse(storage);
}
function renderTodos() {
    for (let todo of todos) {
        createTodo(todo);
    }
}
// For the event method, when using type script, needs to be set a type when not used with the event listner.
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    listItem.append(checkbox);
    listItem.append(todo.text);
    list?.append(listItem);
}
form.addEventListener("submit", handleSubmit);
window.addEventListener("load", renderTodos);
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
