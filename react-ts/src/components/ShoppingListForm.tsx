import React, {useRef} from 'react';

interface ShoppingListFormProps {
    onAddItem: (item: string, num: number) => void;
}

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null)
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const product = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        onAddItem(product, quantity)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' ref={productInputRef}/>
            <input type="number" min={0} ref={quantityInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm;