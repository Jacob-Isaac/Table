import axios from "axios";

export const getPopularBooks = () => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=40`
    )
    .then((response) => response.data);
};
export const getAuthorDetails = (authors: string) => {
  const getAuthorDetails = axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authors}%22`
    )

    .then((response) => response.data);

  return getAuthorDetails;
};
