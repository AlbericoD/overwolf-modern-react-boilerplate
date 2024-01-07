import { combineReducers } from '@reduxjs/toolkit'
import backgroundReducer from 'features/backgroundWindow/backgroundSlice'

const rootReducer = combineReducers({
  background: backgroundReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer
