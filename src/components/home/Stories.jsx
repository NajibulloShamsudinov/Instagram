import * as React from 'react';
import Button from '@mui/material/Button';
import Stories from 'react-insta-stories';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setCloseStr } from '../../reducers/Home/Home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { users } from '../../api/home/home';



export default function StoryModal({open,children,story,user}) {
   
  const dispatch=useDispatch()

  const storyStyle={
    // width: "100%",
    maxwidth:"80%",
    maxheight:"100%",
    
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor:"transparent",
    height: "100vh",
    width: "400",
    paddingLeft:16,
    paddingTop:6,
  };

  // const storyline=story && story.map((e)=> `${import.meta.env.VITE_APP_FILES_URL}${e.fileName}`)
  //       user.map((el)=>{
  //         return e.userId==el.id?():null
  //       })  
  // })
  const storyline=[
    {
      content: ({ action, isPaused }) => {
        return (
          <div >
           {
            // user.map((el)=>{
                // story.map((e)=>{
              // return e.userId==el.id?
              // <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.fileName}`} alt="" />
              // :null
              // })
            // }) 
           }
           <img src={
            story.map((e)=> `${import.meta.env.VITE_APP_FILES_URL}${e.fileName}`)
           } alt="" />
            <button className='absolute text-white'>like</button>
          </div>
        );
      }
    },
  ]
  return (
   <div>
    
     <Modal open={open} sx={style}>
     <div>
     <Stories 
    loop
    stories={storyline}
    defaultInterval={1500}
    width={500}
    height={680}
    sx={storyStyle}
    />
    <button className="absolute top-[0px] text-[red] left-[550px]"
    autoFocus onClick={()=>dispatch(setCloseStr())}>
    <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            left: 40,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon sx={{color:"white"}} />
        </IconButton>
    </button>
     </div>
{/*   
        <Box 
        sx={{width:"100%"}}>
          {children}
          
        </Box>
       </div> */}
     
     {/* <div>
     <button className="absolute top-[0px] text-[red] left-[550px]"
     onClick={()=>dispatch(setCloseStr())}>
    <IconButton
          aria-label="close"
        //   sx={{
        //     // position: 'absolute',
        //     right: 1,
        //     top: 8,
        //     color: "black"
        //   }}
        >
          <CloseIcon sx={{color:"black"}} />
        </IconButton>
    </button>
     </div> */}
   
    
      </Modal>
   </div>
  );
}