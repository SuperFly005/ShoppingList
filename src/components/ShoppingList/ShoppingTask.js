import { Checkbox } from '@mui/material'
import React from 'react'
import './ShoppingTask.scss'

const ShoppingTask = ({ task }) => {
    
  return (
    <div className="shopping-task">
      <Checkbox
        onChange={(e) => console.log(e.target.checked)}
        sx={{ margin: '0px 10px' }}
      />
      <div style={{ disply: 'flex', flexDirection: 'column' }}>
        <div className="task-name">{task.name}</div>
        <div className="task-description">{task.description}</div>
      </div>
        <div className="material-icons" style={{marginLeft: "auto"}}>edit</div>
        <div className="material-icons" style={{margin: "0px 20px"}}>delete</div>
    </div>
  )
}

export default ShoppingTask
