import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongsRequest,
  addSongsSuccess,
  addSongsFailure,
  updateSongsRequest,
  updateSongsSuccess,
  updateSongsFailure,
  deleteSongsRequest,
  deleteSongsSuccess,
  deleteSongsFailure,
} from "./songSlice";

function* fetchSongs(action) {
  try {
    const apiGetSongUrl = import.meta.env.VITE_API_GET_ALL_SONG;
    const response = yield call(axios.post, apiGetSongUrl, action.payload);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongs(action) {
  try {
    const apiAddSongUrl = import.meta.env.VITE_API_ADD_SONG;
    const response = yield call(axios.post, apiAddSongUrl, action.payload);

    const newSong = response.data.newSong;

    yield put(addSongsSuccess(newSong));
  } catch (error) {
    yield put(addSongsFailure(error.message));
  }
}

function* updateSongs(action) {
  try {
    const apiUpdateSongUrl = import.meta.env.VITE_API_UPDATE_SONG;
    const response = yield call(axios.put, apiUpdateSongUrl, action.payload);
    yield put(updateSongsSuccess(response.data));
  } catch (error) {
    yield put(updateSongsFailure(error.message));
  }
}

function* deleteSongs(action) {
  try {
    const apiDeleteSongUrl = import.meta.env.VITE_API_DELETE_SONG;

    const response = yield call(axios.delete, apiDeleteSongUrl, {
      data: action.payload,
    });

    yield put(deleteSongsSuccess(response.data));
  } catch (error) {
    yield put(deleteSongsFailure(error.message));
  }
}

export function* watchSongs() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
  yield takeLatest(addSongsRequest.type, addSongs);
  yield takeLatest(updateSongsRequest.type, updateSongs);
  yield takeLatest(deleteSongsRequest.type, deleteSongs);
}
