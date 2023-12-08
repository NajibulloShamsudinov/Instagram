import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalSetings from "../../components/home/ModalSetings";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { setOpenAddStr } from "../../reducers/Home/Home";
import { addStories } from "../../api/home/home";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export const AddStr = () => {

    const openStor=useSelector(({home})=>home.openStor)
    const openAddStr=useSelector(({home})=>home.openAddStr)
    const dispatch=useDispatch()

    const [img,setImg]=useState(null)
    

   const handelChange=async(e)=>{
        setImg(e.target.files[0])
    }

   const handelSubmit=()=>{
        let form=new FormData()

        form.append("photo",img)
        // form.append("id",openStor.postId)

        dispatch(addStories(form))
    }

  return (
    <div>
      <Modal open={openAddStr}>
        <Box sx={style}>
          <h1 className="text-[30px]">Add Story</h1>
          <br />
          <input type="file" onChange={handelChange} /> <br />
          <img src={img} alt="" />
          <div className="flex gap-[10px] mt-[50px]">
            <Button
              onClick={() => {
                handelSubmit(), setOpenAddStr(false);
              }}
            >
              POST
            </Button>
            <Button onClick={() => dispatch(setOpenAddStr(false))}>
              close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
