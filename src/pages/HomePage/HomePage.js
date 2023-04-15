import React from 'react'
import { Container, CreateButton, Form, LogoContainer, LogoImg, SecondaryTittle, Title } from "./styled";
import group from '../../img/group.png'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';


const HomePage = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={group} />
      </LogoContainer>
      <Title>
        LabEddit
      </Title>
      <SecondaryTittle>
        O projeto de rede social da Labenu
      </SecondaryTittle>

      <Form>
        <PrimaryInput placeholder='E-mail'/>
        <PrimaryInput placeholder='Senha'/>
        <PrimaryButton>Continuar</PrimaryButton>
        <CreateButton>Criar Conta</CreateButton>
      </Form>
    </Container>
  )
}

export default HomePage