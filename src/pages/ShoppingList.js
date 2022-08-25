import React, { useState } from 'react'
import {
  ShoppingListHeader,
  EmptyList,
  ItemDialog,
} from '../components/ShoppingList'
import './ShoppingList.scss'

const ShoppingList = () => {
  const [dialogState, setDialogState] = useState(false)

  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        <EmptyList showDialog={() => setDialogState(true)} />
      </div>
      <ItemDialog closeDialog={() => setDialogState(false)} visible={dialogState} type="new"/>
      {dialogState && <div className='dialog-back' onClick={() => setDialogState(false)}></div>}
    </div>
  )
}

export default ShoppingList
