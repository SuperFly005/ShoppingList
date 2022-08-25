import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ShoppingListHeader,
  EmptyList,
  ItemDialog,
  ShoppingTask,
} from '../components/ShoppingList'
import { CustomButton } from '../components/ShoppingList/Dialog'
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
            <div className='task-list'>
                <div className='task-list-header'>
                    Your Items
                    <CustomButton value="Add Item" type="active" clickHandler={() => setDialogState(true)}/>
                </div>
                { tasks.map(task => (
                    <ShoppingTask task={task}/>
                ))}
            </div>
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
