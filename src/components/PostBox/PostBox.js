import React, { useEffect, useState } from 'react'
import { Box, Comments, IconImage, IconImageDiv, SendTo, Text, UpDownVotes, VotsCommentsContainer } from './styled'
import comment from '../../img/comment.svg'
import UpRow from '../UpRow/UpRow'
import DownRow from '../DownRow/DownRow'
import useLocalStorage from '../../hooks/useLocalStorage'
import axios from 'axios'
import { BASE_URL } from '../../utils/baseUrl'


const PostBox = ({ username, postId, content, upvotes, downvotes, commentsNumber, onClick, onVote, entity }) => {

  const [token] = useLocalStorage('token-labeddit', '')
  const [userId] = useLocalStorage('user-id-labeddit', '')
  const [corUp, setCorUp] = useState(null);
  const [corDown, setCorDown] = useState(null);

  const getVote = async (entity, postId) => {
    const axiosGet = async () => {
      try {
        const config = {
          headers: {
            Authorization: token
          }
        }
        const responseVotes = await axios.get(BASE_URL + `/${entity}/votes`, config);
        const teste = responseVotes.data
        if (entity === "posts") {
          teste.map((vote) => {
            if (vote.postId === postId && vote.vote === 0 && vote.userId === userId) {
              setCorDown("#0083ff")
            }
            if (vote.postId === postId && vote.vote === 1 && vote.userId === userId) {
              setCorUp("#0083ff")
            }
            return null
          })
        }
        if (entity === "comments") {
          teste.map((vote) => {
            if (vote.commentId === postId && vote.vote === 0 && vote.userId === userId) {
              setCorDown("#0083ff")
            }
            if (vote.commentId === postId && vote.vote === 1 && vote.userId === userId) {
              setCorUp("#0083ff")
            }
            return null
          })
        }

      } catch (error) {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
    }
    axiosGet()
  }

  function onClickVote(UpOrDown, postId, entity, event){
    //UpOrDown é true ou false
    onVote(UpOrDown, postId, entity, event)

    if(UpOrDown===true){
      if(corUp==="#0083ff")setCorUp(null)
      if(corUp===null) setCorUp("#0083ff")
      if(corDown === "#0083ff"){
        setCorDown(null)
        setCorUp("#0083ff")
      }
    }
    if(UpOrDown===false){
      if(corDown==="#0083ff")setCorDown(null)
      if(corDown===null) setCorDown("#0083ff")
      if(corUp==="#0083ff"){
        setCorUp(null)
        setCorDown("#0083ff")
      }
    }

    
  }

  useEffect(() => {
    getVote(entity, postId)
  }, [entity, postId])

  const realVotes = upvotes - downvotes

  return (
    <Box onClick={onClick}>
      <SendTo>Enviado por: {username} </SendTo>
      <Text>
        {content}
      </Text>
      <VotsCommentsContainer>
        <UpDownVotes>
          <IconImageDiv>
            <UpRow
              onClick={(event) => { onClickVote(true, postId, entity, event) }}
              fill={corUp}
            />
          </IconImageDiv>
          {realVotes}
          <IconImageDiv>
            <DownRow
              onClick={(event) => { onClickVote(false, postId, entity, event) }}
              fill={corDown}
            />
          </IconImageDiv>
        </UpDownVotes>
        {entity === "posts" ?
          <Comments>
            <IconImage src={comment} />
            {commentsNumber}
          </Comments> : null
        }


      </VotsCommentsContainer>

    </Box>
  )
}

export default PostBox