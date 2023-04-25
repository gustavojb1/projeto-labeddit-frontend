import React from 'react'
import { Container, Left, Logo, Right } from './styled'
import logoImg from '../../img/group.png'
import useLocalStorage from '../../hooks/useLocalStorage'
import { goToHomePage, goToLoginPage } from '../../routes/coordinator'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [token, setToken] = useLocalStorage('token-labeddit', '')
  const [userId, setUserId] = useLocalStorage('user-id-labeddit', '')

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    setToken('')
    setUserId('')
    setTimeout(() => {
      goToLoginPage(navigate);
    }, 100);
  }

  const renderRight = () => {
    if (location.pathname.match(/^\/post\/[a-zA-Z0-9-]+$/)){
        return <Right onClick={logout} >Logout</Right>
    }

    switch(location.pathname){
        case "/login":
            return <></>
        case "/signup":
            return <Right onClick={() => {goToLoginPage(navigate)}} >Entrar</Right>
        case "/":
            return <Right onClick={logout} >Logout</Right>
    }
}

const renderLeft = () => {
  if (location.pathname.match(/^\/post\/[a-zA-Z0-9-]+$/)){
      return <Left onClick={() => {goToHomePage(navigate)}}>X</Left>
  } else {
      return <Left></Left>
  }
}

  return (
    <Container>
     { renderLeft()}
      <Logo src={logoImg} />
      {renderRight()}
    </Container>
  )
}

export default Header