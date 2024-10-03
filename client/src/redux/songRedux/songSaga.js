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
import { toast } from "react-toastify";

function* fetchSongs(action) {
  try {
    const apiGetSongUrl = import.meta.env.VITE_API_GET_ALL_SONG;
    const response = yield call(axios.post, apiGetSongUrl, action.payload);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    yield put(fetchSongsFailure(errorMessage));
    toast.error(`Error fetching songs: ${errorMessage}`);
  }
}

function* addSongs(action) {
  try {
    const apiAddSongUrl = import.meta.env.VITE_API_ADD_SONG;
    const response = yield call(axios.post, apiAddSongUrl, action.payload);
    const newSong = response.data.newSong;
    yield put(addSongsSuccess(newSong));
    toast.success("Song added successfully");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    yield put(addSongsFailure(errorMessage));
    toast.error(`Error adding song: ${errorMessage}`);
  }
}

function* updateSongs(action) {
  try {
    const apiUpdateSongUrl = import.meta.env.VITE_API_UPDATE_SONG;
    const response = yield call(axios.put, apiUpdateSongUrl, action.payload);
    yield put(updateSongsSuccess(response.data));
    toast.success("Song updated successfully");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    yield put(updateSongsFailure(errorMessage));
    toast.error(`Error updating song: ${errorMessage}`);
  }
}

function* deleteSongs(action) {
  try {
    const apiDeleteSongUrl = import.meta.env.VITE_API_DELETE_SONG;
    const response = yield call(axios.delete, apiDeleteSongUrl, {
      data: action.payload,
    });
    yield put(deleteSongsSuccess(response.data));
    toast.success("Song deleted successfully");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    yield put(deleteSongsFailure(errorMessage));
    toast.error(`Error deleting song: ${errorMessage}`);
  }
}

export function* watchSongs() {
  yield takeLatest(fetchSongsRequest.type, fetchSongs);
  yield takeLatest(addSongsRequest.type, addSongs);
  yield takeLatest(updateSongsRequest.type, updateSongs);
  yield takeLatest(deleteSongsRequest.type, deleteSongs);
}
