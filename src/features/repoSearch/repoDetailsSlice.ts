import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RepoDetails, getRepoDetails } from "api/githubAPI"
import { AppThunk } from "app/store"

interface RepoDetailsState {
  openIssueCount: number
  error: string | null
}

const initialState: RepoDetailsState = {
  openIssueCount: -1,
  error: null
}

const repoDetails = createSlice({
  name: 'repoDetails',
  initialState,
  reducers: {
    getRepoDetailsSuccess(state, action: PayloadAction<RepoDetails>) {
      state.openIssueCount = action.payload.open_issues_count
      state.error = null
    },
    getRepoDetailsFailed(state, action: PayloadAction<string>) {
      state.openIssueCount = -1
      state.error = action.payload
    }
  }
})

export const { getRepoDetailsSuccess, getRepoDetailsFailed } = repoDetails.actions

export default repoDetails.reducer

export const fetchIssueCount = (
  org: string,
  repo: string
): AppThunk => async dispatch => {
  let repoDetails
  try {
    repoDetails = await getRepoDetails(org, repo)
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
    return
  }
  dispatch(getRepoDetailsSuccess(repoDetails))
}