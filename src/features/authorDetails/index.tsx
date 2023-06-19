import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAuthorDetails,
  selectAuthorDetails,
} from "../tableComponent/slice";
import { DataRow } from "../../common/interfaces";
import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {
  BookTitle,
  BookYear,
  StyledTileBook,
  Wrapper,
  RatingSection,
  A,
} from "./styled";

const AuthorDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { author } = useParams<{ author?: string }>();
  const currentAuthor = author;
  const authorDetails = useSelector(selectAuthorDetails);

  useEffect(() => {
    if (currentAuthor) {
      dispatch(fetchAuthorDetails(currentAuthor));
    }
  }, [currentAuthor, dispatch]);

  console.log(authorDetails);

  return (
    <>
      {authorDetails.map((item: DataRow) => (
        <Wrapper>
          <StyledTileBook>
            <BookTitle>
              <Tooltip title="External link !" arrow>
                <Button>
                  <A href={item.volumeInfo.infoLink}>{item.volumeInfo.title}</A>
                </Button>
              </Tooltip>
            </BookTitle>
            <BookYear>{item.volumeInfo.publishedDate}</BookYear>
            <RatingSection></RatingSection>
          </StyledTileBook>
        </Wrapper>
      ))}
    </>
  );
};

export default AuthorDetails;
