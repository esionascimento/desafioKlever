import styled from 'styled-components';

export const DivCard = styled.div`
  margin: 10px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const DivInputForm = styled.div`

`;

export const H3 = styled.h3`
  color: black;
`;

export const Button = styled.button`
  padding: 12px 80px;
  border-radius: 5px;
  margin: 15px 0;
  &:hover{
    background-color: slateblue;
  }
  @media screen and (max-width: 300px) {
    margin: 10px auto;
    padding: 6px 40px;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px 15px;
  width: 250px;
  &:focus-visible{
    border-color: rgb(0, 60, 255);
    color: rgb(0, 60, 255);
    outline: none;
  }
  @media screen and (max-width: 400px) {
    margin: 10px auto;
    width: 100%;
    padding: 6px 40px;
  }
`;


export const Hr = styled.hr`
  margin: 5px;
`;

export const DivLink = styled.div`
  margin-left: 5px;
`;