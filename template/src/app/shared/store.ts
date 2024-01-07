import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import { isDev } from "lib/utils";

const reduxStore = configureStore({
  reducer,
  devTools: true,
});

declare global {
  interface Window {
    reduxStore: typeof reduxStore;
  }
}

window.reduxStore = reduxStore;

const { reduxStore: store } = isDev
  ? { reduxStore }
  : overwolf.windows.getMainWindow();

export type AppDispatch = typeof store.dispatch;
export default store;
