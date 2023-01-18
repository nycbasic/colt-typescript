import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { Item } from "./models/item";

// const items = [
//   {
//     id: 1,
//     product: "Lemon",
//     quantity: 3,
//   },
//   {
//     id: 2,
//     product: "Chicken Breast",
//     quantity: 2,
//   }
// ];

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    setItems([...items, { id: items.length + 1, product, quantity: items.length + 1 }]);
  };
  return (
    <div className="App">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
