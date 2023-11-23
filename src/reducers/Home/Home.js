import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../api/home/home";

const home=createSlice({
    name:"home",
    initialState: {
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(get.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(get.fulfilled,(state,action)  =>{
            state.loading = false
            console.log(action.payload)
            state.data=action.payload
        }),
        builder.addCase(get.rejected,(state,action)  =>{
            state.loading = true
        })
    }
})
export default home.reducer