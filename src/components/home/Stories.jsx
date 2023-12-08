import * as React from 'react';
import Button from '@mui/material/Button';
import Stories from 'react-insta-stories';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setCloseStr } from '../../reducers/Home/Home';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { users } from '../../api/home/home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function StoryModal({open,children,story,user}) {
   
  const dispatch=useDispatch()
  
  const openStor=useSelector(({home})=>home.openStor) 
  
  // const strImg=useSelector(({home})=>home.strImg)
  // console.log(openStor);

  const storyStyle={
    // width: "100%",
    maxwidth:"100%",
    maxheight:"100%",
    
  }
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor:"transparent",
    height: "100vh",
    width: "100%",
    paddingLeft:60,
    paddingY:5,
  };

  const storyline = openStor
  // .filter((e)=>e.fileName!=null)
  .map((e)=>{
    console.log(e);
    return e.fileName==null?"https://i.pinimg.com/originals/80/b5/81/80b5813d8ad81a765ca47ebc59a65ac3.jpg"
    :`${import.meta.env.VITE_APP_FILES_URL}${e?.fileName}`
       
  })
  return (
   <div>
    
     <Modal open={open} sx={style}>
     <div>
     <Stories 
    loop
    stories={storyline}
    defaultInterval={1500}
    width={450}
    height={650}
    sx={storyStyle}
    />
    <button className="absolute top-[0px] text-[red] left-[550px]"
    autoFocus onClick={()=>dispatch(setCloseStr())}>
    <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            left: 350,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon sx={{color:"white"}} />
        </IconButton>
    </button>
     </div>
      </Modal>
   </div>
  );
}