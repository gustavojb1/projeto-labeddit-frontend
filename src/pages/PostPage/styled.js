import styled from "styled-components";

export const CentraliseContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;

export const Container = styled.div`
width: 100%;
padding-top: 30px;
margin-inline: 30px;
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 20px;
max-width: 800px;
`;

export const Input = styled.textarea`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 18px;
height: 130px;
background-color: #EDEDED;
border: none;
border-radius: 12px;
width: 100%;
display: flex;
align-items: flex-start;
padding: 10px;
resize: none;
margin-block: 12px;
position: relative;
`

export const Separator = styled.div`
  margin-top: 16px;
  width: 98%;
  height: 2px;
  left: 1%;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border-radius: 50px;
`

export const CommentContainer = styled.div`
padding-top: 35px;
display: flex;
flex-direction: column;
row-gap: 13px;
width: 100%;
`