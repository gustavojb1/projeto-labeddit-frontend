import React, { useEffect, useState } from 'react'
import { CentraliseContainer, Container, Form, Input, PostContainer } from './styled'
import Header from '../../components/Header/Header'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import PostBox from '../../components/PostBox/PostBox'
import useLocalStorage from '../../hooks/useLocalStorage'
import { goToLoginPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { BASE_URL } from '../../utils/baseUrl'
import { goToPostPage } from '../../routes/coordinator'
import LoadingModal from '../../components/LoadingModal/LoadingModal'

const HomePage = () => {
  const [token] = useLocalStorage('token-labeddit', '')
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const checkToken = async () => {
    setIsLoading(true)
    try {
      if (token) {
        const response = await axios.get(BASE_URL + `/users/verify-token/${token}`);
        if (!response.data.isTokenValid) {
          goToLoginPage(navigate);
        } else {
          fetchPost()
        }
      } else {
        goToLoginPage(navigate);
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  const fetchPost = async () => {

    const axiosGet = async () => {
      try {
        const config = {
          headers: {
            Authorization: token
          }
        }
        const responsePosts = await axios.get(BASE_URL + "/posts", config);
        setPosts(responsePosts.data)
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
    }
    axiosGet()
  }

  function onClickPost(postId) {
    setIsLoading(true)
    goToPostPage(navigate, postId)
  }

  async function createPost(event) {
    setIsLoading(true)
    event.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        content: postContent
      }

      await axios.post(BASE_URL + "/posts", body, config);

      setPostContent("");
      fetchPost();

    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  async function onVote(vote, postId, entity, event) {
    event.stopPropagation();
    setIsLoading(true)
    try {
      // entity é 'posts' ou 'comments'
      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        vote: vote
      };

      await axios.put(BASE_URL + `/${entity}/${postId}/vote`, body, config);

      fetchPost();
    } catch (error) {
      setIsLoading(false)
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
      <CentraliseContainer>
        <Container>
          <Form>
            <Input
              placeholder='Escreva seu post ...'
              value={postContent}
              onChange={(event) => setPostContent(event.target.value)}
            />
            <PrimaryButton
              marginTop='12px'
              onClick={createPost}
            >Postar</PrimaryButton>
          </Form>
          <PostContainer>
            {
              posts?.map((post, index) => {
                return (
                  <PostBox
                    username={post.creator.username}
                    postId={post.id}
                    content={post.content}
                    upvotes={post.upvotes}
                    downvotes={post.downvotes}
                    commentsNumber={post.comments.length}
                    key={index}
                    onClick={() => onClickPost(post.id)}
                    onVote={onVote}
                    entity={"posts"}
                  />)

              })
            }
          </PostContainer>
        </Container>
      </CentraliseContainer>
      {isLoading && <LoadingModal />}
    </>

  )
}

export default HomePage