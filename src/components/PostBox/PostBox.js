import React from 'react'
import { Box, Comments, IconImage, SendTo, Text, UpDownVotes, VotsCommentsContainer } from './styled'
import upRow from '../../img/upRow.svg'
import downRow from '../../img/downRow.svg'
import comment from '../../img/comment.svg'


const PostBox = ({ isComment, username, postId, content, upvotes, downvotes, commentsNumber, onClick }) => {

  const realVotes= upvotes-downvotes

  return (
    <Box onClick={onClick}>
      <SendTo>Enviado por: {username} </SendTo>
      <Text>
        {content}
      </Text>
      <VotsCommentsContainer>
        <UpDownVotes>
          <IconImage src={upRow} />
          {realVotes}
          <IconImage marginTop='2px' src={downRow} />
        </UpDownVotes>
        {!isComment ?
          <Comments>
            <IconImage src={comment} />
            {commentsNumber}
          </Comments> : null}


      </VotsCommentsContainer>

    </Box>
  )
}

export default PostBox