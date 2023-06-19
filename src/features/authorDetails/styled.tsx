import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const A = styled.a`
  color: black; /* Set the baseline color you desire */
  text-decoration: none; /* Remove the underline */
  text-transform: lowercase; /* Convert the text to lowercase */
  &::first-letter {
  text-transform: uppercase; /* Capitalize the first letter */
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
`;
export const Wrapper = styled.section`
margin-left: 150px;
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  margin-left: 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTileBook = styled.section`
  display: grid;
  grid-template-rows: repeat(4, min-content) 1fr;
  grid-template-areas:
    "poster"
    "title"
    "year"
    "tags"
    "whiteSpace"
    "rating";
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
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    margin: 0 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
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
