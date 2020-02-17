import { combineReducers } from "@reduxjs/toolkit";
// import inGameWindowReducer from "features/inGameWindow/inGameWindowSlice";
// import overlayOptionsReducer from "features/overlayOptions/overlayOptionsSlice";

const rootReducer = combineReducers({
  options: overlayOptionsReducer,
  gameData: inGameWindowReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
