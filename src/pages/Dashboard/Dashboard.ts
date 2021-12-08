import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: silver;
`;

export const Li = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover{
    background-color: slateblue;
  }
`;

export const DivBody = styled.div`
  display: flex;
`;
