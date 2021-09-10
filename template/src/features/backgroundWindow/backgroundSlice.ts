import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OverwolfEventPayload {
  event: HeathstoneOverwolfGEP.Event[]
}
interface OverwolfInfoPayload {
  info: HeathstoneOverwolfGEP.Info
}
interface BackgroundState {
  event: HeathstoneOverwolfGEP.Event[]
  info: HeathstoneOverwolfGEP.Info

  events: HeathstoneOverwolfGEP.Event[][]
  infos: HeathstoneOverwolfGEP.Info[]
}

const initialState: BackgroundState = {
  event: [],
  info: {},
  events: [],
  infos: [],
}

const backgroundWindowSlice = createSlice({
  name: 'backgroundWindow',
  initialState,
  reducers: {
    setEvent(state, action: PayloadAction<OverwolfEventPayload>) {
      const { event } = action.payload
      state.event = event
      state.events.push(event)
    },
    setInfo(state, action: PayloadAction<OverwolfInfoPayload>) {
      const { info } = action.payload
      state.info = info
      state.infos.push(info)
    },
  },
})

export const { setEvent, setInfo } = backgroundWindowSlice.actions

export default backgroundWindowSlice.reducer
