import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreateTaskDialog: false,
  openSuccessDialog: false,
  isViewTaskModalOpen: false,
  isEditTaskModalOpen: false,
  viewTask: null,
  editTask: null,
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

    // Edit task Modal
    setEditTask: (state, action) => {
      state.editTask = action.payload;
    },
    clearEditTaskModal: (state) => {
      state.editTask = null;
    },
    openEditTaskModal: (state) => {
      state.isEditTaskModalOpen = true;
    },
    closeEditTaskModal: (state) => {
      state.isEditTaskModalOpen = false;
      state.editTask = null;
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
  setEditTask,
  clearEditTaskModal,
  openEditTaskModal,
  closeEditTaskModal,
} = uiSlice.actions;

export default uiSlice.reducer;
