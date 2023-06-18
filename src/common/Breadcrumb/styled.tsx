import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBackground = styled.div`
  background-color: black;
  height: 34px;
  width: 100%;
  min-width: 320px;
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  margin-left: 100px;
  display: flex;
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
  align-items: center;
  gap: 10px;
  padding: 2px 24px;
  height: 80%;
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
  margin-right: 50px;
`;

export const NavigationSearcher = styled.div`
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  margin-left: auto;
`;

export const NavigationLogoLink = styled(NavLink)`
  text-decoration: none;
`;
