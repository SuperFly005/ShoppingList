import React, { useState } from 'react'
import { FormControl, Select, MenuItem } from '@mui/material'

const useDropDown = (options, errorHandler) => {
  const [value, setValue] = useState(0)

  return [
    value,
    setValue,
    <div className="drop-down">
      <FormControl
        sx={{
          width: '100%',
          height: '50px',
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <Select
          displayEmpty
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            errorHandler()
          }}
          sx={{
            fontFamily: 'Nunito',
            fontSize: '16px',
            color: value === 0 ? '#9CA8B4' : '#2A323C',
          }}
          renderValue={() => `${value === 0 ? 'How Many?' : value}`}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>,
  ]
}

export default useDropDown
