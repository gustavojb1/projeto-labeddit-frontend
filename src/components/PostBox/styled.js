import styled from "styled-components";

export const Box = styled.div`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 18px;
background-color: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
`
export const Text = styled.span`
margin-block: 18px;
`
export const UpDownVotes = styled.div`
font-size: 10px;
height: 28px;
border: 1px solid #ECECEC;
border-radius: 28px;
display: flex;
align-items: center;
column-gap: 15px;
padding-inline: 10px;
`
export const IconImage = styled.img`
height: 17px;
width: 15px;
overflow: visible;
margin-top: ${props => props.marginTop};
`

export const SendTo = styled.div`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 12px;
color: #6F6F6F;
`

export const Comments = styled.div`
font-size: 10px;
height: 28px;
border: 1px solid #ECECEC;
border-radius: 28px;
display: flex;
align-items: center;
column-gap: 15px;
padding-inline: 10px;
`
export const VotsCommentsContainer = styled.div`
width: 100%;
display: flex;
column-gap: 12px;
`
