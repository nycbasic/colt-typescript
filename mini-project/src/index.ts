// exclamation mark used for certain, a value will be returned that is not null.
const btn = document.getElementById("btn")!;
// Type Assertions to define the specific element
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.getElementById("todo-form")! as HTMLFormElement;
const list = document.getElementById("todo-list");

// For the event method, when using type script, needs to be set a type when not used with the event listner.
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log("Submitted!");
  const newTodoText = input.value;
  const listItem = document.createElement("li")
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.append(checkbox);
  listItem.append(newTodoText);
  list?.append(listItem);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
