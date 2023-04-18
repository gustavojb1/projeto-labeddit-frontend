import React, { useEffect, useState } from 'react'
import { Container, Form, Input, PostContainer } from './styled'
import Header from '../../components/Header/Header'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import PostBox from '../../components/PostBox/PostBox'
import useLocalStorage from '../../hooks/useLocalStorage'
import { goToLoginPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../utils/baseUrl'

const HomePage = () => {
  const [token] = useLocalStorage('token-labeddit', '')
  const [posts, setPosts] = useState([]);
  const [votes, setVotes] = useState([]);
  const [confirmFetch, setConfirmFetch] = useState(false)

  const navigate = useNavigate();

  const checkToken = async () => {
    try {
      if (token) {
        const response = await axios.get(BASE_URL + `/users/verify-token/${token}`);
        if (!response.data.isTokenValid) {
          goToLoginPage(navigate);
        }else{
          fetchPost()
        }
      } else {
        goToLoginPage(navigate);
      }
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  const fetchPost = async () => {
    try {
      const axiosGet = async () =>{
        const config = {
          headers: {
            Authorization: token
          }
        }
  
        const responsePosts = await axios.get(BASE_URL + "/posts", config);
        const responseVotes = await axios.get(BASE_URL + "/posts/votes", config);
        setPosts(responsePosts.data)
        setVotes(responseVotes.data)
      }
      axiosGet()
      console.log(posts)
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Form>
          <Input placeholder='Escreva seu post ...' />
          <PrimaryButton marginTop='12px'>Postar</PrimaryButton>
        </Form>
        <PostContainer>
          {
            posts?.map((post, index)=>{
                const postId = post.id;
                const upvotesSafe = votes.filter(vote => vote.postId === postId && vote.vote === 1);
                const downvotesSafe = votes.filter(vote => vote.postId === postId && vote.vote === 0);

                return (
                  <PostBox 
                      username={post.creator.username}
                      postId={postId}
                      content={post.content}
                      upvotes={upvotesSafe.length}
                      downvotes={downvotesSafe.length}
                      commentsNumber={post.comments.length}
                      key={index}
                  />)
            
  })          
          }
        </PostContainer>
      </Container>
    </>

  )
}

export default HomePage