import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  BookTitle,
  BookYear,
  NoPoster,
  Poster,
  StyledTileBook,
  Wrapper,
  StyledNavLink,
  A,
  Wrap,
} from "./styled";
import { TileBooksProps } from "../interfaces";

const TileBook: React.FC<TileBooksProps> = ({
  publishedDate,
  title,
  image,
  authors,
  link,
  poster,
}) => {
  const hideTileBookOnMobile = poster;
  let displayedAuthors: string[];
  if (Array.isArray(authors)) {
    displayedAuthors = authors.slice(0, 3);
  } else if (typeof authors === "string") {
    displayedAuthors = [authors];
  } else {
    displayedAuthors = ["Unknown Author"];
  }
  return (
    <Wrapper>
      <StyledTileBook hideOnMobile={hideTileBookOnMobile}>
        {!image.thumbnail || !image.thumbnail ? (
          <NoPoster style={{ display: poster ? "none" : "block" }} />
        ) : (
          <Poster
            src={`${image.thumbnail}`}
            style={{ display: poster ? "none" : "block" }}
          />
        )}
        <BookTitle>
          <Wrap>
            <Tooltip title="External link !">
              <A href={link.infoLink}>{title}</A>
            </Tooltip>
          </Wrap>
        </BookTitle>
        <BookYear>{publishedDate}</BookYear>
        {displayedAuthors.map((author, index) => (
          <StyledNavLink key={index} to={`/home/table/${author.toString()}`}>
            {author}
          </StyledNavLink>
        ))}
      </StyledTileBook>
    </Wrapper>
  );
};

export default TileBook;
