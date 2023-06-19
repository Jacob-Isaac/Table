import { createSlice } from "@reduxjs/toolkit";
import { BookState } from "../../common/interfaces";

const bookSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList: [],
    favoritesList: [],
    authorDetails: [],
    arrayType: "",
    isLoading: "",
  } as BookState,

  reducers: {
    initialAction: (state) => {
      console.log(state.bookList);
    },
    fetchRandomBooks: (state) => {
      state.isLoading = "loading";
    },
    fetchFavoritesBooks: (state, {payload: selectedRows}) => {
    
      state.favoritesList = selectedRows;
      console.log(state.favoritesList);
    
    },
    fetchAuthorDetails: (state, { payload: author }) => {
      state.isLoading = "loading";
    },
    setBookList: (state, { payload: movies }) => {
      state.bookList = movies.items;
      state.isLoading = "success";
      console.log(state.bookList[0].volumeInfo.description);
    },
    setAuthorDetails: (state, { payload: authorDetails }) => {
      state.authorDetails = authorDetails.items;
      state.isLoading = "success";
      console.log(state.authorDetails);
    },
    setError: (state) => {
      state.isLoading = "error";
    },
    setfavoritesList: (state, { payload: selectedRows }) => {
      state.favoritesList = selectedRows;
      console.log(state.favoritesList);
    },
  },
});

export const {
  initialAction,
  fetchRandomBooks,
  fetchAuthorDetails,
  setBookList,
  setError,
  setAuthorDetails,
  fetchFavoritesBooks,
  setfavoritesList
} = bookSlice.actions;

export const selectBooks = (state: { bookList: BookState }) =>
  state.bookList.bookList;
export const selectAuthorDetails = (state: { bookList: BookState }) =>
  state.bookList.authorDetails;
  export const selectFavorites = (state: { bookList: BookState }) =>
  state.bookList.favoritesList;
export const arrayType = "";
export default bookSlice.reducer;
