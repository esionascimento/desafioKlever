import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  `;

export const P = styled.p`
  display: flex;
  width: 30%;
  align-items: flex-start;
  margin: auto 0;
  @media(max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
  `;

export const Span = styled.span`
  display: flex;
  width: 70%;
  align-items: flex-start;
  margin: auto 0;
  @media(max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: flex-start;
  height: 50px;
  @media(max-width: 500px) {
    flex-direction: column;
  }
  &:nth-child(odd) {
    background: silver;
  }
  `;
