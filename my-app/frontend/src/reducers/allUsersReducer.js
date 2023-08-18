import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiServerUrl } from '../config'

const baseUrl = apiServerUrl + '/api/users'

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: [],
  reducers: {
    setAllUsers(state, action) {
      return action.payload
    },
  },
})

export const initiateAllUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(baseUrl)
    dispatch(setAllUsers(response.data))
  }
}

export default allUsersSlice.reducer

export const { setAllUsers } = allUsersSlice.actions

