import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../../api/profile/profile";


const profile = createSlice({
    name:"profile",
    initialState:{
        data:[],
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
    }

})  




export default profile.reducer