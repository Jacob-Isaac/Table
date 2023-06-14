import { createSlice } from "@reduxjs/toolkit";
import { BookState } from "../../common/interfaces";

const bookSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList: [ {
      id: "1",
      description: "default content 1",
      author: "",
      title: "",
      kind: "",
      publishedDate: 0,
      language: "",
      image: "",
      publisher: "",
    },
    {
      id: "2",
      description: "default content 2",
      author: "",
      title: "",
      kind: "",
      publishedDate: 0,
      language: "",
      image: "",
      publisher: "",
    },],
    arrayType: "",
  } as BookState,

  reducers: {
    initialAction: (state) => {
      console.log(state.bookList);
    },
  },
});

export const {
  initialAction,
} = bookSlice.actions;

export const selectBooks = (state: { bookList: BookState }) => state.bookList.bookList;
export const arrayType = "";
export default bookSlice.reducer;

