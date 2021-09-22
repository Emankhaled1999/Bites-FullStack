import styled from 'styled-components';
import ImgBg from '../../images/checkk.jpeg';


export const BG = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1))
,
 url(${ImgBg});
 height:100vh;
 background-position: center;
 background-size: cover;
 display: grid;
 align-content: center;
 justify-content: center;

`;

export const Form2 = styled.div`
display: grid;
align-content: center;
justify-content: center;
padding: 5px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }
`;

export const Title = styled.div`
color: white;
font-size: 34px;
display: grid;
align-content: center;
justify-content: center;

`;

