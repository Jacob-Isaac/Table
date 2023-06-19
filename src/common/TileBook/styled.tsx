import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";


interface StyledTileBookProps {
  hideOnMobile?: boolean;
}
export const A = styled.a`
  color: black; 
  text-decoration: none; 

display: inline-flex;
  align-items: center;
  transition: background-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    background-color: #e7f7ffdc; 
  }
`;
export const Wrap = styled.div`
margin-left:-4px;
padding:4px;
  transition: background-color 0.3s ease;
  border-radius: 10px;
  &:hover {
    background-color: #e7f7ffdc; 
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  a:link,
  a:visited,
  &:active {
    color: ${({ theme }) => theme.colors.white};
  }
  transition: text-decoration 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
`;
export const Wrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTileBook = styled.section<StyledTileBookProps>`
  display: grid;
  grid-template-rows: repeat(4, min-content) 1fr;
  grid-template-areas:
    "poster"
    "title"
    "year"
    "tags"
    "whiteSpace"
    "rating";
    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;

    grid-template-areas:
      "poster title"
      "poster year"
      "poster tags"
      "poster rating"
      "poster whiteSpace";
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    grid-template-areas:
      "poster title"
      "poster year"
      "poster tags"
      "poster rating"
      "poster whiteSpace";
  }
  ${({ hideOnMobile }) => hideOnMobile && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: unset;
      grid-template-columns: unset;
      column-gap: unset;
      grid-template-areas: unset;
    }
  `}
`;
export const Poster = styled.img`
  grid-area: poster;
  max-width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
  grid-area: poster;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.silver};
  aspect-ratio: 2/3;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
`;

export const BookTitle = styled.div`

  grid-area: title;
  display: flex;
  margin: 16px 0 8px;
  font-weight: ${({ theme }) => theme.fontSize.medium};
  line-height: 130%;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 12px;
    margin: 0 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;
export const BookYear = styled.div`
  grid-area: year;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;

export const RatingSection = styled.section`
  grid-area: rating;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-content: flex-start;
    gap: 8px;
    flex: 0;
  }
`;
