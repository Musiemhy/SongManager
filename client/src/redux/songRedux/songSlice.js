import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const setLoading = (state) => {
  state.loading = true;
  state.error = null;
};

const setSuccess = (state, action) => {
  state.list = action.payload;
  state.loading = false;
};

const setFailure = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsRequest: setLoading,
    fetchSongsSuccess: setSuccess,
    fetchSongsFailure: setFailure,

    addSongsRequest: setLoading,
    addSongsSuccess: (state, action) => {
      state.list.push(action.payload);
      state.loading = false;
    },

    addSongsFailure: setFailure,

    updateSongsRequest: setLoading,
    updateSongsSuccess: (state, action) => {
      const updatedSong = action.payload;
      state.list = state.list.map((song) =>
        song._id === updatedSong._id ? updatedSong : song
      );
      state.loading = false;
    },
    updateSongsFailure: setFailure,

    deleteSongsRequest: setLoading,
    deleteSongsSuccess: (state, action) => {
      const deletedSongId = action.payload.songId;

      state.list = state.list.filter((song) => song._id !== deletedSongId);
      state.loading = false;
    },

    deleteSongsFailure: setFailure,
  },
});

export const {
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
} = songSlice.actions;

export default songSlice.reducer;
