import React from 'react'
import { ShoppingListHeader, EmptyList } from '../components/ShoppingList'
import './ShoppingList.scss'

const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        <EmptyList />
      </div>
    </div>
  )
}

export default ShoppingList
