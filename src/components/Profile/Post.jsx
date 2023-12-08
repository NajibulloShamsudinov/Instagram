import React, { useEffect, useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { getToken } from '../../utils/token';
import { useDispatch, useSelector } from 'react-redux';
import { ModalPostTrue } from '../../reducers/Profile/Profile';
import ClearIcon from "@mui/icons-material/Clear";
import { closeModal } from '../../reducers/Profile/Profile';
import { getPosts } from "../../api/ExploreApi/ExploreApi";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderSharp";
import MapsUgcSharpIcon from "@mui/icons-material/MapsUgcSharp";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Post = ({ id, post }) => {
  const [isHovered, setIsHovered] = useState(Array(post.length).fill(false));

  const users = useSelector((store) => store.profile.users)
  const newImg = useSelector((store) => store.profile.newimg)
  const open = useSelector((store) => store.profile.ModalPost)
  const user = useSelector(({ home }) => home.user);
  let Comments = useSelector((store) => store.explore.Comments);



  console.log(newImg)


  const dispatch = useDispatch()

  let [modalElement, setModalElement] = useState([]);


  const userId = getToken().sid

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <div className='grid gap-[5px] mt-[20px] grid-cols-3'>
      {users?.map(ele => {
        return ele.id == id ? (
          post?.map((el, index) => {
            return el.userId == id ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  const newHoverState = [...isHovered];
                  newHoverState[index] = true;
                  setIsHovered(newHoverState);
                }}
                onMouseLeave={() => {
                  const newHoverState = [...isHovered];
                  newHoverState[index] = false;
                  setIsHovered(newHoverState);
                }}
              >
                {el.images.length !== 0 ? (
                  <div onClick={() => (
                    dispatch(
                      ModalPostTrue(el)
                    ),
                    setModalElement({el})

                  )} className="">

                  
                       { el.images.forEach(element => { element.includes(".MP4")}) ? <video className='h-[309px] w-[2212%]' controls src={`${import.meta.env.VITE_APP_FILES_URL}${el.images[0]}`} /> :
                          <img className='h-[309px] w-[2212%] cursor-pointer' src={`${import.meta.env.VITE_APP_FILES_URL}${el.images[0]}`} alt=""
                          />}
                    
                  
                    {isHovered[index] && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4">
                        <p className="text-white flex items-center gap-[5px]">🤍 {el.postLikeCount}</p>
                        <p className="text-white flex items-center gap-[5px]">💬 {el.comments.length}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col m-auto my-[80px] items-center">
                    <CameraAltIcon sx={{ width: "67px", height: "67px" }} />
                    <h1 className='text-[30px] pt-[10px] font-[700]'> Публикаций пока нет</h1>
                  </div>
                )}
              </div>
            ) : (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => {
                  const newHoverState = [...isHovered];
                  newHoverState[index] = true;
                  setIsHovered(newHoverState);
                }}
                onMouseLeave={() => {
                  const newHoverState = [...isHovered];
                  newHoverState[index] = false;
                  setIsHovered(newHoverState);
                }}
              >
                {el.images.length !== 0 ? (
                  <div className="">
                    <img
                      className='h-[309px] w-[2212%] cursor-pointer'
                      src={`${import.meta.env.VITE_APP_FILES_URL}${el.images[0]}`}
                      alt=""
                    />
                    {isHovered[index] && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-[30px] justify-center p-4">
                        <p className="text-white flex items-center gap-[5px]">🤍 {el.postLikeCount}</p>
                        <p className="text-white flex items-center gap-[5px]">💬 {el.comments.length}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col m-auto my-[80px] items-center">
                    <CameraAltIcon sx={{ width: "67px", height: "67px" }} />
                    <h1 className='text-[30px] pt-[10px] font-[700]'> Публикаций пока нет</h1>
                  </div>
                )}
              </div>
            )
          })
        ) : null
      })}
      {open == true ? (
        <div className="w-[100%] h-[100vh]  bg-[#00000097] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 ">
          <div onClick={() => dispatch(closeModal())}
            className="text-[white] cursor-pointer  left-[97%] top-[2%] fixed"><ClearIcon />
          </div>
          <div className="w-[67%] h-[94%]  m-auto flex  mt-[1.5%] bg-[white]">
          {
            // <img className='w-[59%]' src={`${import.meta.env.VITE_APP_FILES_URL}${newImg.images[0]}`} alt="" />
            <Swiper className='w-[59%]'
            spaceBetween={15}
            slidesPerView={1}
           >
             
             {newImg.images.map((elem)=>{
             return (
              <SwiperSlide><img src={`${import.meta.env.VITE_APP_FILES_URL}${newImg.images[0]}`}className="w-[100%] h-[100%] object-cover" alt="error" /></SwiperSlide>
             )
           })}
             
           </Swiper>
          }
          <div className=" justify-between flex-col  flex  w-[41%] h-[100%]">
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
                        return newImg.userId == element.id ? (
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
                style={{ display: newImg.title == null ? "none" : "block" }}
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
                        return newImg.userId == element.id ? (
                          <h1 className="font-bold"> {element.userName} </h1>
                        ) : null;
                      })}
                    </h1>
                    <h1 className="text-[17px]">{newImg.title}</h1>
                  </div>
                </div>
                <h1 className=" pl-[12.4%] w-[90%] pb-[2%]">
                  {newImg.content}
                </h1>
              </div>

                 <div className="  h-[90%] bg-[] gap-[10%]  flex flex-col p-[4%] pl-[2%]  overflow-y-auto">
                {newImg.comments.map((element) => {
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
                          return newImg.userId == element.id ? (
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
                    {newImg.postLike ? (
                      <div
                        onClick={() => (
                          dispatch(postLike(newImg.postId)),
                          dispatch(closeModal())
                        )}
                      >
                        <FavoriteIcon
                          sx={{ color: "red" }}
                          onClick={() => (
                            dispatch(postLike(newImg.postId)),
                            dispatch(closeModal())
                          )}
                        />
                      </div>
                    ) : (
                      <FavoriteBorderIcon
                        onClick={() =>
                          dispatch(postLike(newImg.postId))
                        }
                      />
                    )}
                  </div>
                  <MapsUgcSharpIcon />
                  <TelegramIcon />
                </div>
                <div className="pl-[3%]   flex gap-2">
                  <p>{newImg.postLikeCount}</p>
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
                      dispatch(addCom({ comment: Comments, postId: comEl.postId }))
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

export default Post;
