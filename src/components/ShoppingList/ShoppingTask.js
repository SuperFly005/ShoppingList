import React from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from '@mui/material'
import { changePurchased } from '../../redux/shoppingActions'
import './ShoppingTask.scss'

const ShoppingTask = ({ taskID, task, showModifyDialog }) => {
  const dispatch = useDispatch()

  return (
    <div className="shopping-task">
      <Checkbox
        onChange={() => dispatch(changePurchased(taskID))}
        sx={{ margin: '0px 10px' }}
        checked={task.purchased}
      />
      <div style={{ disply: 'flex', flexDirection: 'column' }}>
        <div
          className="task-name"
          style={{
            color: task.purchased ? '#4D81B7' : 'black',
            textDecoration: task.purchased ? 'line-through' : 'none',
          }}
        >
          {task.name}
        </div>
        <div
          className="task-description"
          style={{ textDecoration: task.purchased ? 'line-through' : 'none' }}
        >
          {task.description}
        </div>
      </div>
      <div className="material-icons" style={{ marginLeft: 'auto' }} onClick={showModifyDialog}>
        edit
      </div>
      <div className="material-icons" style={{ margin: '0px 20px' }}>
        delete
      </div>
    </div>
  )
}

export default ShoppingTask
