import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 94px;
  width: 100%;
  min-width: 320px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    height: 152px;
  }
`;

export const NavigationList = styled.ul`
  display: grid;
  padding: 21px 11px;
  grid-template-columns: auto auto auto 1fr;
  list-style-type: none;
  max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px;
  @media (min-width: 1040px) {
    grid-gap: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    grid-gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    grid-gap: 6px;
    padding: 32px 12px;
  }
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
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 8px 24px;
  height: 48px;
  margin-top: 2px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 0px 14px;
    height: 34px;
    margin-top: -1px;
  }
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      border-radius: 24px;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    display: none;
  }
`;

export const NavigationLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.medium};
  font-size: 23px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 7px;
  margin-left: 150px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 8px;
    height: 17px;
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 0px;
  }
`;

export const NavigationSearcher = styled.div`
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin: 0 auto;
    font-size: 20px;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

export const NavigationLogoLink = styled(NavLink)`
  text-decoration: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 50px;
  }
`;
