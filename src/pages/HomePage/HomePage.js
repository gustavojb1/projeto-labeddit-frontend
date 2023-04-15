import React from 'react'
import { Container, CreateButton, Form, Input, LogoContainer, LogoImg, NextButton, SecondaryTittle, Title } from "./styled";
import Vector1 from '../../img/Vector.svg';
import Vector2 from '../../img/Vector-1.svg';
import Vector3 from '../../img/Vector-2.svg';
import Vector4 from '../../img/Vector-3.svg';


const HomePage = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={Vector4} />
        <LogoImg src={Vector3} />
        <LogoImg src={Vector1} />
        <LogoImg src={Vector2} />
      </LogoContainer>
      <Title>
        LabEddit
      </Title>
      <SecondaryTittle>
        O projeto de rede social da Labenu
      </SecondaryTittle>

      <Form>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha'/>
        <NextButton>Continuar</NextButton>
        <CreateButton>Criar Conta</CreateButton>
      </Form>
    </Container>
  )
}

export default HomePage