import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get, users,likes, story } from "../../api/home/home";
import { handelChange, setCloseCom, setOpen, setOpenCom } from "../../reducers/Home/Home";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Followers from "../../components/home/Followers";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModalSetings from "../../components/home/ModalSetings";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
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
  width: "70%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  height:"500"
};
function Home () {
/////datas
  const data=useSelector(({home})=>home.data)
  const user=useSelector(({home})=>home.user)
  const open=useSelector(({home})=>home.open)
  const openCom=useSelector(({home})=>home.openCom)
  const com=useSelector(({home})=>home.com)
  const name=useSelector(({home})=>home.name)
  const img=useSelector(({home})=>home.img)
  const dispatch=useDispatch()


useEffect(()=>{
  dispatch(get())
  dispatch(users())
  dispatch(story())
},[dispatch])


  return (
    <div className="mx-[80px] p-[20px] pb-[10vh]">
      <div className="flex justify-between">
        <div className="w-[60%]">
         <div className="mx-[50px]">
         <Swiper
            spaceBetween={15}
            slidesPerView={8}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
        {
          user.map((e)=>{
            return (
              <SwiperSlide>
                 <div className="text-center">
              <div className="w-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <img src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
              className="rounded-[30px] border-[2px] border-[white] bg-[white]"  alt="" />
              </div>
              <span className="text-[12px]">{e.userName}</span>
             </div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
         </div>
        
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
        {e.images.map((el)=>{
          return (
            !el.includes(".mp4")?(<img src={`${import.meta.env.VITE_APP_FILES_URL}${e.images}`}
            className="w-[100%]" alt="error" onDoubleClick={()=>dispatch(likes(e.postId))} />)
        : (<video controls src={`${import.meta.env.VITE_APP_FILES_URL}${e.images[0]}`}></video>)
          )
        })}
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
          <input type="text" className="py-[5px] w-[300px] outline-none" placeholder="Добавьте комментарий..." />
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
           {
            !`${import.meta.env.VITE_APP_FILES_URL}${img}`.includes(".mp4")?<img src={`${import.meta.env.VITE_APP_FILES_URL}${img}`} 
            alt="" className="w-[600px] h-[600px]" />
            : <video controls className="w-[600px] h-[600px]" src={`${import.meta.env.VITE_APP_FILES_URL}${img}`}></video>
           } 
            <div className=" pl-[3%]">
            <ListItem >
             <div className="w-[100%] flex items-center justify-between border-b-2 pb-4">
             <ListItemAvatar className="flex">
              <div className="w-[45px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
              <Avatar alt="Remy Sharp" src={`${import.meta.env.VITE_APP_FILES_URL}${img}`}
              className="rounded-[30px] border-[2px] border-[white] bg-[white]" />
              </div>
              {/* <h1>{
                data.map(e=>{
                  return(
                    user.map(element => {
                      return e.userId == element.id ? <h1 className="font-bold"> {element.userName} </h1>: null
                    })
                  )
                })
                }</h1> */}
              </ListItemAvatar>
              <button onClick={()=>dispatch(setOpen(true))}>
              <MoreHorizIcon/></button>
             </div>
            </ListItem>
            <div>
             <h1>{name}</h1>
             
            </div>
            <form className="my-[5px] flex items-center gap-[6px]">
         <InsertEmoticonIcon/>
         <input type="text" className="py-[5px] outline-none" placeholder="Добавьте комментарий..."
         value={com} onChange={(e)=>dispatch(handelChange({type:"com",value:e.target.value}))} />
           <button type="submit">Опубликовать</button>
         </form>
       <button onClick={()=>dispatch(setCloseCom(false))}>close</button>
            </div>
          </List>
        </Box>
      </Modal>
        
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
