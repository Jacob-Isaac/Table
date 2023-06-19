import styled from "styled-components";

export const Roww = styled.span`
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
export const BookTable = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   margin-left: 150px;
  }
`;
export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: rgb(158, 158, 158);
  }
`;
