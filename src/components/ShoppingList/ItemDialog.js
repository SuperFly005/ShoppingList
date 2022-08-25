import React from 'react'
import { CustomButton, CustomDropDown, CustomInput } from './Dialog'
import './ItemDialog.scss'

const ItemDialog = ({ closeDialog, visible, type }) => {

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
        <CustomInput placeHolder="Item Name" singleType />
        <CustomInput placeHolder="Description" singleType={false} />
        <CustomDropDown options={[1, 2, 3]} />
      </div>
      <div className="dialog-button-group">
        <CustomButton
          value="Cancel"
          type="delete"
          style={{ marginRight: '30px' }}
          clickHandler={closeDialog}
        />
        <CustomButton value={type === "new" ? "Add Task" : "Save Item"} type="active" />
      </div>
      <div className="dialog-footer" />
    </div>
  )
}

export default ItemDialog
