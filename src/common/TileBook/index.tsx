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
  Wrap,
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
  poster: boolean;
}

const TileBook: React.FC<TileBooksProps> = ({
  publishedDate,
  title,
  image,
  authors,
  link,
  poster
}) => {
  const hideTileBookOnMobile = poster;
  let displayedAuthors: string[];
  if (Array.isArray(authors)) {
    displayedAuthors = authors.slice(0, 3); // Limit authors to three
  } else if (typeof authors === 'string') {
    displayedAuthors = [authors];
  } else {
    displayedAuthors = ['Unknown Author'];
  }
  return (
    <Wrapper>
      <StyledTileBook hideOnMobile={hideTileBookOnMobile}>
      {!image.thumbnail || !image.thumbnail ? (
          <NoPoster style={{ display: poster ? 'none' : 'block' }} />
        ) : (
          <Poster
            src={`${image.thumbnail}`}
            style={{ display: poster ? 'none' : 'block' }}
          />
        )}
        <BookTitle><Wrap><Tooltip title="External link !">
  <A href={link.infoLink}>{title}</A>
</Tooltip></Wrap></BookTitle>
        <BookYear>{publishedDate}</BookYear>
        {displayedAuthors.map((author, index) => (
            <StyledNavLink
              key={index}
              to={`/home/table/${author.toString()}`}
            >
              {author}
            </StyledNavLink>
          ))}
        <RatingSection></RatingSection>
      </StyledTileBook>
    </Wrapper>
  );
};

export default TileBook;