import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks:[],
};

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload);
        },
}})

export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;