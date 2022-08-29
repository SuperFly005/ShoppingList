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
  const [dialogType, setDialogType] = useState('new')
  const [dialogData, setDialogData] = useState({name: "", description: "", count: 0, purchased: false})
  const tasks = useSelector((state) => state.tasks)

  const showDialog = (type, id=0) => {
    setDialogState(true)
    setDialogType(type)
    setDialogData(type === 'new' ? {name: "", description: "", count: 0, purchased: false} : tasks[id])
  }

  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        {!Object.keys(tasks).length ? (
          <EmptyList
            showDialog={() => showDialog("new")}
          />
        ) : (
          <div className="task-list">
            <div className="task-list-header">
              Your Items
              <CustomButton
                value="Add Item"
                type="active"
                clickHandler={() => showDialog("new")}
              />
            </div>
            {Object.keys(tasks).map((id) => (
              <ShoppingTask taskID={id} task={tasks[id]} showModifyDialog={() => showDialog("modify", id)}/>
            ))}
          </div>
        )}
      </div>

      <ItemDialog
        data={dialogData}
        visible={dialogState}
        type={dialogType}
        closeDialog={() => setDialogState(false)}
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
