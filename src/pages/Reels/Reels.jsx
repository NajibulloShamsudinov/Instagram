import React, { useState, useEffect } from "react";
//modal-dialog
import ScrollDialog from "../../components/reelsComp/Reelss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//mui-r
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "60%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #001",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
  border: "none",

};


import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import myVideo from "";

import vid from "../../assets/video/i.mp4";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../api/reels/Reels";
import { blue } from "@mui/material/colors";
// import { handlModal } from "../../reducers/reels/Reelse";
// import { handlModal1 } from "../../reducers/reels/Reelse";

const Reels = () => {
   const [open1, setOpen1] = React.useState(false);
   const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);

  // Modal
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const posts = useSelector((store) => store.reels.posts);
  let load = useSelector((store) => store.reels.loading);
  console.log(load);
  // const modal = useSelector((store) => store.post.modal);
  // console.log(posts);

  const dispatch = useDispatch();

  const PostImagesApi = "http://65.108.148.136:8085/";

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="mt-14 flex flex-col gap-14  px-[30%]">
      <div className="flex items-end gap-9">
        <video
          className="rounded-md"
          loopz
          autoPlay
          src={vid}
          width="350"
          height="100"
          // controls
          
        ></video>
        <div className=" rounded-[20px]">
          <div className=" rounded-[20px]">
            {/* <Button onClick={handleOpen1}>Open modal</Button> */}
            <Modal
              sx={{boxShadow:"20px", borderRadius:"60px"}}
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} >
                <div className="flex flex-col gap-5">
                  <p className="text-[red]">Пожаловаться</p>
                  <p className="text-[blue]">Подписаться</p>
                  <p>Перейти к публикации</p>
                  <p>Поделиться...</p>
                  <p>Копировать сылку</p>
                  <p>Всавить на сайт</p>
                  <p>Об аккаунте</p>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="flex justify-end">
          <React.Fragment>
            {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button> */}
            <Dialog
              sx={{ width: "25%", height: "50%", left: "73%", top: "12%" }}
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <div className="flex ">
                <DialogActions>
                  <Button onClick={handleClose}>X</Button>
                </DialogActions>
                <DialogTitle className="text-center" id="scroll-dialog-title">
                  Коментарии
                </DialogTitle>
              </div>

              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  {[...new Array(50)]
                    .map(
                      () => `Cras mattis consectetur purus sit amet fermentum.
                      consectetur et.`
                    )
                    .join("\n")}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <input
                  placeholder="Добавьте коментарий..."
                  type="text"
                  className="border-[grey] border-[1px] w-[90%] rounded-[30px] px-14 mx-5 p-1"
                />
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </div>

        <div className="w-[25px] gap-4 flex flex-col ">
          <div>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </div>
          <img
            // onClick={() => dispatch(handlModal(true))}
            onClick={() => dispatch(handleClickOpen())}
            src="https://avatars.mds.yandex.net/i?id=1c9bccd92e8acb867f42323f1b05325a10b7b6f4-8310741-images-thumbs&n=13"
            alt=""
          />
          <img
            src="https://avatars.mds.yandex.net/i?id=466f5c1b4e0eac0590a9495572dec7d07511cd00-8496372-images-thumbs&n=13"
            alt=""
          />
          <img
            src="https://avatars.mds.yandex.net/i?id=d2c39401eea2adf8925431b1f0259ab4d450a35e-6977815-images-thumbs&n=13"
            alt=""
          />
          <img
            onClick={() => dispatch(handleOpen1())}
            src="https://avatars.mds.yandex.net/i?id=9c91286523dcff54b5d42732c2861671c282cc9c-4836432-images-thumbs&n=13"
            alt=""
          />
        </div>
      </div>
      

      <div>
        {posts.map((elem) => {
          return (
            <div>
              <img src={`${PostImagesApi}/${elem}`} alt="" />
              <video src={vid} width="350" height="100" controls></video>
            </div>
          );
        })}

        {/* {modal ? (
          <div>
            <input type="text" placeholder="qqq" className="bg-[blue]" />
            <button onClick={() => dispatch(handlModal1())}>x</button>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default Reels;
