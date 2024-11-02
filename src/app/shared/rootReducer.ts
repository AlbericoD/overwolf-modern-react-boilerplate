import { combineReducers } from "@reduxjs/toolkit";
import background from "screens/background/stores/background";

const rootReducer = combineReducers({
  background,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;
