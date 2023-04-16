import styled from "styled-components";

export const Container = styled.div`
padding-top: 50px;
margin-inline: 30px;
display: flex;
align-items: center;
flex-direction: column;
`;

export const Form = styled.form`
width: 100%;
position: relative;
margin-bottom: 50px;
&:after {
    margin-top: 85px;
    width: 98%;
    height: 2px;
    content: "";
    position: absolute;
    left: 1%;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    z-index: 9999;
    border-radius: 50px;
  }

`
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
`

export const PostContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 18px;
width: 100%;
`;