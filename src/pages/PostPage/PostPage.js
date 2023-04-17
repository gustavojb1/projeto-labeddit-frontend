import React from 'react'
import { CommentContainer, Container, Input, Separator } from './styled'
import PostBox from '../../components/PostBox/PostBox'
import Header from '../../components/Header/Header'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const PostPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PostBox>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?
        </PostBox>
        <Input placeholder='Adicionar comentário' />
        <PrimaryButton>Responder</PrimaryButton>
        <Separator />
        <CommentContainer >
          <PostBox isComment={true}>
            Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)
          </PostBox>
          <PostBox isComment={true}>
            Não é a maioria, já vi umas enquetes, inclusive nesse sub se não me engano, onde Windows ganhava na qntd de usuários.
            Linux é rápido, tem várias opções pra diferentes gostos.
          </PostBox>
        </CommentContainer>

      </Container>
    </>

  )
}

export default PostPage