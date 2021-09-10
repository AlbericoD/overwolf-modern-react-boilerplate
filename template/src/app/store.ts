import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'remote-redux-devtools'

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: false,
  enhancers:
    process.env.NODE_ENV === 'development'
      ? [
          devToolsEnhancer({
            realtime: true,
            name: 'Overwolf ',
            hostname: 'localhost',
            port: 8000,
          }),
        ]
      : [],
})

declare global {
  interface Window {
    reduxStore: typeof reduxStore
  }
}

window.reduxStore = reduxStore

const { reduxStore: store } =
  process.env.NODE_ENV === 'development'
    ? { reduxStore }
    : overwolf.windows.getMainWindow()

export type AppDispatch = typeof store.dispatch
export default store
