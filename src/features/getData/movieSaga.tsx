import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies, getAuthorDetails } from "./getData";
import {
  fetchRandomBooks,
  setBookList,
  setAuthorDetails,
  setError,
  fetchAuthorDetails,
} from "../tableComponent/slice";

export function* fetchRandomBooksWorker({
  payload: pageNumber,
}: ReturnType<typeof fetchRandomBooks>): Generator<any, void, unknown> {
  try {
    yield delay(700);
    const popularMovies = yield call(getPopularMovies);
    yield put(setBookList(popularMovies));
  } catch (error) {
    yield put(setError());
  }
}

export function* fetchAuthorDetailsWorker({
  payload: authors,
}: ReturnType<typeof fetchAuthorDetails>): Generator<any, void, unknown> {
  try {
    if (typeof authors !== "undefined") {
      yield delay(700);
      const authorName = yield call(getAuthorDetails, authors);
      yield put(setAuthorDetails(authorName));
    }
  } catch (error) {
    yield put(setError());
  }
}

export function* movieSaga(): Generator<any, void, unknown> {
  yield takeLatest(fetchRandomBooks.type, fetchRandomBooksWorker);
  yield takeLatest(fetchAuthorDetails.type, fetchAuthorDetailsWorker);
}
