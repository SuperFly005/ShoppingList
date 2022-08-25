import React, { useState } from 'react'
import {
  ShoppingListHeader,
  EmptyList,
  ItemDialog,
} from '../components/ShoppingList'
import './ShoppingList.scss'

const ShoppingList = () => {
  const [dialog, setDialog] = useState(false)

  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        <EmptyList showDialog={() => setDialog(true)} />
      </div>
      {dialog && <ItemDialog closeDialog={() => setDialog(false)}/>}
    </div>
  )
}

export default ShoppingList
