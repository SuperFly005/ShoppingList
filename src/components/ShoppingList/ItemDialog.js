import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertNewTask, modifyTask } from '../../redux/shoppingActions'
import { CustomButton, useCustomDropDown, useInput } from './Dialog'
import { Checkbox, FormControlLabel } from '@mui/material'
import './ItemDialog.scss'

const ItemDialog = ({ data, visible, type, closeDialog }) => {
  const dispatch = useDispatch()
  const [name, setName, nameInput] = useInput({
    placeHolder: 'Item Name',
    singleType: true,
  })
  const [description, setDescription, descriptionInput] = useInput({
    placeHolder: 'Description',
    singleType: false,
  })
  const [count, setCount, countDropDown] = useCustomDropDown([1, 2, 3, 4, 5])
  const [purchased, setPurchased] = useState(false)

  useEffect(() => {
    setName(!data ? '' : data.name)
    setDescription(!data ? '' : data.description)
    setPurchased(!data ? false : data.purchased)
    setCount(!data ? 0 : data.count)
  }, [data, setName, setDescription, setCount])

  const onSave = () => {
    if(type === 'new') {
      dispatch(insertNewTask({ name, description, count }))
    } else {
      dispatch(modifyTask(data.id, { name, description, count, purchased }))
    }
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
        <div className="dialog-content-tag">
          {type === 'new' ? 'Add an Item' : 'Edit an Item'}
        </div>
        <div className="dialog-content-subtag">
          {type === 'new' ? 'Add your new item below' : 'Edit your item below'}
        </div>
        {nameInput}
        {descriptionInput}
        {countDropDown}
        {type === 'modify' && (
          <FormControlLabel
            label="Purchased"
            sx={{ fontFamily: 'Nunito', fontSize: '16px', color: '#9CA8B4' }}
            control={
              <Checkbox
                onChange={() => setPurchased(!purchased)}
                sx={{ margin: '25px 0px' }}
                checked={purchased}
              />
            }
          />
        )}
      </div>
      <div className="dialog-button-group">
        <CustomButton
          value="Cancel"
          type="delete"
          style={{ marginRight: '30px' }}
          clickHandler={closeDialog}
        />
        <CustomButton
          value={type === 'new' ? 'Add Task' : 'Save Item'}
          type="active"
          clickHandler={onSave}
        />
      </div>
      <div className="dialog-footer" />
    </div>
  )
}

export default ItemDialog
