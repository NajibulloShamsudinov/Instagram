import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get, users,likes, story, addCom, delCom } from "../../api/home/home";
import { handelChange, setCloseCom, setOpen, setOpenCom,setCloseStr,setOpenStor } from "../../reducers/Home/Home";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Followers from "../../components/home/Followers";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModalSetings from "../../components/home/ModalSetings";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StoryModal from "../../components/home/Stories";
import AddIcon from '@mui/icons-material/Add';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  height:"auto"
};

function Home () {
/////datas
  const data=useSelector(({home})=>home.data)
  const user=useSelector(({home})=>home.user)
  const stories=useSelector(({home})=>home.stories)
  const open=useSelector(({home})=>home.open)
  const openCom=useSelector(({home})=>home.openCom)
  const com=useSelector(({home})=>home.com)
  const comEl=useSelector(({home})=>home.comEl)
  const name=useSelector(({home})=>home.name)
  const img=useSelector(({home})=>home.img)
  const strImg=useSelector(({home})=>home.strImg)
  const comments=useSelector(({home})=>home.comments)
  const openstr=useSelector(({home})=>home.openstr)
  const openStor=useSelector(({home})=>home.openStor)
  console.log(openStor);

  const dispatch=useDispatch()

useEffect(()=>{
  dispatch(get())
  dispatch(users())
  dispatch(story())
},[dispatch])

const [anchorEl, setAnchorEl] = useState(null);
const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="p-[20px] pb-[10vh]  mx-auto w-[1280px]">
      <div className="flex justify-between ">
        <div className="w-[65%]">

          {/* stories */}
         <div className="mx-[80px]">
         <Swiper
            spaceBetween={15}
            slidesPerView={9}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <button className="rounded-[30px] w-[55px] h-[55px] border-[2px] border-[white] bg-[white]" >
                <AddIcon className="text-black"/>
              </button>
              
              </div>
              </SwiperSlide>
        {
          stories.map((e)=>{
            // e.viewerDto?.userName? 
            return (
              <SwiperSlide>
               <button onClick={()=>dispatch(setOpenStor(e))}>
               <div  className="text-center">
              <div className="w-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <img src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
              className="rounded-[30px] border-[2px] border-[white] bg-[white]"  alt="" />
              </div>
              <span className="text-[12px]">
              {user.map(element => {
                return e.userId == element.id ? <div> {element.userName} </div>: null
              })}
              </span>
             </div>
               </button>
              </SwiperSlide>
            )
            // :null
          })
        }
        </Swiper>
         </div>
        {/*  */}

    <div className="my-[10vh] ">
      {
     data.map((e)=>{
      return (
        <div key={e.postId} className="w-[500px] h-auto m-auto my-[40px]">
           <div className="flex justify-between">
             <div  className="flex items-center gap-[4px]">
             <div className="w-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <img src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
              className="rounded-[30px] border-[2px] border-[white] bg-[white]"  alt="" />
              </div>
             <span className="text-[14px] font-semibold">
              {user.map(element => {
                return e.userId == element.id ? <div> {element.userName} </div>: null
              })}
             </span>
             <h1>{e.datePublished.slice(0,10)}</h1>
             </div>
             <button onClick={()=>dispatch(setOpen(true))}>
              <MoreHorizIcon/></button>
             </div> <br />
        <div>
        <Swiper
         spaceBetween={15}
         slidesPerView={1}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
        >
          
          {e.images.map((el)=>{
          return (
            !el.includes(".mp4")?<SwiperSlide><img src={`${import.meta.env.VITE_APP_FILES_URL}${e.images.slice(0,1)}`}
            className="w-[100%]" alt="error" onDoubleClick={()=>dispatch(likes(e.postId))} /></SwiperSlide>
        : (<video controls src={`${import.meta.env.VITE_APP_FILES_URL}${e.images[0]}`}></video>)
          )
        })}
          
        </Swiper>
        </div>
        <div className="p-[2px]">
        <div className="flex justify-between">
         <div className="flex gap-[2px] items-center">
        <div className="text-center">
          {
       e.postLike?(<FavoriteIcon sx={{color:"red"}} onClick={()=>dispatch(likes(e.postId))} />):
       (<FavoriteBorderIcon sx={{":hover":{color:"red"}}} onClick={()=>dispatch(likes(e.postId))} /> )
          }
        </div>
        <Button onClick={() => dispatch(setOpenCom(e))}
        ><ModeCommentOutlinedIcon/></Button>
         </div>
          <Checkbox
         icon={<BookmarkBorderIcon />}
           checkedIcon={<BookmarkIcon />}
         />
        </div>
        <p className="font-semibold">{e.postLikeCount>0?e.postLikeCount+" "+"отметок Нравится":null}</p>
         <div className="flex gap-[5px]"> 
         {user.map(element => {
                return e.userId == element.id ? <h1 className="font-bold"> {element.userName} </h1>: null
              })}
         <h1>{e.title}</h1>
         </div>
        </div>
        <h1 className="text-[grey] mt-[2px]" onClick={()=>dispatch(setOpenCom(e))}>
          Посмотреть все комментарии ({e.commentCount})</h1>
        <div className="my-[5px]">
          <input type="text" className="py-[5px] bg-transparent w-[300px] outline-none" placeholder="Добавьте комментарий..." />
        </div>
        </div>
      )
     })
     }</div>
        </div>
        {/* modals */}
        <ModalSetings children open={open}>
        <button onClick={() => dispatch(setOpen(false))}>Отмена</button>
        </ModalSetings>

        {/* modal coment */}
        <Modal
        open={openCom}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style2}>
            <List sx={{display:"flex"}}> 
            
           <div className="w-[60%] text-center">
           {
            !`${import.meta.env.VITE_APP_FILES_URL}${img}`.includes(".mp4")?
            <img src={`${import.meta.env.VITE_APP_FILES_URL}${img}`} 
            alt="" className="w-[auto] h-[600px] m-auto" />
            : <video controls className="w-[100%] h-[600px]" 
            src={`${import.meta.env.VITE_APP_FILES_URL}${img}`}></video>
           } 
           </div>

            <div className="w-[60%] pl-[3%]">
             <div className="flex justify-between items-center border-b-2 pb-4 w-[100%] px-[10px]">
             <div className="flex items-center gap-[5px]">
              <div className="w-[45px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <Avatar alt="Remy Sharp" src={user.map((elem)=>{
                { return elem.avatar == "" ||
                elem.avatar == null ? (
                  <img
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    alt=""
                  />) : (<img
                    src={`${
                      import.meta.env.VITE_APP_FILES_URL
                    }${elem?.avatar}`} 
                    alt=""
                  />)}
              })}
              className="rounded-[30px] border-[2px] border-[white] bg-[white]" />
              </div>
              <div>{(
                      user.map(el=> {
                        return comEl.userId == el.id?<h1 className="font-bold">{el.userName}</h1>: null
                      })
              )}</div>
            </div>
            <button onClick={()=>dispatch(setOpen(true))}>
            <MoreHorizIcon/></button>
            </div>
            <div>
             
            <div className="flex gap-[10px] m-[10px]">
                   
                   <div className="w-[100%] px-[10px] overflow-y-auto h-[450px]">
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
                          <div className="flex items-center">
                            {user.map((elem) => {
                              return (
                                <div>
                                  {ele.userId == elem.id ? (
                                    <div className="flex gap-2 my-[10px]">
                                      {elem.avatar == "" ||
                                      elem.avatar == null ? (
                                        <img
                                          className="w-[8%] rounded-[20px]"
                                          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                                          alt=""
                                        />) : (<img
                                          src={`${
                                            import.meta.env.VITE_APP_FILES_URL
                                          }${elem?.avatar}`} className="w-[10%] rounded-[30px]"
                                          alt=""
                                        />)}
                                      <p>{elem.userName}</p>
                                       {ele.comment}
                                    </div>
                                  ) : null}
                                </div>
                              );
                            })}
                             {/* <button style={{"hover":{
                              color:"black"
                             },color:"white"}} aria-controls={openMenu ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={openMenu ? 'true' : undefined}
                         onClick={handleClick}><MoreHorizIcon/></button> */}
                         <FavoriteBorderIcon />
                          </div>
                        </p>
                      ))
                    )}
                         </div>

             {/* for delet */}
             <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><DeleteIcon/></MenuItem>
      </Menu>
            </div>

            </div>
            <div className="absolute top-[85%]">
            <div className="my-[5px] flex items-center justify-between">
              <div className="gap-[10px] flex items-center">
          <InsertEmoticonIcon/>
          <input type="text" className="py-[5px] outline-none w-[400px]" placeholder="Добавьте комментарий..."
          value={com} onChange={(e)=>dispatch(handelChange({type:"com",value:e.target.value}))} />
              </div>
          <button onClick={()=>dispatch(addCom({comment:com,postId:comEl.postId}),handelChange({type:"com",value:""}))}>Опубликовать</button>
          </div>
          <button onClick={()=>dispatch(setCloseCom(false))}>close</button>
            </div>
          </div>
          </List>
        </Box>
      </Modal>

      {/* story Modal */}

    <StoryModal open={openstr}>
    <div className="mt-[20px]"> 
      <Swiper>
         {
          user.map((e)=>{
           return e.id==openStor.userId? (
              <SwiperSlide>
              {
                !`${import.meta.env.VITE_APP_FILES_URL}${strImg}`.includes(".mp4")?
                <img src={`${import.meta.env.VITE_APP_FILES_URL}${strImg}`} 
                alt="" className="w-[100%]" />
                : <video controls className="" 
                src={`${import.meta.env.VITE_APP_FILES_URL}${strImg}`}></video>
              }
              </SwiperSlide>
            )
            :null
          })
         }
         </Swiper>
         {/* <div className="my-[10%]">
            <input type="text" placeholder="add hello" />
           </div> */}
           </div> 
          
    
    </StoryModal>
        
        {/* right side */}
       
       <div className="mx-[40px] w-[30%]">
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
        <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          className="w-[50px] rounded-[30px]"  alt="" />
          <div>
          <h1 className="text-[12px]">betman</h1>
          <h1 className="text-[12px]">noctua 😊</h1>
          </div>
          </div>
          <h1 className="text-[14px] text-[blue]">Переключиться</h1>
         </div>
         <div className="text-[grey] my-[20px] text-[12px] flex justify-between">
         <h1>Рекомендации для вас</h1>
         <h1>Все</h1>
         </div>
           <Followers user="betman" img="https://i.pinimg.com/originals/02/af/6f/02af6f406b25e5c284daa0c39cf96a9a.jpg"/>
           <Followers user="AMIRTJK" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe-QcdiM2zDMaptVBPduk0oYeAw473xEy48VwSMBBA-Q0AbTRWcB6rxiGX70kPC9HVwM&usqp=CAU"/> 
           <Followers user="damir" img="https://i.pinimg.com/236x/5f/5d/13/5f5d1320da50c29055bb0c1f12a1d777.jpg"/> <br />
          <h1 className="text-[grey] text-[14px]">Информация Помощь Пресса API Вакансии Конфиденциальность Условия Места Язык
          Meta Verified</h1><br />
          <h1 className="text-[grey] text-[12px]">© 2023 INSTAGRAM FROM META</h1>
       </div>
      </div>
    </div>
  );
  }

export default Home;
