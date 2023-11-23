import React from "react";
import { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalMore,
  setModalSearch,
  setModalCreate,
} from "../reducers/Layout/Layout";

import MoreModal from "../components/Layout/MoreModal";
import CreateModal from "../components/Layout/CreateModal";
import { Link, Outlet, NavLink } from "react-router-dom/dist";
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

export const Layout = () => {
  // Функция для модального окна "Еще"

  const dispatch = useDispatch();
  const modalMore = useSelector((store) => store.layout.modalMore);
  const modalSearch = useSelector((store) => store.layout.modalSearch);
  const modalCreate = useSelector((store) => store.layout.modalCreate);

  const toggleModal = () => {
    dispatch(setModalMore(!modalMore));
  };
  const toggleModalSearch = () => {
    dispatch(setModalSearch(!modalSearch));
  };

  return (
    // Главный контейнер
    <main className="flex">
      {/* Флекс контейнер */}
      {/* Navbar */}
      <aside className="left w-[19%]">
        {/* Панель навигации */}
        <div
          className={`${
            modalSearch ? "w-[40%] bg-[#fff] rounded-[20px]" : "w-[19%]"
          } panel-navigation fixed py-[33px] px-[15px] border-r-[1px] border-[#d8d8d8]`}
        >
          <ul
            className={`${
              modalSearch ? "items-start" : "items-stretch"
            } flex flex-col gap-[12px]`}
          >
            {/* Logo */}
            <Link to="/basic">
              <li className={`${modalSearch} ? "hidden" : "block" mb-[15px]`}>
                <img src={logo} alt="" className="w-[55%]" />
              </li>
            </Link>
            <NavLink to="/basic">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 ">
                <img src={navHome} alt="" />
                {/* <FontAwesomeIcon icon={faHouse} className="text-[25px]" /> */}
                <p className={modalSearch ? "hidden" : "block"}>Главная</p>
              </li>
            </NavLink>
            <li
              onClick={() => toggleModalSearch()}
              className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[25px]"
              />
              <p className={modalSearch ? "hidden" : "block"}>
                Поисковой запрос
              </p>
            </li>
            <div
              className={`${
                modalSearch ? "flex" : "hidden"
              } wrapper-search w-full  justify-end`}
            >
              <TextField label="Search..." />
            </div>
            <NavLink to="explore">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
                <p className={modalSearch ? "hidden" : "block"}>Интересное</p>
              </li>
            </NavLink>
            <NavLink to="reels">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <img src={navReels} alt="" className="w-[25px]" />
                <p className={modalSearch ? "hidden" : "block"}>Reels</p>
              </li>
            </NavLink>
            <NavLink to="message">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <img src={navMessages} alt="" className="w-[25px]" />
                <p className={modalSearch ? "hidden" : "block"}>Сообщения</p>
              </li>
            </NavLink>
            <NavLink to="notifications">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <FontAwesomeIcon icon={faHeart} className="text-[25px]" />
                <p className={modalSearch ? "hidden" : "block"}>Уведомления</p>
              </li>
            </NavLink>
            <li
              onClick={() => dispatch(setModalCreate(true))}
              className="flex items-center cursor-pointer gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300"
            >
              <AddBoxOutlinedIcon />
              <p className={modalSearch ? "hidden" : "block"}>Создать</p>
            </li>
            <NavLink to="profile">
              <li className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300">
                <Avatar
                  src={navProfile}
                  sx={{ width: "25px", height: "25px" }}
                />
                <p className={modalSearch ? "hidden" : "block"}>Профиль</p>
              </li>
            </NavLink>
            <li
              onClick={() => toggleModal()}
              className="flex items-center gap-[15px] hover:bg-[#00000010] rounded-[7px] p-[10px] transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-[20px]" />
              <p className={modalSearch ? "hidden" : "block"}>Ещё</p>
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
      {/* Контентная часть */}
      <aside className="right w-[81%]">
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
