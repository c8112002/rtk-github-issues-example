import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from '../features/issueDisplay/issuesDisplaySlice'
import repoDetailReducer from '../features/repoSearch/repoDetailsSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;