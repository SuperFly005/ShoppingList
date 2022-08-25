import React from 'react'
import { FormControl, Select, MenuItem } from '@mui/material'

const DropDown = ({ options }) => {
  return (
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
        >
          <MenuItem disabled value="">
            How Many?
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default DropDown
