import {
  ModalPostTrue,
  CloseModals,
  setComment,
  stateNone,
  setOpenCom2,
} from "../../reducers/explore/Explore";
import { get, users, likes, story, addCom } from "../../api/home/home";
import { addCom2 } from "../../api/ExploreApi/ExploreApi";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { postLike } from "../../api/ExploreApi/ExploreApi";
import { getPosts } from "../../api/ExploreApi/ExploreApi";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderSharp";
import MapsUgcSharpIcon from "@mui/icons-material/MapsUgcSharp";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
const Explore = () => {


  
  let dispatch = useDispatch();
  let open = useSelector((store) => store.explore.ModalPost);
  let data = useSelector((store) => store.explore.data);
  let newimg = useSelector((store) => store.explore.newimg);
  const posts = useSelector((store) => store.reels.posts);
  const user = useSelector(({ home }) => home.user);
  const comEl = useSelector((store) => store.explore.comEl2);
  const com = useSelector(({ home }) => home.com);

  let showUserId = useSelector((store) => store.explore.showUserId);
  let Comments = useSelector((store) => store.explore.Comments);
  let [modalElement, setModalElement] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);
  let [name, setName] = useState(null);
  let [getComment, getGetComment] = useState([]);
  // console.log(showcomments);
  // let [content, setContent] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
    dispatch(users  ());
  }, [dispatch]);
  return (
    <div className="w-[82%] ml-[14%] m-auto">
      <div className="flex-wrap flex gap-y-[5px] gap-x-[5px]   items-center justify-start  ">
        {data.map((e) => {
          return (
            <div className="bg-[#000000]  w-[30%] relative">
              <div
                onClick={() => (
                  dispatch(
                    ModalPostTrue(
                      `${import.meta.env.VITE_APP_FILES_URL}${e.images}`
                    )
                  ),
                  setModalElement({ e }),
                  setContent({ e }),
                  setTitle({ e }),
                  setName({ e }),
                  getGetComment({ e }),
                  dispatch(setOpenCom2(e))
                )}
                className="w-[100%] flex flex-col items-center justify-center text-[#00000000] hover:text-[white]  h-[100%] hover:bg-[#0000006d] absolute "
              >
                <div className="flex gap-[60px] ">
                  <div className=" flex flex-col items-center justify-center">
                    <FavoriteBorderIcon />
                    <h1>{e.postLikeCount}</h1>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <MapsUgcSharpIcon />
                    <h1>{e.commentCount}</h1>
                  </div>
                </div>
              </div>
              <img
                onClick={() => (
                  dispatch(
                    ModalPostTrue(
                      `${import.meta.env.VITE_APP_FILES_URL}${e.images}`
                    )
                  ),
                  setModalElement({ e }),
                  setContent({ e }),
                  setTitle({ e }),
                  setName({ e }),
                  getGetComment({ e })
                )}
                className="w-[100%]  h-[40vh]"
                src={`${import.meta.env.VITE_APP_FILES_URL}${e.images}`}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {open ? (
        <div className="w-[100%] h-[100vh]  bg-[#00000097] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 ">
          <div
            onClick={() => dispatch(CloseModals())}
            className="text-[white] cursor-pointer  left-[97%] top-[2%] fixed"
          >
            <ClearIcon />
          </div>
          <div className="w-[67%] h-[94%]  m-auto flex  mt-[1.5%] bg-[white]">
            <img className="w-[59%] h-[100%]" src={newimg} alt="" />
            <div className="  justify-between flex-col  flex  w-[41%] h-[100%]">
              <div className="bg-[white] w-[100%] flex justify-start items-center p-[2%] h-[7%]">
                <div className=" pb-[3%] pt-[3%]  flex w-[90%] items-center gap-2 ">
                  <img
                    className="w-[10%]"
                    src="https://i.pinimg.com/236x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg"
                    alt=""
                  />
                  <div className="  ">
                    <h1 className="text-[20px]">
                      {" "}
                      {user.map((element) => {
                        return modalElement.e.userId == element.id ? (
                          <h1 className="font-bold"> {element.userName} </h1>
                        ) : null;
                      })}
                    </h1>
                    <h1 className="text-[10px]">Original audio</h1>
                  </div>
                </div>
              </div>
              <hr className="w-[100%]"></hr>
              <div
                className=""
                style={{ display: title.e.title == null ? "none" : "block" }}
              >
                <div className="mt-[3%]   pb-[5%]  w-[90%] ml-[2.1%] flex items-center gap-2 ">
                  <img
                    className="w-[10%]"
                    src="https://i.pinimg.com/236x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg"
                    alt=""
                  />
                  <div className="   items-center  gap-[3%]  w-[100%] flex">
                    <h1 className="text-[20px]">
                      {" "}
                      {user.map((element) => {
                        return modalElement.e.userId == element.id ? (
                          <h1 className="font-bold"> {element.userName} </h1>
                        ) : null;
                      })}
                    </h1>
                    <h1 className="text-[17px]">{title.e.title}</h1>
                  </div>
                </div>
                <h1 className=" pl-[12.4%] w-[90%] pb-[2%]">
                  {content.e.content}
                </h1>
              </div>

              <div className="  h-[90%] bg-[] gap-[10%]  flex flex-col p-[4%] pl-[2%]  overflow-y-auto">
                {modalElement.e.comments.map((element) => {
                  return (
                    <div className="flex w-[100%] gap-[2%] items-center">
                      <div className=" w-[12%] pl-[2%]">
                        <img
                          src="https://i.pinimg.com/236x/ed/1f/41/ed1f41959e7e9aa7fb0a18b76c6c2755.jpg"
                          alt=""
                        />
                      </div>
                      <h1>
                        {user.map((element) => {
                          return modalElement.e.userId == element.id ? (
                            <h1 className="font-bold"> {element.userName} </h1>
                          ) : null;
                        })}
                      </h1>
                      <h1>{element.comment}</h1>
                    </div>
                  );
                })}
              </div>
              <div className="  w-[100%] ">
                <div className="flex bg-[green gap-[4%]  p-[2%]">
                  <div>
                    {modalElement.e.postLike ? (
                      <div
                        onClick={() =>
                          dispatch(postLike(modalElement.e.postId))
                        }
                      >
                        <FavoriteIcon
                          sx={{ color: "red" }}
                          onClick={() =>
                            dispatch(postLike(modalElement.e.postId))
                          }
                        />
                      </div>
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ ":hover": { color: "red" }, color: "black " }}
                        onClick={() =>
                          dispatch(postLike(modalElement.e.postId))
                        }
                      />
                    )}
                  </div>
                  <MapsUgcSharpIcon />
                  <TelegramIcon />
                </div>
                <div className="pl-[3%]   flex gap-2">
                  <p>{modalElement.e.postLikeCount}</p>
                  <span>likes</span>
                </div>
                <div className="border-t mt-[2%] border-t-[#d2d0d0] items-center w-[100%]  p-[1%]  flex h-[30%]">
                  <div className="text-[#2d2a2a] mt-[1.4%]">
                    <SentimentSatisfiedAltIcon />
                  </div>
                  <input
                    value={Comments}
                    onChange={(e) => dispatch(setComment(e.target.value))}
                    type="text"
                    placeholder="add a comment"
                    className=" m-auto w-[96%] pl-[10px] h-[100%] outline-none"
                  />
                  <h1
                    onClick={() =>
                      dispatch(
                        addCom2({ comment: Comments, postId: comEl.postId }),
                        dispatch(stateNone())
                      )
                    }
                    style={{ display: Comments.length > 0 ? "block" : "none" }}
                    className=" cursor-pointer pl-[2%] pr-[3%] text-[blue]"
                  >
                    post
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Explore;
