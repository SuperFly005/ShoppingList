import React from 'react'
import { useDispatch } from 'react-redux'
import { insertNewTask } from '../../redux/shoppingActions'
import { CustomButton, CustomDropDown, useInput } from './Dialog'
import './ItemDialog.scss'

const ItemDialog = ({ closeDialog, visible, type }) => {
    const dispatch = useDispatch()
    const [name, nameInput] = useInput({ placeHolder: "Item Name", singleType: true })
    const [description, descriptionInput] = useInput({ placeHolder: "Description", singleType: false })

    const onSave = () => {
        dispatch(insertNewTask({ name, description }))
        closeDialog()
    }

  return (
    <div className="item-dialog" style={{ right: visible ? '0px' : '-560px' }}>
      <div className="dialog-title">
        SHOPPING LIST
        <div className="material-icons" onClick={closeDialog}>
          chevron_right
        </div>
      </div>
      <div className="dialog-content">
        <div className="dialog-content-tag">{type === "new" ? "Add an Item" : "Edit an Item"}</div>
        <div className="dialog-content-subtag">{type === "new" ? "Add your new item below" : "Edit your item below"}</div>
        { nameInput }
        { descriptionInput }
        <CustomDropDown options={[1, 2, 3]} />
      </div>
      <div className="dialog-button-group">
        <CustomButton
          value="Cancel"
          type="delete"
          style={{ marginRight: '30px' }}
          clickHandler={closeDialog}
        />
        <CustomButton value={type === "new" ? "Add Task" : "Save Item"} type="active" clickHandler={onSave}/>
      </div>
      <div className="dialog-footer" />
    </div>
  )
}

export default ItemDialog
