import styled from "styled-components";

export const NoResultContainer = styled.div`
  margin: 195px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
  }
`;

export const StyledH1 = styled.span`
  margin-top: 20px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontSize.bold};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;
