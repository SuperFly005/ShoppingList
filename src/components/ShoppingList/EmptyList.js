import React from 'react'
import './EmptyList.scss'
import { CustomButton } from './Dialog'

const EmptyList = ({ showDialog }) => {
  return (
    <div className="empty-list">
      Your shopping list is empty :(
      <CustomButton
        value="Add your first item"
        type="active"
        style={{ marginTop: '16px' }}
        clickHandler={showDialog}
      />
    </div>
  )
}

export default EmptyList
