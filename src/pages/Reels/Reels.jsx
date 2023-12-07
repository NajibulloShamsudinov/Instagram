import React, { useState, useEffect } from "react";
//emoj
import { getToken } from "../../utils/token";

import { users } from "../../api/home/home";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
//modal-dialog
import ScrollDialog from "../../components/reelsComp/Reelss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../../App.css";

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

// import vid from "../../assets/video/i.mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  postLike,
  postComment,
  getData1,
  deleteComment,
  addFollowing,
  unFollowing,
} from "../../api/reels/Reels";
import { blue } from "@mui/material/colors";
import { getSubsciptions } from "../../api/profile/profile";
// import { handlModal } from "../../reducers/reels/Reelse";
// import { handlModal1 } from "../../reducers/reels/Reelse";

const Reels = () => {
  //emoj
  // const [text, setText] = useState("");

  // function handleOnEnter(text) {
  //   console.log("enter", text);
  // }

  //follow
  const userId = getToken().sid;
  console.log(userId);

  //
  const user = useSelector(({ home }) => home.user)
  const unfollow = useSelector(({ profile }) => profile.subsciptions);
  console.log(unfollow);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [text3, setText3] = useState("");
  // Modal
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [comments, setComments] = React.useState([]);
  const [idx, setIdx] = useState(null);

  const handleClickOpen = (coomments, scrollType) => {
    setOpen(true);

    setComments(coomments);
    setScroll(scrollType);
  };
  const handleClickOpen2 = (scrollType) => () => {
    setOpen2(true);
    setScroll(scrollType);
  };

  const [nabi, setNabi] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handlModal1 = () => {
    setModal2(false);
  };
  let userById = null;

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const descriptionElementRef1 = React.useRef(null);
  React.useEffect(() => {
    if (open2) {
      const { current: descriptionElement } = descriptionElementRef1;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open2]);

  const posts = useSelector((store) => store.reels.posts);
  const users1 = useSelector((store) => store.reels.users);
  let load = useSelector((store) => store.reels.loading);
  // console.log(posts);
  // const modal2 = useSelector((store) => store.reels.modal2);

  const [modal2, setModal2] = useState(null);
  const [idSave, setIdSave] = useState(null);
  const modalUs = (id) => {
    setIdSave(id);
    setModal2(true);
    setOpen(false);
  };
  // console.log(posts);

  const dispatch = useDispatch();

  // const [counter, setCounter] = useState(0)
  console.log(users1.length);
  useEffect(() => {
    dispatch(getData());
    dispatch(getData1());
    dispatch(users());
    dispatch(getSubsciptions(userId));
  }, [dispatch, unfollow,unFollowing,addFollowing]);
  return (
    <div className="mt-0 flex flex-col gap-14  px-[30%]">
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
                  <p className="text-[red] p-2  hover:bg-[#00000010]">
                    Пожаловаться
                  </p>
                  <p className="text-[blue] p-2 hover:bg-[#00000010]">
                    Подписаться
                  </p>
                  <p className="hover:bg-[#00000010]  p-2 ">
                    Перейти к публикации
                  </p>
                  <p className="hover:bg-[#00000010]  p-2 ">Поделиться...</p>
                  <p className="hover:bg-[#00000010]  p-2 ">Копировать сылку</p>
                  <p className="hover:bg-[#00000010]  p-2 ">Всавить на сайт</p>
                  <p className="hover:bg-[#00000010]  p-2 ">Об аккаунте</p>
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
              <video
                className="rounded-md"
                src={`${import.meta.env.VITE_APP_FILES_URL}${elem.images}`}
                width="400"
                loop
                controls
                muted
              ></video>
              <div className=" absolute text-[white] mb-[5.5%] pl-[1%] ">
             
                {user.map((element) => {
                  return elem.userId == element.id ? (
                    <div className="flex items-center ">
                      <img
                       className="w-[40px] h-[40px] rounded-[50%] mr-4"
                        src={`${import.meta.env.VITE_APP_FILES_URL}${
                          element.avatar
                        }`}
                        alt=""
                      />
                      <h1 className="font-bold"> {element.userName} </h1>
                      <div className="ml-[290px]  absolute">
                        {element.subscriptions ? (
                          <button
                            
                            className="text-[white]  p-1 w-[80px] rounded-lg  border-[1px] border-[white]"
                            onClick={() => {
                          
                              // console.log();
                              dispatch(
                                unFollowing(
                                  unfollow.filter((e) =>
                                    e.userShortInfo.userId == elem.userId
                                      ? e.id
                                      : null
                                  )[0].id
                                )
                              );
                            }}
                          >
                            UnFollow
                          </button>
                        ) : (
                          <button
                            className="text-[white]  p-1 w-[80px] rounded-lg  border-[1px] border-[white]"
                            onClick={() => {
                            
                              dispatch(addFollowing(element.id));
                            }}
                          >
                            Folow
                          </button>
                        )}
                      </div>
                    </div>
                  ) : null;
                })}
              </div>

              <div className="absolute ml-[19%] mb-[5%]">
                <p>{elem.subscribersCount}</p>
              </div>

              <div className="flex flex-col ml-8 items-center gap-3">
                <div className="flex flex-col cursor-pointer items-center ">
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
                  <span >
                    <Button
                      // style={{dark:"red"}}
                      sx={{ color: "black" }}
                      onClick={() =>
                        handleClickOpen(
                          elem.comments,
                          setIdx(elem.postId),
                          "paper"
                        )
                      }
                    >
                      <svg
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

                <div>
                  <React.Fragment>
                    <Button
                      sx={{ color: "black" }}
                      onClick={handleClickOpen2("paper")}
                    >
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
                    </Button>

                    <Dialog
                      sx={{
                        width: "26%",
                        height: "50%",
                        left: "73%",
                        top: "12%",
                      }}
                      open={open2}
                      onClose={handleClose2}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title">
                        <div className="flex items-center  gap-[80px] pb-2">
                          <CloseIcon onClick={handleClose2} />

                          {/* <Button
                            sx={{ color: "black" }}
                            onClick={handleClose2}
                          >
                            X
                          </Button> */}
                          <p className="">Поделиться</p>
                        </div>
                        <div className="flex gap-5 mt-6">
                          <p className="">Kому:</p>
                          <input
                            type="text"
                            className="outline-0 w-[60%]"
                            placeholder="Поиск..."
                          />
                        </div>
                      </DialogTitle>
                      <DialogContent dividers={scroll === "paper"}>
                        <DialogContentText
                          sx={{ color: "white" }}
                          id="scroll-dialog-description"
                          ref={descriptionElementRef}
                          tabIndex={-1}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              padding: "40px",
                            }}
                          >
                            <CircularProgress />
                          </Box>
                        </DialogContentText>
                      </DialogContent>
                      <button className="bg-[#0095f6] border-[1px] mt-5 mx-6 p-2 rounded-[18px] text-white">
                        Отправить
                      </button>
                      <DialogActions></DialogActions>
                    </Dialog>
                  </React.Fragment>
                </div>
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

                <span className=" cursor-pointer">
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
                  <div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
          <div className="flex cursor-pointer items-center  gap-[40px] my-3 ">
            {/* <Button sx={{ color: "black" }} onClick={handleClose}>
              X
            </Button> */}
            <CloseIcon onClick={handleClose} />
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
              <div>
                {
                  <div>
                    {comments.length == 0 ? (
                      <div className="text-center pt-4 pb-4">
                        <h3 className="text-3xl text-black pb-4">
                          Коментариев нет
                        </h3>
                        <p>Начните переписку </p>
                      </div>
                    ) : (
                      comments.map((ele) => (
                        <p className="text-black">
                          <div>
                            {users1.map((elem) => {
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
                                            import.meta.env.VITE_APP_FILES_URL
                                          }${elem?.avatar}`}
                                          alt=""
                                          className="w-[40px] h-[40px] rounded-[50px] "
                                        />
                                      )}
                                      <p>{elem?.userName}</p>
                                    </div>
                                  ) : null}
                                </div>
                              );
                            })}
                            {ele.comment}
                          </div>

                          <div className="flex gap-3">
                            <p className="text-[grey]">
                              отметки "Нравиться":0 Ответить
                            </p>
                            <p
                              onClick={() => modalUs(ele.postCommentId)}
                              className="text-white hover:text-[grey] cursor-pointer"
                            >
                              ...
                            </p>
                          </div>
                        </p>
                      ))
                    )}
                  </div>
                }
              </div>
              {/* )} */}
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
          <div className="flex border-[grey] items-center justify-between  w-[100%] border-[1px] px-3 py-1 rounded-[20px] ">
            <img
              className="w-[10%] rounded-[10px]"
              src="https://avatars.mds.yandex.net/i?id=a8d625cd5d600893ffc7b646ba730c5ada2b8ec6-7543982-images-thumbs&n=13"
              alt=""
            />
            <input
              value={text3}
              onChange={(e) => setText3(e.target.value)}
              placeholder="Добавьте коментарий..."
              type="text"
              className="  border-[none] pl-3 outline-0 w-[500%] rounded-[30px]  p-1 "
            />
            <svg
              aria-label="Смайлик"
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="194"
            >
              <title>Смайлик</title>
              <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
            </svg>

            {text3.length > 0 ? (
              <button
                className="text-[blue]"
                onClick={() =>
                  dispatch(
                    postComment({
                      postId: idx,

                      comment: text3,
                    }),
                    setText3("")
                  )
                }
              >
                Опубликовать
              </button>
            ) : null}
            {/* <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Type a message"
            /> */}
          </div>
        </DialogActions>
      </Dialog>

      {modal2 ? (
        <div className="bg-[#090909d8] h-[100vh]  w-[100%] ml-[-41%] top-0  fixed">
          <div className=" shadow-md bg-white text-center p-14 rounded-[14px] w-[40%] ml-[32%] mt-[15%] m-8 flex flex-col z-40 ">
            {/* <input type="text" placeholder="qqq" className="bg-[blue]" /> */}
            <button className="text-[red] pb-4">Пожаловаться</button>
            <button
              className="text-[red] pb-4"
              onClick={() => {
                dispatch(deleteComment(idSave)), dispatch(handlModal1());
              }}
            >
              Удалить
            </button>
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
