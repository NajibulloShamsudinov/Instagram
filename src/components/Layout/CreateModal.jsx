import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { addNewPost, getpost } from "../../api/post/post";
import { fileToBase64 } from "../../utils/fileToBase64";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import ImageVideo from "../../icons/Create/ImageVideo";
import img1 from "/src/assets/images/polzovatel.jpg"
import { handleChange } from "../../reducers/post/post";
import {getToken} from "../../utils/token"

import CloseIcon from '@mui/icons-material/Close';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
import { setModalCreate } from "../../reducers/Layout/Layout";


const CreateModal = (props) => {
  let dispatch = useDispatch();
  // const inptitle=((store)=>store.post.inptitle)
  // const inpcontent=((store)=>store.post.inpcontent)
  const postData=useSelector((store)=>store.post.postData)





  const [next,setNext]=useState(false)
  let [img, setImg] = useState(null);
  let [inpcontent, setInpcontent] = useState("");
  let [inptitle, setInptitle] = useState("");
  let [inpimg,setInpimg]=useState(null)

  const userId = getToken()?.sid
  
  let arrimg=[]
  let handlImg = async (event) => {
    for(let i=0;i<event.target.files.length;i++){
      arrimg.push(event.target.files[i])
      
    }
    // console.log(arrimg.map((el)=>el.name));
    setImg(arrimg);
    // setInpimg(arrimg.map((el)=>el.name))
  };

  const handlepost =async (files)=>{
     let arr1=[]
    for (let i = 0; i < files.length; i++) {
      let file= await fileToBase64(files[i])
      arr1.push({
        id:Date.now(),
        img:file
      })
       
    
    }
    setInpimg(arr1)
   console.log(inpimg);
  
  }


  const handlesubmit =()=>{
    let form =new FormData()
    // form.append("images",img)
    form.append("title",inptitle)
    form.append("content",inpcontent)
    for(let i=0;i<img.length;i++){
      form.append(`images`,img[i])
    }
    dispatch(addNewPost(form))
  }
  useEffect(()=>{
    dispatch(getpost())
  },[dispatch])


  

  return (
    <div>
      <div
        className={`${
          props.modal ? "block" : "hidden"
        } modal-container bg-[#00000089] fixed z-30 w-full h-full top-0 left-0`}
        
        
      >
        <div onClick={()=>dispatch(setModalCreate(false))} className="flex justify-end fixed h-[100vh] w-[100%]   ">
        </div>
        <div className="flex justify-center items-center h-[100vh]">
          <div style={{width:img==null?"36%":"50%"}} className="modal z-50 overflow-hidden dark:bg-[#262626] dark:text-white bg-[#fff] rounded-[10px] w-[36%] h-[80%]">
            <div>
              <p
                style={{ display: img == null ? "block" : "none" }}
                className="text-center py-[15px] border-b-[1px]"
              >
                Создание публикации
              </p>
              <div style={{ display: img == null ? "none" : "block" }}>
                <div className="flex pr-[5%]   items-center justify-between pt-[3%] ">
                  <button
                    onClick={() => {
                      setImg(null);
                    }}
                    className="ml-[4%]  "
                  >
                    <KeyboardBackspaceIcon />
                  </button>
                  <p className=" font-bold ">Crop</p>
                  <p
                    onClick={() =>{
                      addNewPost({
                        images: img,
                      })
                      setNext(true)
                    }
                    }
                    style={{display:next?"none":"block"}}
                    className="  cursor-pointer  text-[#4366cc] "
                  >
                    Next
                  </p>
                  <button style={{display:next?"block":"none"}} onClick={()=>{handlesubmit(),dispatch(setModalCreate(false),setImg(null),setInpcontent(""),setInptitle(""))}}  className={` text-[#4876fe] font-bold`}>Поделиться</button>
                </div>
              </div>                                                                                 
             <div className="modal-content      ">   
                <div style={{ display: img == null ? "block" : "none" }}>
                  <div className="wrapper-image flex flex-col items-center h-[70vh] justify-center gap-[20px]">
                    <div className="flex flex-col items-center">
                    <ImageVideo style={{width:"200px"}} />
                    <p className=" text-[20px]">Перетащите сюда фото и видео</p>

                    </div>

                    <form
                      method="post"
                      enctype="multipart/form-data"
                      className=""
                    >
                      <label class="input-file">
                        <input
                          type="file"
                          onChange={(e)=>{handlImg(e),handlepost(e.target.files)}}
                          name="file"
                          multiple={true}
                        />
                        {/* <div className="flex justify-between"> */}
                       

                        <img
                          style={{ display: img == null ? "none" : "block" }}
                          className=" p-[60px] m-auto fixed left-0 right-0   "
                          src={img}
                          alt=""
                        />
                        
                        <span className="text-white font-medium">
                          Выбрать на компьютере
                        </span>
                      </label>
                      {/* <div style={{display:next?"flex":"none"}} className="comment  flex-col gap-5 h-[75vh] p-[1%] w-[40%]   ">
                      <div className="flex items-center gap-3">
                        <img className="w-[30px] rounded-full" src={img1} alt="" />
                        <h1 className=" font-semibold">damir </h1>
                      </div>
                      <div className="flex  flex-col gap-5">
                        <input value={inptitle} onChange={(e)=>dispatch(handleChange({type:"inptitle",settype:(e.target.value)}))} className=" border-2 w-[80%] h-[50px] rounded-[2px]" type="text" />
                        <input value={inpcontent} onChange={(e)=>dispatch(handleChange({type:"inpcontent",settype:(e.target.value) }))} className=" border-2 w-[80%] h-[50px] rounded-[2px]" type="text" />
                      </div>

                    </div> */}
                    </form>
                  </div>
                </div>
                <div>
                  <div className="flex w-[80%] mx-auto  items-center overflow-hidden ">
                  <Swiper  className="mySwiper">
                  {
                       inpimg?.map((el)=>{
                        console.log(el);
                        return(

                         <SwiperSlide >
                          <img
                            style={{ display: img == null ? "none" : "block",width:next?"100%":"100%" }}
                            // src={inpimg}
                            src={el.img}
                            alt=""
                          />
                          
                         </SwiperSlide>
       
                        )

                      })

                    }
                        </Swiper>

                  
                    <div style={{display:next?"flex":"none"}} className="comment  flex-col gap-5 h-[75vh] p-[1%] w-[50%]   ">
                      {
                        
                        postData.map((el)=>{
                          
                         return (
                          el.id == userId?(   <div className="flex items-center gap-3">
                          <img className="w-[30px] rounded-full" src={el.avatar ? `${
                                            import.meta.env.VITE_APP_FILES_URL
                                          }${el?.avatar}` :img1 } alt="" />
                          <h1 className=" font-semibold">{el.userName}</h1>
                        </div>)  :null
                   
                       )
                       
                      })
                    }
                      <div className="flex  flex-col gap-5">
                        <input value={inptitle} onChange={(e)=>setInptitle(e.target.value)} className=" border-2 w-[100%] h-[50px] rounded-[2px]" type="text" />
                        <input value={inpcontent} onChange={(e)=>setInpcontent(e.target.value)} className=" border-2 w-[100%] h-[50px] rounded-[2px]" type="text" />
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
