import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

import { fileToBase64 } from "../../utils/fileToBase64";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { addNewPost } from "../../api/create/create";
import "../../App.css";
import { useSelector } from "react-redux";
import ImageVideo from "../../icons/Create/ImageVideo";

const CreateModal = (props) => {
  let [img, setImg] = useState(null);

  let handlImg = async () => {
    let newImg = await fileToBase64(event.target.files[0]);
    setImg(newImg);
  };
  return (
    <div>
      <div
        className={`${
          props.modal ? "block" : "hidden"
        } modal-container bg-[#00000089] fixed z-30 w-full h-full top-0 left-0`}
      >
        <div>
          <div className="modal bg-[#fff] rounded-[10px] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[36%] h-[80%]">
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
                    onClick={() =>
                      alert("HOZIR LOGIKAI POST NAVISHTA NASHUDAAST")
                    }
                    className="  cursor-pointer  text-[#697aae] "
                  >
                    Next
                  </p>
                </div>
              </div>
              <div className="modal-content   flex flex-col gap-[10px] mt-[33%] ">
                <div style={{ display: img == null ? "block" : "none" }}>
                  <div className="wrapper-image flex flex-col items-center gap-[20px]">
                    <ImageVideo />

                    <p className=" text-[20px]">Перетащите сюда фото и видео</p>
                    <form
                      method="post"
                      enctype="multipart/form-data"
                      className="m-auto"
                    >
                      <label class="input-file">
                        <input
                          type="file"
                          onChange={handlImg}
                          name="file"
                          multiple={true}
                          accept=""
                        />
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
                    </form>
                  </div>
                </div>
                <div>
                  <img
                    style={{ display: img == null ? "none" : "block" }}
                    className="  bottom-[0.1%] h-[90%] w-[100%] m-auto fixed left-0 right-0   "
                    src={img}
                    alt=""
                  />
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
