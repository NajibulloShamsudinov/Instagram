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
  console.log(story);
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

  // const storyline=story && story.map((e)=>{
  //   return ( 
  //     <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.fileName}`} alt="" />
  //   )
  // })
  //       user.map((el)=>{
  //         return e.userId==el.id?():null
  //       })  
  // })
  const storyline=[
    {
      content: () => {
        return (
          <div>
          
                <div>
                  {
                   user.map((el)=>{
                   return story.map((e)=>{
                      return e.userId==el.id?
                      <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.fileName}`} alt="" />
                      :null
                      })
                   })
                  }
                </div>
           
           {/* <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
          className='m-[20px]' alt="error"/> */}
            <div className='absolute top-[94%] left-[2%] flex justify-between w-[94%]'>
              <input type="text" className='bg-transparent w-[300px] ' placeholder='комент' />
              <button ><FavoriteBorderIcon sx={{color:"white",":hover":{
                color:"red"
              }}}/></button>
            </div>
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
{/*   <Box 
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