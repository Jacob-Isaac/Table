import axios from "axios";

export const getPopularMovies = () => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=40`
    )
    .then((response) => response.data);
};
export const getAuthorDetails = (authors: any) => {
  const getAuthorDetails = axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authors}%22`
    )

    .then((response) => response.data);

  return getAuthorDetails;
};

// https://www.googleapis.com/books/v1/volumes?q=inauthor:%22%22    // authors page
// https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=40 // books page

// export const getAuthorDetails = (authors: string) => {
//    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:%22${authors}%22`)

//    .then(response => response.data);
// };
