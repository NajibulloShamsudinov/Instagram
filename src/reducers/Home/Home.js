import { createSlice } from "@reduxjs/toolkit";
import { get,users,story } from "../../api/home/home";

const home=createSlice({
    name:"home",
    initialState: {
        data:[],
        user:[],
        stories:[],
        loading:true,
        open:false,
        openCom:false,
        openstr:false,
        comEl:[],
        com:"",
        text:"",
        name:"",
        comments:[],
        img:null,
        openStor:[],
        strImg:null
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
            state.comEl=action.payload
            state.name=action.payload.title
            state.img=action.payload.images[0],
            state.comments=action.payload.comments
        },
        openStor:(state,action)=>{
            state.openstr=true
            // state.openStor=action.payload
            state.strImg=action.payload.fileName
        },
        setCloseCom:(state,action)=>{
            state.openCom=false
        },
        setCloseStr:(state,action)=>{
            state.openstr=false
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
            state.user=action.payload
        }),
        builder.addCase(users.rejected,(state,action)  =>{
            state.loading = true
        })

        builder.addCase(story.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(story.fulfilled,(state,action)  =>{
            state.loading = false
            state.stories=action.payload
        }),
        builder.addCase(story.rejected,(state,action)  =>{
            state.loading = true
        })
    }
})
export default home.reducer
export const {handelChange,setOpen,setOpenCom,setCloseCom,setCloseStr,openStor}=home.actions