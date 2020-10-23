import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: false,
  enhancers: [
    devToolsEnhancer({
      realtime: true,
      name: "Overwolf ",
      hostname: "localhost",
      port: 8000
    })
  ]
});

(window as any).reduxStore = reduxStore;
const store = overwolf.windows.getMainWindow().reduxStore;
export type AppDispatch = typeof store.dispatch;
export default store;
