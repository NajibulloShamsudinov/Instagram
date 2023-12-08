import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Switcher from "../switcher/Switcher";
import Settings from "../../icons/Layout/settings";
import { setModalMore } from "../../reducers/Layout/Layout";
import { useDispatch } from "react-redux";

const MoreModal = (props) => {
  const dispatch = useDispatch();
  const windowRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target)) {
        dispatch(setModalMore(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [windowRef, props]);
  return (
    <div
      ref={windowRef}
      className={`${
        props.modal === true ? "block" : "hidden"
      } modal-container fixed top-[12%] z-10 left-[1%] bg-[#fff] dark:text-white dark:bg-[#262626] dark:border-0 rounded-[20px] shadow-lg p-[10px] border-[1px]`}
    >
      <ul className="flex flex-col  gap-[7px]">
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            {/* <img src={props.img} alt="" className="w-[18px]" /> */}
            <Settings />
            <p>Настройки</p>
          </li>
        </Link>
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            {props.faChartLine}
            <p>Ваши действия</p>
          </li>
        </Link>
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
            <p>Сохраненное</p>
          </li>
        </Link>
        <Link>
          <li
            onClick={() => {
              Switcher();
            }}
            className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]"
          >
            <Switcher />
            <p>Переключить режим</p>
          </li>
        </Link>
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            <ErrorOutlineOutlinedIcon />
            <p>Сообщение о проблеме</p>
          </li>
        </Link>
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            {props.faThreads}
            <p>Threads</p>
          </li>
        </Link>
        <Link>
          <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            <p>Переключение между аккаунта...</p>
          </li>
        </Link>
        <Link className="border-t-[1px]">
          <li className="flex items-center gap-[15px]  hover:bg-[#00000010] rounded-[7px] p-[15px] transition-all duration-300 text-[14px]">
            <p>Выйти</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MoreModal;
