import React, { useState } from 'react'
import './Input.scss'

const Input = ({ singleType, placeHolder }) => {
  const [value, setValue] = useState('')

  return singleType === true ? (
    <input
      className="custom-input"
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  ) : (
    <textarea
      className="custom-input custom-textarea"
      placeholder={placeHolder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  )
}

export default Input
