import styled from "styled-components";

export const BookTable = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 150px;
  }
`;
