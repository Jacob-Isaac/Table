import styled from "styled-components";


export const Row = styled.span`
  display: flex;
  padding-bottom: 9px;
  margin-bottom: 9px;
  border-bottom: 1px solid rgb(158, 157, 157);
`;
export const Content = styled.span`
cursor: pointer;
 text-align: justify;
  flex-grow: 1;
  margin: 5px;
`;
export const BookTable = styled.ul`
  text-align: left;
  list-style-type: none;
  margin-right: 35px;
  word-break: break-word;
`;
export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(158, 158, 158);
  }
`;