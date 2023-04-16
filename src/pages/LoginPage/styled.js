import styled from "styled-components";

export const Container = styled.div`
margin-inline: 30px;
padding-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
`;

export const LogoContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
height: 100px;
justify-content: center;
align-items: center;
`;

export const LogoImg = styled.img`
height: 100%;
`

export const Title = styled.div`
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 700;
font-size: 36px;
padding-top: 10px;
`;

export const SecondaryTittle = styled.div`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 16px;
line-height: 21px;
font-weight: 400;
`;

export const Form = styled.form`
margin-top: 110px;
position: relative;
&:after {
    margin-top: 20px;
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

export const CreateButton = styled.button`
font-family: 'Noto Sans', sans-serif;
font-weight: 700;
margin-top: 40px;
width: 100%;
height: 51px;
border-radius: 27px;
border: 2px solid #FE7E02 ;
color: #FE7E02;
font-size: 18px;
position: relative;
background-color: white;
`




