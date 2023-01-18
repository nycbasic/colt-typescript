import React from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
const items = [
  {
    id: 1,
    product: "Lemon",
    quantity: 3,
  },
  {
    id: 1,
    product: "Chicken Breast",
    quantity: 2,
  }
];
function App() {
  return (
    <div className="App">
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
