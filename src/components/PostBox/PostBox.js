import React from 'react'
import { Box, RowImage, SendTo, Text, UpDownVotes } from './styled'
import upRow from '../../img/upRow.svg'
import downRow from '../../img/downRow.svg'


const PostBox = ({children}) => {
  return (
    <Box>
      <SendTo>Enviado por: labaluno83 </SendTo>
      <Text>
      {children}
      </Text>
      <UpDownVotes>
        <RowImage src={upRow}/>
          211
        <RowImage marginTop='2px' src={downRow}/>
      </UpDownVotes>
    </Box>
  )
}

export default PostBox