import { createSlice } from "@reduxjs/toolkit";


const profile = createSlice({
    name:"profile",
    initialState:{
        data:[],
    },
    reducers :{
        handleChange:(state,action)=>{
            state[data.payload.type] = action.payload.setType 
        }
    }

})  




export default profile.reducer