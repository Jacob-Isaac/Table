import { createSlice } from "@reduxjs/toolkit";
import { BookState } from "../../common/interfaces";

const bookSlice = createSlice({
  name: "bookList",
  initialState: {
    bookList: [ {
      id: "1",
      content: "default content 1",
    },
    {
      id: "2",
      content: "default content 2",
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

