import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  text-align: start;
  
  @media(max-width: 550px) {
    width: 200px;
  }
  @media(max-width: 350px) {
    width: 100px;
  }
  `;

export const Div = styled.div`
margin: 10px;
  display: flex;
`;