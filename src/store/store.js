import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";
import subSidebarReducer from "./SubSidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    subSidebar: subSidebarReducer,
  },
});

export default store;
