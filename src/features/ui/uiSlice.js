import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreateTaskDialog: false,
  openSuccessDialog: false,
  isViewTaskModalOpen: false,
  viewTask: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCreateTaskDialog: (state) => {
      state.openCreateTaskDialog = true;
    },
    closeCreateTaskDialog: (state) => {
      state.openCreateTaskDialog = false;
    },
    openSuccessDialog: (state) => {
      state.openSuccessDialog = true;
    },
    closeSuccessDialog: (state) => {
      state.openSuccessDialog = false;
    },

    // View Modal
    setViewTask: (state, action) => {
      console.log("action =>", action.payload);

      state.viewTask = action.payload;
    },
    clearViewTask: (state) => {
      state.viewTask = null;
    },
    openViewTaskModal: (state) => {
      state.isViewTaskModalOpen = true;
    },
    closeViewTaskModal: (state) => {
      state.isViewTaskModalOpen = false;
      state.viewTask = null;
    },
  },
});

export const {
  openCreateTaskDialog,
  closeCreateTaskDialog,
  openSuccessDialog,
  closeSuccessDialog,
  setViewTask,
  clearViewTask,
  openViewTaskModal,
  closeViewTaskModal,
} = uiSlice.actions;

export default uiSlice.reducer;
