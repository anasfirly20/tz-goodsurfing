import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    selectedSidebar: 1,
  },
  reducers: {
    setSelectedSidebar(state, action) {
      state.selectedSidebar = action.payload;
    },
  },
});

export const { setSelectedSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
