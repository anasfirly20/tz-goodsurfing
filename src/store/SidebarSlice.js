import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "selectedSidebar",
  initialState: {
    selected: 0,
  },
  reducers: {
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = sidebarSlice.actions;
export default sidebarSlice.reducer;
