import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";

const store = configureStore({
  reducer: {
    sideBar: sidebarReducer,
  },
});

export default store;
