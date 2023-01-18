import React from "react";
import { Item } from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

function ShoppingList({ items }: ShoppingListProps): JSX.Element {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
