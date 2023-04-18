import React from 'react'
import { Input } from './styled'

const PrimaryInput = (props) => {
  const {placeholder, id, name, type, value, handleChange}=props
  return (
    <Input 
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}/>
  )
}

export default PrimaryInput