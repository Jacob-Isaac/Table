import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice";

const store = configureStore({
  reducer: {
    bookList: bookReducer,
  },
});

export default store;
