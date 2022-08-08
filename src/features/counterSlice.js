import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    isLogin: false,
    userId: null,
  },
  reducers: {
    logIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogin = true;
    },
    logOut: state => {
      state.isLogin = false;
    },
  }
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = counterSlice.actions

export default counterSlice.reducer