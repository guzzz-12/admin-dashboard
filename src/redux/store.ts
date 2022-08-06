import {configureStore} from "@reduxjs/toolkit";
import {layoutReducer} from "./features/layoutSlice";
import {drawerReducer} from "./features/drawerSlice";

export interface LayoutState {
  layout: {
    navbarHeight: number;
    sidebarWidth: number;
  },
}

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    drawer: drawerReducer
  }
});