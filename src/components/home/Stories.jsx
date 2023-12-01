import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setCloseStr } from '../../reducers/Home/Home';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function StoryModal({open,children,child}) {

    const dispatch=useDispatch()
  return (
   <div>
     <Dialog open={open} sx={{color:"transparent"}}>
    <button className="absolute top-[0px] text-[red] left-[550px]"
    autoFocus onClick={()=>dispatch(setCloseStr())}>
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
       <div className='w-[100%] h-[90vh]'>
      
        <DialogContent 
        sx={{width:"100%"}}>
          {children}
          
        </DialogContent>
       </div>
      </Dialog>
   </div>
  );
}