import React, { useState } from 'react'
import './Input.scss'

const useInput = ({ singleType, placeHolder }) => {
  const [value, setValue] = useState('')

  return [ value, setValue, singleType === true ? (
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
  )]
}

export default useInput
