import React from 'react'
import { Container, Logo } from './styled'
import logoImg from '../../img/group.png'

const Header = () => {
  return (
    <Container>
      <Logo src={logoImg}/>
    </Container>
  )
}

export default Header