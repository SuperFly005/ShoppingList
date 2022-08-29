import React from 'react'
import './Button.scss'

const Button = ({ value, type, style, clickHandler }) => {
  return (
    <div
      className="custom-button"
      style={{
        ...style,
        backgroundColor: type === 'active' ? '#1871E8' : 'white',
        color: type === 'active' ? 'white' : 'black',
        "&:hover": {
          backgroundColor: type === 'active' ? '#3891f8' : '#FAFAFA',
        }
      }}
      onClick={clickHandler}
    >
      {value}
    </div>
  )
}

export default Button
