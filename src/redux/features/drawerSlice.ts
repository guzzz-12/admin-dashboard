import {createSlice} from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {openDrawer: false},
  reducers: {
    setOpenDrawer: (state, action: {type: string, payload: boolean}) => {
      state.openDrawer = action.payload
    }
  }
});

export const drawerReducer = drawerSlice.reducer;
export const {setOpenDrawer} = drawerSlice.actions;