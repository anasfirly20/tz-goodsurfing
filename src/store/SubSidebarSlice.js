import { createSlice } from "@reduxjs/toolkit";

export const SubSidebarSlice = createSlice({
  name: "SubSidebar",
  initialState: {
    selectedSubItem: 1,
  },
  reducers: {
    setselectedSubItem(state, action) {
      state.selectedSubItem = action.payload;
    },
  },
});

export const { setselectedSubItem } = SubSidebarSlice.actions;
export default SubSidebarSlice.reducer;
