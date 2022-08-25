import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ShoppingListHeader,
  EmptyList,
  ItemDialog,
  ShoppingTask,
} from '../components/ShoppingList'
import './ShoppingList.scss'

const ShoppingList = () => {
  const [dialogState, setDialogState] = useState(false)
  const tasks = useSelector((state) => state.tasks)

  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        {!tasks.length ? (
          <EmptyList showDialog={() => setDialogState(true)} />
        ) : (
            tasks.map(task => (
                <ShoppingTask task={task}/>
            ))
        )}
      </div>

      <ItemDialog
        closeDialog={() => setDialogState(false)}
        visible={dialogState}
        type="new"
      />

      {dialogState && (
        <div
          className="dialog-back"
          onClick={() => setDialogState(false)}
        ></div>
      )}
    </div>
  )
}

export default ShoppingList
