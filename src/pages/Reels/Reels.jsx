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
//like
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "60%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: "25px",
  // border: "white",
  // borderWidth:"1px"
};

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import myVideo from "";

import vid from "../../assets/video/i.mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  postLike,
  postComment,
  getData1,
} from "../../api/reels/Reels";
import { blue } from "@mui/material/colors";
// import { handlModal } from "../../reducers/reels/Reelse";
// import { handlModal1 } from "../../reducers/reels/Reelse";

const Reels = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [text3, setText3] = useState("");
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

  const handlModal1 = () => {
    setModal2(false);
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
  const users = useSelector((store) => store.reels.users);
  let load = useSelector((store) => store.reels.loading);
  // console.log(posts);
  // const modal2 = useSelector((store) => store.reels.modal2);

  const [modal2, setModal2] = useState(null);

  const modalUs = () => {
    setModal2(true);
    setOpen(false);
  };
  // console.log(posts);

  const dispatch = useDispatch();

  // const PostImagesApi = "http://65.108.148.136:8085/";

  // const [counter, setCounter] = useState(0)
  console.log(users.length);
  useEffect(() => {
    dispatch(getData());
    dispatch(getData1());
  }, [dispatch]);
  return (
    <div className="mt-14 flex flex-col gap-14  px-[30%]">
      <div className="flex items-end gap-4">
        {/* <video
          className="rounded-md"

         
          autoPlay

          loop
       

          src={vid}
          width="350"
          height="100"
          // controls
          muted
          preload=""
        ></video> */}
        <div className=" rounded-[20px]">
          <div className=" rounded-[20px]">
            {/* <Button onClick={handleOpen1}>Open modal</Button> */}
            <Modal
              sx={{ boxShadow: "20px", borderRadius: "60px" }}
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex flex-col gap-5">
                  <p className="text-[red] p-2 hover:bg-[#00000010]">
                    Пожаловаться
                  </p>
                  <p className="text-[blue] hover:bg-[#00000010]">
                    Подписаться
                  </p>
                  <p className="hover:bg-[#00000010] ">Перейти к публикации</p>
                  <p className="hover:bg-[#00000010] ">Поделиться...</p>
                  <p className="hover:bg-[#00000010] ">Копировать сылку</p>
                  <p className="hover:bg-[#00000010] ">Всавить на сайт</p>
                  <p className="hover:bg-[#00000010] ">Об аккаунте</p>
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className="w-[25px] gap-6 flex flex-col ">
          <div className="flex flex-col items-center">
            {" "}
            {/* <Checkbox
              onClick={() => postLike(elem.id)}
              {...label}
              sx={{
                "&.Mui-checked": {
                  color: "red",
                  borderColor: "green",
                },
              }}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            /> */}
            {/* <p>{elem.postLikeCount}</p> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        {posts.map((elem) => {
          return (
            <div key={elem.postId} className="flex items-end ">
              <img
                src={`${import.meta.env.VITE_APP_FILES_URL}${elem.images[0]}`}
                alt=""
              />
              <video
                className="rounded-md"
                src={vid}
                width="400"
                loop
                controls
                muted
                autoPlay
              ></video>

              <div className="flex flex-col ml-8 items-center gap-3">
                <div className="flex flex-col items-center">
                  {elem.postLike ? (
                    <FavoriteIcon
                      color="error"
                      // sx={{ backgroundImage: "red" }}
                      onClick={() => dispatch(postLike(elem.postId))}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={() => dispatch(postLike(elem.postId))}
                    />
                  )}

                  <p>{elem.postLikeCount}</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="pb-2">
                    <Button
                      sx={{ color: "black" }}
                      onClick={handleClickOpen("paper")}
                    >
                      <svg
                        onClick={() => dispatch(handleClickOpen())}
                        aria-label="Комментировать"
                        class="x1lliihq x1n2onr6 x5n08af"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Комментировать</title>
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </Button>
                  </span>
                  <div>
                    <p>{elem.commentCount}</p>
                  </div>
                </div>

                <span>
                  <svg
                    aria-label="Поделиться публикацией"
                    class="x1lliihq x1n2onr6 x1roi4f4"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Поделиться публикацией</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </span>

                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                  icon={<BookmarkBorderIcon />}
                  checkedIcon={<BookmarkIcon />}
                />

                <span>
                  <svg
                    onClick={() => dispatch(handleOpen1())}
                    aria-label="Дополнительно"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Дополнительно</title>
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </span>
              </div>

              <div>
                <div className="flex  justify-end ">
                  <div>
                    <React.Fragment>
                      <Dialog
                        sx={{
                          width: "26%",
                          height: "50%",
                          left: "73%",
                          top: "12%",
                        }}
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                      >
                        <DialogTitle id="scroll-dialog-title">
                          <div className="flex cursor-pointer justify-start   items-center my-3 ">
                            <p
                              onClick={handleClose}
                              className="pl-7 mr-10 text-3xl"
                            >
                              x
                            </p>
                            {/* <DialogActions>
                  <Button>X</Button>
                </DialogActions> */}
                            <p className="font-bold">Коментарии</p>
                            {/* <DialogTitle
                  className="text-center font-bold"
                  // id="scroll-dialog-title"
                >
                  Коментарии
                </DialogTitle> */}
                          </div>
                        </DialogTitle>
                        <DialogContent dividers={scroll === "paper"}>
                          <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                          >
                            <div className="flex flex-col  gap-9">
                              {elem?.comments?.map((ele) => (
                                <p className="text-black">
                                  <div>
                                    {users.map((elem) => {
                                      return (
                                        <div>
                                          {ele.userId == elem.id ? (
                                            <div className="flex items-center gap-1">
                                              {elem.avatar == "" ||
                                              elem.avatar == null ? (
                                                <img
                                                  className="w-[14%]"
                                                  src="https://avatars.mds.yandex.net/i?id=468b1d37f96f9def37f34bb75bdaa3849be0613a-10115068-images-thumbs&n=13"
                                                  alt=""
                                                />
                                              ) : (
                                                <img
                                                  src={`${
                                                    import.meta.env
                                                      .VITE_APP_FILES_URL
                                                  }${elem.avatar}`}
                                                  alt=""
                                                />
                                              )}
                                          <p>{elem.userName}</p>
                                            </div>
                                          ) : null}
                                        </div>
                                      );
                                    })}
                                    {ele.comment}
                                  </div>

                                  <div className="flex gap-3">
                                    <p className="text-[grey]">
                                      отметки "Нравиться":3 Ответить
                                    </p>
                                    <p
                                      onClick={() => modalUs()}
                                      className="text-white hover:text-[grey]"
                                    >
                                      ...
                                    </p>
                                  </div>
                                </p>
                              ))}
                            </div>
                            {/* {[...new Array(50)]
                              .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                              )
                              .join("\n")} */}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <div className="flex border-[grey]  w-[100%]  border-[1px] px-3 py-1 rounded-[20px] ">
                            <input
                              value={text3}
                              onChange={(e) => setText3(e.target.value)}
                              placeholder="Добавьте коментарий..."
                              type="text"
                              className="  border-[none] outline-0 w-[100%] rounded-[30px]  p-1 "
                            />
                            {text3 ? (
                              <button
                                className="text-[blue]"
                                onClick={() =>
                                  dispatch(
                                    postComment({
                                      postId: elem.postId,
                                      comment: text3,
                                    }),
                                    setText3("")
                                  )
                                }
                              >
                                Опубликовать
                              </button>
                            ) : null}
                          </div>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {modal2 ? (
        <div className="bg-[#090909d8] h-[100vh]  w-[100%] ml-[-41%] top-0  fixed">
          <div className=" shadow-md bg-white text-center p-14 rounded-[14px] w-[40%] ml-[32%] mt-[15%] m-8 flex flex-col z-40 ">
            {/* <input type="text" placeholder="qqq" className="bg-[blue]" /> */}
            <button className="text-[red] pb-4">Пожаловаться</button>
            <hr className=" border-b-1" />
            <button className="pt-4" onClick={() => dispatch(handlModal1())}>
              Отмена
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Reels;
