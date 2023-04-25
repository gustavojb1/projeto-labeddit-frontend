import React, { useEffect, useState } from 'react'
import { CentraliseContainer, CommentContainer, Container, Input, Separator } from './styled'
import PostBox from '../../components/PostBox/PostBox'
import Header from '../../components/Header/Header'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import axios from 'axios'
import { BASE_URL } from '../../utils/baseUrl'
import { goToLoginPage } from '../../routes/coordinator'

const PostPage = () => {

  const [post, setPost] = useState(null);
  const [token] = useLocalStorage('token-labeddit', '')
  const [commentContent, setCommentContent] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const checkToken = async () => {
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
        const responsePost = await axios.get(BASE_URL + `/posts/${id}`, config);
        setPost(responsePost.data)
      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
    }
    axiosGet()
  }

  async function createComment(event) {
    event.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: token
        }
      }

      const body = {
        content: commentContent,
        postId: id
      }

      await axios.post(BASE_URL + "/comments", body, config);

      setCommentContent("");
      fetchPost();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  async function onVote(vote, postId, entity, event) {
    event.stopPropagation();
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
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  useEffect(() => {
    checkToken()
  }, [])


  if (post) {
    return (
      <>
        <Header />
        <CentraliseContainer>
          <Container>
            <PostBox
              username={post.creator.username}
              postId={post.id}
              content={post.content}
              upvotes={post.upvotes}
              downvotes={post.downvotes}
              commentsNumber={post.comments.length}
              onVote={onVote}
              isComment={false}
              entity={"posts"}
            />
            <Input
              placeholder='Adicionar comentário'
              value={commentContent}
              onChange={(event) => setCommentContent(event.target.value)}
            />
            <PrimaryButton
              onClick={createComment}
            >Responder</PrimaryButton>
            <Separator />
            <CommentContainer >
              {
                post.comments.map((comment, index) => {
                  return (<PostBox
                    username={comment.creator.username}
                    isComment={true}
                    postId={comment.id}
                    content={comment.content}
                    upvotes={comment.upvotes}
                    downvotes={comment.downvotes}
                    key={index}
                    onVote={onVote}
                    entity={"comments"}
                  />)
                })
              }


            </CommentContainer>

          </Container>
        </CentraliseContainer>

      </>

    )
  }

  else return null
}

export default PostPage