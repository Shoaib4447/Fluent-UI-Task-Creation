import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCreateTaskDialog: false,
  openSuccessDialog: false,
  isViewTaskModalOpen: false,
  isEditTaskModalOpen: false,
  isDeleteTaskModalOpen: false,
  viewTask: null,
  editTask: null,
  deleteTask: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Create Task Dialog
    openCreateTaskDialog: (state) => {
      state.openCreateTaskDialog = true;
    },
    closeCreateTaskDialog: (state) => {
      state.openCreateTaskDialog = false;
    },
    // Success Task Dialog
    openSuccessDialog: (state) => {
      state.openSuccessDialog = true;
    },
    closeSuccessDialog: (state) => {
      state.openSuccessDialog = false;
    },

    // Veiw Task Dialog
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

    // Edit Task Dialog
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

    // Delete Task Dialog
    setDeleteTask: (state, action) => {
      state.deleteTask = action.payload;
    },
    openDeleteTaskModal: (state) => {
      state.isDeleteTaskModalOpen = true;
    },
    closeDeleteTaskModal: (state) => {
      state.isDeleteTaskModalOpen = false;
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
  setDeleteTask,
  openDeleteTaskModal,
  closeDeleteTaskModal,
} = uiSlice.actions;

export default uiSlice.reducer;
