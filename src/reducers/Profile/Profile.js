import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../../api/profile/profile";
import { getPostById } from "../../api/profile/profile";


const profile = createSlice({
    name:"profile",
    initialState:{
        data:[],
        postData:[],
    },
    reducers :{
        handleChange:(state,action)=>{
            state[data.payload.type] = action.payload.setType 
        }
    },
    extraReducers:(builder) => {

        builder.addCase(getProfile.pending,(state,action) =>{
            state.loading = true
        });
        builder.addCase(getProfile.fulfilled,(state,action) =>{
            state.data = action.payload
        });
        builder.addCase(getProfile.rejected,(state,action) =>{
            state.loading.false
        });



        builder.addCase(getPostById.pending,(state,action) =>{
            state.loading = true
        });
        builder.addCase(getPostById.fulfilled,(state,action) =>{
            state.postData = action.payload
        });
        builder.addCase(getPostById.rejected,(state,action) =>{
            state.loading=false
        });
    }

})  




export default profile.reducer