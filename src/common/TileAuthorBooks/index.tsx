import React from 'react';
import {
  BookTitle,
  BookYear,
  NoPoster,
  Poster,
  StyledTileBook,
  Wrapper,
  RatingSection,
  StyledNavLink,
} from './styled';

interface TileBooksProps {
  publishedDate: number;
  title: string;
  // image: string | null;
  authors: string[] | string | null;
  image: {
    thumbnail: string;
  };
}

const TileAuthorBooks: React.FC<TileBooksProps> = ({
  publishedDate,
  title,
  image,
  authors,
}) => {
  return (
    <Wrapper>
      <StyledTileBook>
        {!image.thumbnail || !image.thumbnail ? (
          <NoPoster></NoPoster>
        ) : (
          <Poster src={`${image.thumbnail}`} />
        )}
        <BookTitle>{title}</BookTitle>
        <BookYear>{publishedDate}</BookYear>
        {authors && Array.isArray(authors) ? (
          authors.map((author, index) => (
            <StyledNavLink
              key={index}
              to={`/personDetails/${author.toString()}`}
            >
              {author}
            </StyledNavLink>
          ))
        ) : (
          <StyledNavLink to={`/personDetails/unknown`}>
            Unknown Author
          </StyledNavLink>
        )}
        <RatingSection></RatingSection>
      </StyledTileBook>
    </Wrapper>
  );
};

export default TileAuthorBooks;