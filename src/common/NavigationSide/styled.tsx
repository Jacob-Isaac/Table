import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBackground = styled.div`
  margin-top: 100px;
  background-color: black;
  height: 100vh;
  width: 115px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  z-index: 999;
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px;
`;
export const NavigationLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 21px;
  font-weight: ${({ theme }) => theme.fontSize.bold};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: 10px;
  padding: 8px 24px;
  margin-top: 2px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
`;

export const NavigationLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.medium};
  font-size: 23px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 24px 16px;
`;

export const NavigationSearcher = styled.div`
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 24px;
  margin-bottom: 16px;
`;

export const NavigationLogoLink = styled(NavLink)`
  text-decoration: none;
`;
