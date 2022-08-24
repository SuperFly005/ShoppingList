import React from "react";
import { ShoppingListHeader } from "../components/ShoppingList";
import "./ShoppingList.scss"

const ShoppingList = () => {
    return (
        <div className="shopping-list">
            <ShoppingListHeader />
        </div>
    )
}

export default ShoppingList