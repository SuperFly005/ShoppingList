import React from 'react'
import './Button.scss'

const Button = ({ value, type, style, clickHandler }) => {
  return (
    <div
      className="custom-button"
      style={{
        ...style,
        backgroundColor: type === 'active' ? '#1871E8' : '#FAFAFA',
        color: type === 'active' ? 'white' : 'black',
      }}
      onClick={clickHandler}
    >
      {value}
    </div>
  )
}

export default Button
