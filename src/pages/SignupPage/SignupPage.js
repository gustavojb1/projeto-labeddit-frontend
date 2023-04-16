import React from 'react'
import Header from '../../components/Header/Header'
import { CheckBox, Container, Label, Link, Span, Tittle } from './styled'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const SignupPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Tittle>
          Olá, boas vindas ao LabEddit ;)
        </Tittle>
        <PrimaryInput placeholder='Apelido' />
        <PrimaryInput placeholder='E-mail' />
        <PrimaryInput placeholder='Senha' />
        <Span>
        Ao continuar, você concorda com o nosso <Link href='#'>Contrato de usuário</Link> e nossa <Link href='#'> Política de Privacidade</Link>
        </Span>
        <Label>
          <CheckBox
          type='checkbox'
          />
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </Label>
        <PrimaryButton marginTop='28px'>Cadastrar</PrimaryButton>
      </Container>
    </>

  )
}

export default SignupPage