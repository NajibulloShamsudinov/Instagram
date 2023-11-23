import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../api/home/home";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';




function Home () {
  const data=useSelector(({home})=>home.data)
  const dispatch=useDispatch()


useEffect(()=>{
  dispatch(get())
},[dispatch])


  return (
    <div className="mx-[auto] p-[20px] pb-[10vh]">
      <div className="flex justify-between">
        <div className="w-[65%]">
        <div className="flex gap-[10px] px-[40px]">
         <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
          <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          className="w-[50px] rounded-[30px] border-[2px] border-[white]"  alt="" />
          </div>
          <span className="text-[12px]">betman</span>
         </div>
         <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSinUiRqVB94sfZZbtNZgPJswUTs4R7YDskvXfVjUSejKfQqAoMaedQBNfybdIdduiix4&usqp=CAU"
          className="w-[50px] rounded-[30px] border-[2px] border-[white]"  alt="" />
          </div>
          <span className="text-[12px]">betman</span>
         </div>
         <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
          <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          className="w-[50px] rounded-[30px] border-[2px] border-[white]"  alt="" />
          </div>
          <span className="text-[12px]">betman</span>
         </div>
        </div>
        <div className="my-[10vh] ">
      {
     data.map((e,i)=>{
      return (
        <div key={e.postId} className="w-[400px] h-[500px] border-[1px] m-auto my-[20px]">
        <img src={`${import.meta.env.VITE_APP_FILES_URL}${e.images[i]}`}
         className="w-[100%]" alt="error" />
        <div className="p-[2px]">
        <div>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}
         sx={{color:"red",":hover":{
          color:"red",
        }}} />
          <Checkbox
         icon={<BookmarkBorderIcon />}
           checkedIcon={<BookmarkIcon />}
         />
        </div>
        <h1>{e.title}</h1>
        </div>
        </div>
      )
     })
     }</div>
        </div>
        
        {/* right side */}
       
       <div className="mx-[50px]">
       <div className="flex items-center gap-[10px]">
        <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          className="w-[40px] rounded-[30px]"  alt="" />
          <div>
          <h1 className="text-[12px]">betman</h1>
          <h1 className="text-[12px]">noctua 😊</h1>
          </div>
          <h1 className="text-[10px] text-[blue]">Переключиться</h1>
         </div>
         <div className="text-[grey] my-[20px] text-[12px] flex justify-between">
         <h1>Рекомендации для вас</h1>
         <h1>Все</h1>
         </div>
           <div className="flex items-center gap-[10px]">
        <img src="https://icons-for-free.com/iconfiles/png/512/instagram+profile+user+icon-1320184028326496024.png"
          className="w-[40px] rounded-[30px]"  alt="" />
          <div>
          <h1 className="text-[12px]">betman</h1>
          <h1 className="text-[12px]">noctua 😊</h1>
          </div>
          <h1 className="text-[10px] text-[blue]">Подписаться</h1>
         </div>
       </div>
      </div>
    </div>
  );
  }

export default Home;
