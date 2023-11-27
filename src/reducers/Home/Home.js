import { createSlice } from "@reduxjs/toolkit";
import { get,users } from "../../api/home/home";

const home=createSlice({
    name:"home",
    initialState: {
        data:[],
        user:[],
        open:false,
        openCom:false,
        com:"",
        text:"",
        name:"",
        img:null
    },
    reducers:{
        handelChange:(state,action)=>{
            state[action.payload.type] = action.payload.value
        },
        setOpen:(state,action)=>{
            state.open=action.payload
        },
        setOpenCom:(state,action)=>{
            state.openCom=true
            state.name=action.payload.title
            state.img=action.payload.images[0]
        },
        setCloseCom:(state,action)=>{
            state.openCom=false
        },
    },
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
        builder.addCase(users.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(users.fulfilled,(state,action)  =>{
            state.loading = false
            console.log(action.payload)
            state.user=action.payload
        }),
        builder.addCase(users.rejected,(state,action)  =>{
            state.loading = true
        })
    }
})
export default home.reducer
export const {handelChange,setOpen,setOpenCom,setCloseCom}=home.actions