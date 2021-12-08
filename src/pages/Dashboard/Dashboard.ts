import styled from "styled-components";

export const DivDashboard = styled.div`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: silver;
`;

export const Li = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: slateblue;
  }
`;

export const DivBody = styled.div`
  display: flex;
`;

export const DivEsquerda = styled.div`
  width: 50%;
  border-right: 1px solid black;
`;

export const DivDireita = styled.div`
  width: 50%;
`;
