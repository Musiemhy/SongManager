import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./authRedux/authSlice";
import { watchAuth } from "./authRedux/authSaga";
import songReducer from "./songRedux/songSlice";
import { watchSongs } from "./songRedux/songSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchSongs);

export default store;
