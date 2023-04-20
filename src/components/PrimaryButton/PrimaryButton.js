import React from 'react'
import { Button } from './styled'

const PrimaryButton = ({children, marginTop, type, onClick}) => {
  return (
    <Button
    marginTop={marginTop}
    type={type}
    onClick={onClick}
    >{children}</Button>
  )
}

export default PrimaryButton