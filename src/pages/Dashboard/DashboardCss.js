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
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: slateblue;
  }
`;

export const DivBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivHeaderEsquerdo = styled.div`
  display: flex;
`;

export const DivEsquerda = styled.div`
  display: flex;
`;
