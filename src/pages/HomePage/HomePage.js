import React from 'react'
import { Container, Form, Input, PostContainer } from './styled'
import Header from '../../components/Header/Header'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import PostBox from '../../components/PostBox/PostBox'

const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Input placeholder='Escreva seu post ...' />
          <PrimaryButton marginTop='12px'>Postar</PrimaryButton>
        </Form>
        <PostContainer>
        <PostBox>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</PostBox>
        <PostBox>Qual super poder você gostaria de ter?</PostBox>
        <PostBox>Se você pudesser ter qualquer tipo de pet, qual você escolheria?</PostBox>
        <PostBox>Se você tivesse que comer apenas uma coisa para o resto de sua vida, o que você escolheria?</PostBox>
        </PostContainer>
      </Container>
    </>

  )
}

export default HomePage