import React from 'react'
import { Box, Comments, IconImage, SendTo, Text, UpDownVotes, VotsCommentsContainer } from './styled'
import upRow from '../../img/upRow.svg'
import downRow from '../../img/downRow.svg'
import comment from '../../img/comment.svg'


const PostBox = ({ children }) => {
  return (
    <Box>
      <SendTo>Enviado por: labaluno83 </SendTo>
      <Text>
        {children}
      </Text>
      <VotsCommentsContainer>
        <UpDownVotes>
          <IconImage src={upRow} />
          211
          <IconImage marginTop='2px' src={downRow} />
        </UpDownVotes>
        <Comments>
          <IconImage src={comment} />
          54
        </Comments>
      </VotsCommentsContainer>

    </Box>
  )
}

export default PostBox