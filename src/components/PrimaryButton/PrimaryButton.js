import React from 'react'
import { Button } from './styled'

const PrimaryButton = ({children, marginTop, type}) => {
  return (
    <Button
    marginTop={marginTop}
    type={type}
    >{children}</Button>
  )
}

export default PrimaryButton