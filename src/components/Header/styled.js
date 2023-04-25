import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
background-color: #EDEDED;
height: 50px;
`;

export const Logo = styled.img`
height: 60%;
`;

export const Right = styled.div`
display: flex;
justify-content: right;
padding-right: 25px;
font-family: 'Noto Sans', sans-serif;
color: #4088CB;
cursor: pointer;
`;

export const Left = styled.div`
display: flex;
justify-content: left;
padding-left: 25px;
font-family: 'Noto Sans', sans-serif;
color: #4088CB;
cursor: pointer;
font-size: 30px;
`;