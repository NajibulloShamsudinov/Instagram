import { createSlice } from "@reduxjs/toolkit";
import { getProfile, getUser } from "../../api/profile/profile";
import { getPostById } from "../../api/profile/profile";
import { getSubsciption } from "../../api/profile/profile";


const profile = createSlice({
    name:"profile",
    initialState:{
        data:[],
        postData:[],
        subsciption:[],
        users:[]
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



        builder.addCase(getSubsciption.pending,(state,action) =>{
            state.loading = true
        });
        builder.addCase(getSubsciption.fulfilled,(state,action) =>{
            state.subsciption = action.payload
        });
        builder.addCase(getSubsciption.rejected,(state,action) =>{
            state.loading=false
        });




        builder.addCase(getUser.pending,(state,action) =>{
            state.loading = true
        });
        builder.addCase(getUser.fulfilled,(state,action) =>{
            state.users = action.payload
        });
        builder.addCase(getUser.rejected,(state,action) =>{
            state.loading=false
        });
    }

})  




export default profile.reducer