import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalMore,
  setModalSearch,
  setModalCreate,
} from "../reducers/Layout/Layout";

import InstagramIcon from '@mui/icons-material/Instagram';
import img from "/src/assets/images/polzovatel.jpg"

import MoreModal from "../components/Layout/MoreModal";
import CreateModal from "../components/Layout/CreateModal";
import { Link, Outlet, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/icons/instagram-wordmark.svg";
import navHome from "../assets/icons/nav-home.svg";
import navReels from "../assets/icons/nav-reels.svg";
import moreSettings from "../assets/icons/more-settings.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faBars,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import navMessages from "../assets/icons/nav-messages.svg";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, TextField } from "@mui/material";
import navProfile from "../assets/images/nav-profile.jpg";

import ClearIcon from '@mui/icons-material/Clear';

// import search from "../pages/search/search";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { deluser, getdata, postuser} from "../pages/search/search";
import { handleChange } from "../reducers/search/searchred";


export const Layout = () => {
  // Функция для модального окна "Еще"

  const location = useLocation()
  const dispatch = useDispatch();
  const modalMore = useSelector((store) => store.layout.modalMore);
  const modalSearch = useSelector((store) => store.layout.modalSearch);
  const modalCreate = useSelector((store) => store.layout.modalCreate);
  const searchinp = useSelector((store) => store.searchred.searchinp)
  const search = useSelector((store) => store.searchred.search)

  const toggleModalSearch = () => {
    dispatch(setModalSearch(!modalSearch));
  };
  const toggleModal = () => {
    dispatch(setModalMore(!modalMore));
  };



  const data = useSelector((store) => store.searchred.data)

// console.log(search);
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    dispatch(getdata())
  }, [dispatch, searchinp])
  return (
    // Главный контейнер
    <main className="flex">
      {/* Флекс контейнер */}
      {/* Navbar */}
      <aside className={`left ${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "w-[6%]" : "w-[19%]"}`}>
        {/* Панель навигации */}
        <div
          className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "w-[6%]" : "w-[19%]"} panel-navigation fixed py-[33px] px-[15px] h-[100%] border-r-[1px] border-[#d8d8d8]`}

        >
          <ul
            className={`${modalSearch ? "items-start gap-[16.5px]" : "items-stretch"
              } flex flex-col gap-[12px]`}
          >
            {/* Logo */}
            <Link to="/basic" >
              <li className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}mb-[15px]`}>
                <img src={logo} alt="" className={`w-[55%] ${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`} />
              </li>
              {/* instagram icon */}
              <li className="px-[9px]" style={{ display: modalSearch ? "block" : "none" }}>
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </li>
            </Link>
            <NavLink to="/basic" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <img src={navHome} alt="" />
                {/* <FontAwesomeIcon icon={faHouse} className="text-[25px]" /> */}
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Главная</p>
              </li>
            </NavLink>

            {/* <search/> */}
            <li
              onClick={() => { toggleModalSearch() }}
              className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[22px]" />

              <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>
                Поисковой запрос
              </p>
            </li>


            <NavLink to="explore" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Интересное</p>
              </li>
            </NavLink>
            <NavLink to="reels" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <img src={navReels} alt="" className="w-[25px]" />
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Reels</p>
              </li>
            </NavLink>
            <NavLink to="message" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <img src={navMessages} alt="" className="w-[25px]" />
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Сообщения</p>
              </li>
            </NavLink>
            <NavLink to="notifications" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} className="text-[25px]" />
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Уведомления</p>
              </li>
            </NavLink>
            <li
              onClick={() => {
                dispatch(setModalSearch(false))
                dispatch(setModalCreate(true));
              }}
              className="flex items-center cursor-pointer gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300"
            >
              <AddBoxOutlinedIcon />
              <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Создать</p>
            </li>
            <NavLink to="profile" onClick={() => dispatch(setModalSearch(false))}>
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <Avatar
                  src={navProfile}
                  sx={{ width: "25px", height: "25px" }}
                />
                <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Профиль</p>
              </li>
            </NavLink>
            <li
              onClick={() => toggleModal()}
              className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-[20px]" />
              <p className={`${location.pathname === "/basic/message" || location.pathname === "/basic/message/newMessage" ? "hidden" : "block"}`}>Ещё</p>
            </li>
          </ul>
        </div>
        {/* Modal More */}
        <MoreModal
          modal={modalMore}
          img={moreSettings}
          faChartLine={
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-[18px] w-[25px]"
            />
          }
          faThreads={
            <FontAwesomeIcon
              icon={faThreads}
              className="text-[18px] w-[25px]"
            />
          }
        />
        {/* Modal Create */}
        <CreateModal modal={modalCreate} />
      </aside>
      {/* searchmodal  */}


      <div data-aos="fade-right"
        style={{ display: modalSearch ? "block" : "none" }}
        className="searchModal border-r-[1px]  z-10   fixed left-[6%] px-[1%] py-[2%]  bg-white w-[29%] h-[100%] rounded-r-3xl">

        <div className="flex  flex-col ">
          <h1 className="text-[25px] font-semibold">
            Поисковой запрос
          </h1>



          <input value={searchinp} onChange={(e) => dispatch(handleChange({ type: "searchinp", settype: (e.target.value) }))} type="search" placeholder="Поиск" className="w-[100%] outline-none my-[7%]  px-[5%] bg-[#EFEFEF] rounded-[10px] h-[40px]" />


          <div>

          
          
          <div style={{display:searchinp.length==0?"none":"flex"}} className="flex mb-[5%] pr-[1%] justify-between items-center">
            <p className="font-semibold text-[]">Недавнее</p>
            <h1 className="font-semibold text-[14px] cursor-pointer hover:text-[#345d77]  text-[#0F9BF7]">Очистить все</h1>
          </div>

          </div>

          <div>
            {
          
              searchinp== ""?(null):( 

          
          <div className=" flex  flex-col h-[66vh]  overflow-auto gap-2  ">
            {
              data.map((el) => {
                return (
                  <div key={el.id} className="flex items-center pr-[1%] justify-between">
                    <div  className="flex hover:cursor-pointer  items-center gap-2">
                      <img className="rounded-full w-[50px]" src={el.avatar ? el.avatar :img } alt="" />
                      <div onClick={()=>dispatch(postuser(el.id))} className="">
                        <h1 className="font-semibold text-[14px]">{searchinp.length==0?el.text:el.userName}</h1>
                        <p className="text-[grey] text-[14px] font-semibold">{el.email}</p>
                      </div>  
                      
                    </div>
                    <button onClick={() => dispatch(deluser(el.id))}>

                      <ClearIcon sx={{ color: "grey" }} />

                    </button>
                      
                  </div>
                    
                )
              })
            }

          </div>
          )}
          </div>
        </div>







      </div>

      {/* Контентная часть */}
      <aside className="right w-[100%]">
        <Outlet />
        {/* Футер */}

        <footer className="py-[10px]">
          {/* Список с тегом <a> в будущем заменить на Link Router */}
          <ul className="flex flex-wrap items-center justify-center gap-x-[10px] mx-auto w-[55%]">
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Meta
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Информация
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Блог
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Вакансии
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Помощь
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                API
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Конфиденциальность
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Условия
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Места
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Instagram Lite

              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[12px] text-[#8D8D86] hover:border-b-[1px] hover:border-[#8D8D86]"
              >
                Threads
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Загрузка контактов и лица, не являющиеся пользователями
              </a>
            </li>
            <li>
              <a href="" className="text-[12px] text-[#8D8D86]">
                Meta Verified
              </a>
            </li>
          </ul>
          <div className="product-info flex justify-center gap-[10px] mx-auto mt-[20px]">
            {/* Локализация, реализовать в будущем */}
            <div className="localization flex gap-[10px]">
              <a href="" className="text-[12px] text-[#8D8D86]">
                Русский
              </a>
            </div>
            <p className="text-[12px] text-[#8D8D86]">
              © 2023 Instagram from Meta
            </p>
          </div>
        </footer>
      </aside>
    </main>
  );
};
