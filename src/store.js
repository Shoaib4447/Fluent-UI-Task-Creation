import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/tasks/taskSlice';
import uiReducer from './features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    tasks:taskReducer,
    ui:uiReducer,
  },
});