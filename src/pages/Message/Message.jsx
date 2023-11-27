import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setListBg } from "../../reducers/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";

import NewMessage from "../../icons/Message/NewMessage";
import ControlPhone from "../../icons/Message/ControlPhone";
import ControlVideoChat from "../../icons/Message/ControlVideoChat";
import ControlUserInfo from "../../icons/Message/ControlUserInfo";
import LoadingMessage from "../../icons/Message/LoadingMessage";
import { Avatar } from "@mui/material";
import userMessage from "../../assets/images/nav-profile.jpg";
const API = "http://65.108.148.136:8085/User/get-users";
console.log(API);

const Message = () => {
  // Stata from Redux
  const dispatch = useDispatch();
  const listBg = useSelector((store) => store.layout.listBg);

  // Data from db.json
  const [data, setData] = useState([]);
  // API json-server
  const API = "http://localhost:3000/data";

  // Async GET
  async function getData() {
    try {
      const { data } = await axios.get(API);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  let location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="wrapper-message flex justify-between items-start">
        <aside className="left w-[30%] border-r-[1px] h-[100vh]">
          <div className="wrapper-text flex flex-col gap-[20px] p-[20px]">
            <div className="wrapper-user flex justify-between items-center">
              <p className="font-[700] text-[20px]">rubleduble77</p>
              <NewMessage style={{ cursor: "pointer" }} />
            </div>
            <div className="wrapper-message flex justify-between items-center">
              <p className="font-[700]">Сообщения</p>
              <p className="query text-[14px] text-[#737373] font-[500] cursor-pointer">
                Запросы
              </p>
            </div>
          </div>
          <div className="wrapper-list mt-[25px] h-[77%] overflow-auto">
            {data.map((e) => {
              return (
                <NavLink to="newMessage">
                  <div
                    key={e.id}
                    className={`${
                      e.isComplete
                        ? "bg-[#00000015] hover:bg-[#00000015]"
                        : "bg-transparent"
                    } list hover:bg-[#00000005] cursor-pointer`}
                  >
                    <div className="user flex items-center gap-[15px] p-[20px]">
                      <Avatar src={e.image} />

                      <div className="wrapper-text">
                        <p className="text-[14px]">{e.title}</p>
                        <p className="text-[12px] text-[#737373]">{e.status}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </aside>
        <aside className="right w-[70%] relative">
          <Routes>
            <Route
              path="newMessage"
              element={
                <>
                  <div className="panel-control flex justify-between items-center p-[20px] border-b-[1px]">
                    <div className="user flex items-center gap-[15px] cursor-pointer w-[30%]">
                      <Avatar src={userMessage} />
                      <div className="wrapper-text">
                        <p className="text-[14px]">Najibullo Shamsudinov</p>
                        <p className="text-[12px] text-[#737373]">В сети</p>
                      </div>
                    </div>
                    <div className="wrapper-icons flex items-center gap-[18px]">
                      <ControlPhone style={{ cursor: "pointer" }} />
                      <ControlVideoChat style={{ cursor: "pointer" }} />
                      <ControlUserInfo style={{ cursor: "pointer" }} />
                    </div>
                  </div>
                  <div className="wrapper-input fixed w-[66%] bottom-0">
                    <form className="bg-[#fff] p-[20px]  w-full">
                      <input
                        type="text"
                        className="border-[1px] w-full rounded-[50px] px-[20px] py-[10px] outline-none"
                        placeholder="Напишите сообщение..."
                      />
                    </form>
                  </div>
                </>
              }
            ></Route>
          </Routes>
          <div
            className={`${
              location.pathname === "/basic/message/newMessage"
                ? "hidden"
                : "flex"
            } wrapper-loading flex-col gap-[10px] justify-center items-center h-[100vh]`}
          >
            <LoadingMessage style={{ width: "96px", height: "96px" }} />
            <p className="text-[20px]">Ваши сообщения</p>
            <p className="text-[14px] text-[#737373]">
              Отправляйте личные фото и сообщения другу или группе
            </p>
            <button className="bg-[#0095f6] text-[#fff] text-[14px] font-[600] px-[16px] py-[6px] rounded-[8px] hover:bg-[#0065e0d4] transition-all duration-100">
              Отправить сообщение
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Message;
