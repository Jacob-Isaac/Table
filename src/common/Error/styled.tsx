import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  margin: 195px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 120px;
    min-width: 315px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 38px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-top: 0px;
  }
`;

export const Text = styled.p`
  margin: 24px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin: 15px;
  }
`;

export const Button = styled(Link)`
  padding: 16px 24px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: 0.4s;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    padding: 12px 20px;
    line-height: 15px;
  }

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(150%);
  }
`;
