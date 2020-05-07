import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from '../features/issueDisplay/issuesDisplaySlice'
import repoDetailReducer from '../features/repoSearch/repoDetailsSlice'
import issuesReducer from '../features/issuesList/issuesSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailReducer,
  issues: issuesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;