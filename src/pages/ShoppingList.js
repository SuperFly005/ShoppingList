import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  ShoppingListHeader,
  EmptyList,
  ItemDialog,
  ShoppingTask,
  DeleteDialog,
} from '../components/ShoppingList'
import { CustomButton } from '../components/ShoppingList/Dialog'
import { deleteItem } from '../redux/shoppingActions'
import './ShoppingList.scss'

const ShoppingList = () => {
  const [dialogState, setDialogState] = useState(false)
  const [dialogType, setDialogType] = useState('new')
  const [dialogData, setDialogData] = useState({
    name: '',
    description: '',
    count: 0,
    purchased: false,
  })
  const [deleteItemID, setDeleteItemID] = useState(-1)
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const showDialog = (type, id = 0) => {
    setDialogState(true)
    setDialogType(type)
    setDialogData(
      type === 'new'
        ? { id, name: '', description: '', count: 0, purchased: false }
        : { id, ...tasks[id] },
    )
  }

  const deleteItemHandler = () => {
    dispatch(deleteItem(deleteItemID))
    setDeleteItemID(-1)
  }

  return (
    <div className="shopping-list">
      <ShoppingListHeader />
      <div className="shopping-list-container">
        {!Object.keys(tasks).length ? (
          <EmptyList showDialog={() => showDialog('new')} />
        ) : (
          <div className="task-list">
            <div className="task-list-header">
              Your Items
              <CustomButton
                value="Add Item"
                type="active"
                clickHandler={() => showDialog('new')}
              />
            </div>
            {Object.keys(tasks).map((id) => (
              <ShoppingTask
                taskID={id}
                task={tasks[id]}
                showModifyDialog={() => showDialog('modify', id)}
                deleteItemHandler={() => setDeleteItemID(id)}
              />
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

      {deleteItemID>=0 && (
        <DeleteDialog
          hideDialog={() => setDeleteItemID(-1)}
          deleteItemHandler={deleteItemHandler}
        />
      )}

      {(dialogState || deleteItemID>=0) && (
        <div
          className="dialog-back"
          onClick={() => {
            setDialogState(false)
            setDeleteItemID(-1)
          }}
        ></div>
      )}
    </div>
  )
}

export default ShoppingList
