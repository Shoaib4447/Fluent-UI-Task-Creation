import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    openCreateTaskDialog:false,
    openSuccessDialog:false,
};

const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        openCreateTaskDialog:(state)=>{
            state.openCreateTaskDialog = true;
        },
        closeCreateTaskDialog:(state)=>{
            state.openCreateTaskDialog = false;
        },
        openSuccessDialog:(state)=>{
            state.openSuccessDialog = true;
        },
        closeSuccessDialog:(state)=>{
            state.openSuccessDialog = false;
        },
}})

export const {openCreateTaskDialog,closeCreateTaskDialog,openSuccessDialog,closeSuccessDialog} = uiSlice.actions;

export default uiSlice.reducer;
