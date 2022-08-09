import {createSlice} from "@reduxjs/toolkit";

export type Modes = "light" | "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: {mode: "light"},
  reducers: {
    changeTheme: (state, action: {type: string, payload: Modes}) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    }
  }
});

export const themeReducer = themeSlice.reducer;
export const {changeTheme} = themeSlice.actions;