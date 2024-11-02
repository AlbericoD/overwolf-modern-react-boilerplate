import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/remote";
import reducer from "./rootReducer";
import { isDev } from "lib/utils";

const reduxStore = configureStore({
  reducer,
  devTools: false,
  enhancers: (getDefaultEnchancers) =>
    getDefaultEnchancers().concat(devToolsEnhancer({ port: 8081 })),
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
