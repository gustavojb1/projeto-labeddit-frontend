import React from 'react'
import { Button } from './styled'

const PrimaryButton = ({children, marginTop}) => {
  return (
    <Button marginTop={marginTop}>{children}</Button>
  )
}

export default PrimaryButton