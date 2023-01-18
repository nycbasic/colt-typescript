import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { Item } from "./models/item";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: uuid(), product, quantity }]);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingListForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
