import { createSlice } from "@reduxjs/toolkit";
import { get,users,story,addStories } from "../../api/home/home";

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
        strImg:[],
        openAddStr:false,
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
        setOpenStor:(state,action)=>{
            console.log(action.payload.stories
                );
            state.openstr=true
            state.openStor=action.payload.stories

            // state.strImg=action.payload
        },
        setCloseCom:(state,action)=>{
            state.openCom=false
        },
        setCloseStr:(state,action)=>{
            state.openstr=false
        },
        setOpenAddStr:(state,action)=>{
            state.openAddStr=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(get.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(get.fulfilled,(state,action)  =>{
            
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
            
            state.user=action.payload
        }),
        builder.addCase(users.rejected,(state,action)  =>{
            state.loading = true
        })

        builder.addCase(story.pending,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(story.fulfilled,(state,action)  =>{
            
            state.stories=action.payload
        }),
        builder.addCase(story.rejected,(state,action)  =>{
            state.loading = true
        }),
        builder.addCase(addStories.fulfilled,(state,action)  =>{
            state.openAddStr=false
        })
    }
})
export default home.reducer
export const {handelChange,setOpen,setOpenCom,setCloseCom,setCloseStr,setOpenStor,setOpenAddStr}=home.actions