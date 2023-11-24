
import React, { useState } from "react";
import Post from "../../components/Profile/Post";
import Save from "../../components/Profile/Save";
import Tagged from "../../components/Profile/Tagged";
import { Link } from "react-router-dom";

const Profile = () => {
  const [visit, setVisit] = useState("post");

  return (
    <div className="">
      <div className=" flex justify-center ">
        <div className="img rounded-[100%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU"
            alt=""
          />
        </div>

        <div className="mt-[40px] ml-[60px]">
          <div className="setting w-[613px]  items-center  flex">
            <h1 className="pr-[25px] text-[20px] font-[400]">alijjon82</h1>
            <Link to="/settings">
              <button className=" bg-[#EFEFEF] font-[500] text-[14px] px-[16px] h-[32px] hover:bg-[#e3e1e1] rounded-[8px]">
                Редактировать профиль
              </button>
            </Link>
            <button className=" bg-[#EFEFEF] font-[500] text-[14px] px-[16px] h-[32px] hover:bg-[#e3e1e1] ml-[8px] rounded-[8px]">
              Показать архив
            </button>
            <div className="flex ml-[15px] gap-[10px]">
              <svg
                aria-label="Threads"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 192 192"
                width="24"
              >
                <title>Threads</title>
                <path
                  class="xcslo1z"
                  d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                ></path>
              </svg>
              <svg
                aria-label="Параметры"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Параметры</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex gap-[38px] mt-[20px]">
            <div className="flex gap-[7px]">
              <h1 className="font-bold">0</h1>
              <h1 onClick={() => setPost()} className="hover:text-[#e3e1e1]">
                {" "}
                публикаций
              </h1>
            </div>
            <div className="flex gap-[7px]">
              <h1 className="font-bold">166</h1>
              <h1> подписчиков</h1>

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Post from "../../components/Profile/Post"
import Save from '../../components/Profile/Save'
import Tagged from '../../components/Profile/Tagged'
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../api/profile/profile";
import { getToken } from "../../utils/token";




const Profile = () => {

  const userId = getToken()?.sid


  const [visit, setVisit] = useState("post")
  const [links, setLink] = useState("publ")
  




  const data = useSelector((store) => store.profile.data)
  console.log(data);




  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])


  return (
    <div className="">

      {data.map(el => (
        el.id == localStorage.getItem("access_token")? (
        <div key={el.id} className=" flex justify-center ">


          <div className="img rounded-[100%]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlbMgzYw0M94bT-Sp1UGBBHLj60mz3wVtWQ&usqp=CAU" alt="" />
          </div>

          <div className="mt-[40px] ml-[60px]">
            <div className="setting w-[613px]  items-center  flex">
              <h1 className="pr-[25px] text-[20px] font-[400]">{}</h1>
              <button className=" bg-[#EFEFEF] font-[500] text-[14px] px-[16px] h-[32px] hover:bg-[#e3e1e1] rounded-[8px]">Редактировать профиль</button>
              <button className=" bg-[#EFEFEF] font-[500] text-[14px] px-[16px] h-[32px] hover:bg-[#e3e1e1] ml-[8px] rounded-[8px]">Показать архив</button>
              <div className="flex ml-[15px] gap-[10px]">
                <svg aria-label="Threads" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 192 192" width="24"><title>Threads</title><path class="xcslo1z" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                <svg aria-label="Параметры" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Параметры</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
              </div>

            </div>
            <div className="flex gap-[38px] mt-[20px]">
              <div className="flex gap-[7px]">
                <h1 className="font-bold">0</h1>
                <h1 onClick={() => setPost()} className=""> публикаций</h1>
              </div>
              <div className="flex gap-[7px]">
                <h1 className="font-bold">166</h1>
                <h1> подписчиков</h1>
              </div>
              <div className="flex gap-[7px]">
                <h1 className="font-bold">961</h1>
                <h1> подписок</h1>
              </div>
            </div>
          </div>

        </div>
      </div>





        </div>
        ) : null

      ))}


      <div className="border-[2px] w-[90px] h-[90px] flex justify-center items-center ml-[180px] mt-[20px]  rounded-[100%] ">
        <div className="bg-[#FAFAFA] px-[3px] py-[2px] flex justify-center items-center h-[83px] w-[83px] rounded-[100%] ">
          <h1 className="text-[76px] pb-[20px] cursor-pointer text-[#c8c9cb] font-thin">
            +
          </h1>
        </div>
      </div>
      <h1 className="ml-[195px] text-[12px] font-[500] pt-[5px]">Добавить</h1>

      <div className="w-[80%] border-b-[1.5px] border-[#d1d0d0] mt-[40px] m-auto"></div>


      <div className="w-[80%] justify-center gap-[70px] mt-[15px] mb-[300px]  flex m-auto ">
        <button onClick={() => setVisit("post")}>
          <div className="flex gap-[5px] text-[#737373] items-center">
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            <h1 className="">Публикации</h1>
          </div>
        </button>
        <button onClick={() => setVisit("save")}>
          <div className="flex gap-[5px] text-[#737373] items-center">
            <svg
              className="w-[15px] pt-[3px] h-[15px]"
              aria-label=""
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <h1>Сохраненное</h1>
          </div>
        </button>
        <button onClick={() => setVisit("tagged")}>
          <div className="flex gap-[5px] text-[#737373] items-center">
            <svg
              aria-label=""
              class="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <title></title>
              <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <h1>Отметки</h1>

      <div className="w-[80%] border-b-[1.5px] border-[#d1d0d0] mt-[40px] m-auto">
      </div>

      <div className="w-[80%] justify-center gap-[70px] mt-[0px] flex m-auto "   >
        <button onClick={() => setVisit("post")}>
          <div className="">
            {links === "publ" && (
              <div className="border-y-[1.5px] border-[black]  ">

              </div>
            )}
          </div>
          <div className="flex mt-[15px] gap-[5px] text-[#737373] items-center">
            <svg className="hover:text-[black]" aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
            <h1 onClick={() => setLink("publ")} className="hover:text-[black]">Публикации</h1>
          </div>
        </button>
        <button onClick={() => setVisit("save")}>
          <div className="">
            {links === "saved" && (
              <div className="border-y-[1.5px] border-[black]">

              </div>
            )}
          </div>
          <div className="flex gap-[5px] mt-[15px]  text-[#737373] items-center">
            <svg className="w-[15px] hover:text-[black]  pt-[3px] h-[15px]" aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            <h1 onClick={() => setLink("saved")} className="hover:text-[black]" >Сохраненное</h1>
          </div>
        </button>
        <button onClick={() => setVisit("tagged")}>
          <div className="">
            {links === "tag" && (
              <div className="border-y-[1.5px] border-[black]">

              </div>
            )}
          </div>
          <div className="flex gap-[5px] mt-[15px] text-[#737373] items-center">
            <svg aria-label="" className="hover:text-[black]" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
            <h1 onClick={() => setLink("tag")} className="hover:text-[black]" >Отметки</h1>

          </div>
        </button>
      </div>



      <div className="w-[80%] m-auto">
        {visit === "post" && (
          <div className="">
            <Post />
          </div>
        )}
        {visit === "save" && (
          <div className="">
            <Save />
          </div>
        )}
        {visit === "tagged" && (
          <div className="">
            <Tagged />
          </div>
        )}
      </div>

    </div>






    </div>






  );
};

export default Profile;
