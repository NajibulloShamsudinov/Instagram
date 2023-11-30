import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { addNewPost } from "../../api/post/post";
import { fileToBase64 } from "../../utils/fileToBase64";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import ImageVideo from "../../icons/Create/ImageVideo";
import img1 from "/src/assets/images/polzovatel.jpg"
import { handleChange } from "../../reducers/post/post";


const CreateModal = (props) => {
  let dispatch = useDispatch();
  // const inptitle=((store)=>store.post.inptitle)
  // const inpcontent=((store)=>store.post.inpcontent)
  const inpimg=((store)=>store.post.inpimg)



  const [next,setNext]=useState(false)
  let [img, setImg] = useState("");
  let [inpcontent, setInpcontent] = useState("");
  let [inptitle, setInptitle] = useState("");



  let handlImg = async (event) => {

    setImg(event.target.files[0]);
  };

  const handlesubmit =()=>{
    let form =new FormData()
    form.append("images",img)
    form.append("title",inptitle)
    form.append("content",inpcontent)

    dispatch(addNewPost(form))
  }
  return (
    <div>
      <div
        className={`${
          props.modal ? "block" : "hidden"
        } modal-container bg-[#00000089] fixed z-30 w-full h-full top-0 left-0`}
      >
        <div className="flex justify-center items-center h-[100vh]">
          <div style={{width:next?"50%":"36%"}} className="modal overflow-hidden bg-[#fff] rounded-[10px] w-[36%] h-[80%]">
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
                  <button style={{display:next?"block":"none"}} onClick={()=>handlesubmit()} className="text-[#4876fe] font-bold">Поделиться</button>
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
                      // method="post"
                      // enctype="multipart/form-data"
                      className=""
                    >
                      <label class="input-file">
                        <input
                          type="file"
                          onChange={handlImg}
                          name="file"
                          multiple={true}
                          accept=""
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
                  <div className="flex overflow-hidden ">

                  <img
                    style={{ display: img == null ? "none" : "block",width:next?"60%":"100%" }}
                    className=" w-[100%] h-[100%]  p-[1%]                 "
                    src={img}
                    alt=""
                  />
                  
                    <div style={{display:next?"flex":"none"}} className="comment  flex-col gap-5 h-[75vh] p-[1%] w-[40%]   ">
                      <div className="flex items-center gap-3">
                        <img className="w-[30px] rounded-full" src={img1} alt="" />
                        <h1 className=" font-semibold">damir </h1>
                      </div>
                      <div className="flex  flex-col gap-5">
                        <input value={inptitle} onChange={(e)=>setInptitle(e.target.value)} className=" border-2 w-[80%] h-[50px] rounded-[2px]" type="text" />
                        <input value={inpcontent} onChange={(e)=>setInpcontent(e.target.value)} className=" border-2 w-[80%] h-[50px] rounded-[2px]" type="text" />
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
