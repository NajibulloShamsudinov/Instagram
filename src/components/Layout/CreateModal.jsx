import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { ImageVideo } from "../../icons/imagesVideo";
import "../../App.css";

const CreateModal = (props) => {
  return (
    <div
      className={`${
        props.modal ? "block" : "hidden"
      } modal-container bg-[#00000089] fixed w-full h-full top-0 left-0`}
    >
      <div className="modal bg-[#fff] rounded-[10px] absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[30%] h-[70%]">
        <p className="text-center py-[15px] border-b-[1px]">
          Создание публикации
        </p>
        <div className="modal-content flex flex-col gap-[10px] mt-[22%] ">
          <div className="wrapper-image flex flex-col items-center gap-[20px]">
            <ImageVideo />
            <p>Перетащите сюда фото и видео</p>
            <form
              method="post"
              enctype="multipart/form-data"
              className="m-auto"
            >
              <label class="input-file">
                <input type="file" name="file" multiple={true} accept="" />
                <span className="text-white font-medium">
                  Выбрать на компьютере
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
