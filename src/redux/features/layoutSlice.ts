import {createSlice} from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    navbarHeight: 0,
    sidebarWidth: 0,
    rightSidebarWidth: 0
  },
  reducers: {
    setNavbarHeight: (state, action: {type: string, payload: number}) => {
      state.navbarHeight = action.payload
    },
    setSidebarWidth: (state, action: {type: string, payload: number}) => {
      state.sidebarWidth = action.payload
    },
    setRightSidebarWidth: (state, action: {type: string, payload: number}) => {
      state.rightSidebarWidth = action.payload
    }
  }
});

export const layoutReducer = layoutSlice.reducer;

export const {
  setNavbarHeight,
  setSidebarWidth,
  setRightSidebarWidth
} = layoutSlice.actions;