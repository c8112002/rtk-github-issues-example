import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from '../features/issueDisplay/issuesDisplaySlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;