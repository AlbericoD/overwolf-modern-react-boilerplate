import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OverwolfEventPayload {
  event: GameExample.Event[];
}
interface OverwolfInfoPayload {
  info: GameExample.Info;
}
interface BackgroundState {
  event: GameExample.Event[];
  info: GameExample.Info;
}

let initialState: BackgroundState = {
  event: [],
  info: {}
};

const backgroundWindowSlice = createSlice({
  name: "backgroundWindow",
  initialState,
  reducers: {
    setEvent(state, action: PayloadAction<OverwolfEventPayload>) {
      const { event } = action.payload;
      state.event = event;
    },
    setInfo(state, action: PayloadAction<OverwolfInfoPayload>) {
      const { info } = action.payload;
      state.info = info;
    }
  }
});

export const { setEvent, setInfo } = backgroundWindowSlice.actions;

export default backgroundWindowSlice.reducer;
