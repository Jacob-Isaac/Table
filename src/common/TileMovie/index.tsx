import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {
  BookTitle,
  BookYear,
  NoPoster,
  Poster,
  StyledTileBook,
  Wrapper,
  RatingSection,
  StyledNavLink,
  A,
} from './styled';

interface TileBooksProps {
  publishedDate: number;
  title: string;
  // image: string | null;
  authors: string[] | string | null;
  image: {
    thumbnail: string;
  };
  link: {
    infoLink: string;
  };
}

const TileAuthorBooks: React.FC<TileBooksProps> = ({
  publishedDate,
  title,
  image,
  authors,
  link
}) => {
  return (
    <Wrapper>
      <StyledTileBook>
        {!image.thumbnail || !image.thumbnail ? (
          <NoPoster></NoPoster>
        ) : (
          <Poster src={`${image.thumbnail}`} />
        )}
        <BookTitle><Tooltip title="External link !" arrow>
  <Button><A href={link.infoLink}>{title}</A></Button>
</Tooltip></BookTitle>
        <BookYear>{publishedDate}</BookYear>
        {authors && Array.isArray(authors) ? (
          authors.map((author, index) => (
            <StyledNavLink
              key={index}
              to={`/home/table/${author.toString()}`}
            >
              {author}
            </StyledNavLink>
          ))
        ) : (
          <StyledNavLink to={`/home/table/unknown`}>
            Unknown Author
          </StyledNavLink>
        )}
        <RatingSection></RatingSection>
      </StyledTileBook>
    </Wrapper>
  );
};

export default TileAuthorBooks;