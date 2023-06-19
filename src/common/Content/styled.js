import styled from "styled-components";

export const ContentTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 36px;
  margin-left: 16px;
  font-weight: ${({ theme }) => theme.fontSize.bold};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
  }
`;

export const SectionArea = styled.div`
  max-width: 1368px;
  padding-top: 14px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
   margin-left: 160px;
  }
`;
