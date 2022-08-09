import {configureStore} from "@reduxjs/toolkit";
import {layoutReducer} from "./features/layoutSlice";
import {drawerReducer} from "./features/drawerSlice";
import {Modes, themeReducer} from "./features/themeSlice";

export interface LayoutState {
  layout: {
    navbarHeight: number;
    sidebarWidth: number;
  },
}

export interface ThemeState {
  theme: {
    mode: Modes
  }
}

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    drawer: drawerReducer,
    theme: themeReducer
  }
});