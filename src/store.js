import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";
import uiReducer from "./features/ui/uiSlice";

export const store = configureStore({
  // Reducer
  // If this is a single function, it will be directly used as the root reducer for the store.

  // If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux combineReducers utility.

  // A single reducer function that will be used as the root reducer, or an
  // object of slice reducers that will be passed to `combineReducers()`.
  reducer: {
    // By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    tasks: taskReducer,
    ui: uiReducer,
  },
});
