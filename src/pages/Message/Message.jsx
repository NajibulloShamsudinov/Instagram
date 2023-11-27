import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setListBg } from "../../reducers/Layout/Layout";
import { useState, useEffect } from "react";
import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";
import { setModalUsers, setSearch } from "../../reducers/Message/Message";
import ModalUsers from "../../components/Message/ModalUsers";
import NewMessage from "../../icons/Message/NewMessage";
import ControlPhone from "../../icons/Message/ControlPhone";
import ControlVideoChat from "../../icons/Message/ControlVideoChat";
import ControlUserInfo from "../../icons/Message/ControlUserInfo";
import LoadingMessage from "../../icons/Message/LoadingMessage";
import SmileInput from "../../icons/Message/SmileInput";
import VoiceInput from "../../icons/Message/VoiceInput";
import ImageInput from "../../icons/Message/ImageInput";
import HeartInput from "../../icons/Message/HeartInput";
import { Avatar } from "@mui/material";
import userMessage from "../../assets/images/nav-profile.jpg";
import { getUsers } from "../../api/Message/messageApi";
import CloseIcon from "@mui/icons-material/Close";

const Message = () => {
  // Stata from Redux
  const dispatch = useDispatch();
  const listBg = useSelector((store) => store.layout.listBg);
  const modalUsers = useSelector((store) => store.message.modalUsers);

  // Data from state Redux
  const dataUsers = useSelector((store) => store.message.data);
  const search = useSelector((store) => store.message.search);
  console.log(search);

  let location = useLocation();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, search]);

  return (
    <main className="h-[100vh]">
      <div className="wrapper-message  flex justify-between items-start">
        <aside className="left w-[30%] border-r-[1px] over h-[100vh]">
          <div className="wrapper-text flex flex-col gap-[20px] p-[20px]">
            <div className="wrapper-user flex justify-between items-center">
              <p className="font-[700] text-[20px]">rubleduble77</p>
              <button onClick={() => dispatch(setModalUsers(true))}>
                <NewMessage style={{ cursor: "pointer" }} />
              </button>
            </div>
            <div className="wrapper-message flex justify-between items-center">
              <p className="font-[700]">Сообщения</p>
              <p className="query text-[14px] text-[#737373] font-[500] cursor-pointer">
                Запросы
              </p>
            </div>
          </div>
          <div className="wrapper-list mt-[25px] h-[77%] overflow-auto">
            {dataUsers.map((e) => {
              return (
                <NavLink to="newMessage">
                  <div
                    key={e.id}
                    className="
                     list hover:bg-[#00000005] cursor-pointer"
                  >
                    <div className="user flex items-center gap-[15px] p-[20px]">
                      <Avatar
                        src={e.avatar}
                        sx={{ width: "56px", height: "56px" }}
                      />

                      <div className="wrapper-text">
                        <p className="text-[14px]">{e.userName}</p>
                        <p className="text-[12px] text-[#737373]">В сети</p>
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
                      <div className="wrapper-input flex justify-between px-[15px] items-center border-[1px] w-full rounded-[50px]">
                        <SmileInput style={{ cursor: "pointer" }} />
                        <input
                          type="text"
                          className=" p-[10px] outline-none w-full"
                          placeholder="Напишите сообщение..."
                        />
                        <div className="input-icons flex items-center gap-[20px]">
                          <VoiceInput style={{ cursor: "pointer" }} />
                          <ImageInput style={{ cursor: "pointer" }} />
                          <HeartInput style={{ cursor: "pointer" }} />
                        </div>
                      </div>
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
          <div className="wrapper-chat overflow-auto h-[76vh]"></div>
        </aside>
      </div>
      {/* Modal Add Users */}
      <ModalUsers modal={modalUsers}>
        <div className="wrapper-text flex justify-between items-center p-[15px]">
          <p className="text-[16px] font-[700] mx-auto text-center">
            Новое сообщение
          </p>
          <button onClick={() => dispatch(setModalUsers(false))}>
            <CloseIcon
              className="to-active cursor-pointer"
              sx={{ fontSize: "28px" }}
            />
          </button>
        </div>
        <form>
          <div className="wrapper-input flex items-end gap-[20px] py-[7px] px-[20px] border-[1px]">
            <label className="font-[500]">Кому:</label>
            <input
              onChange={(event) => dispatch(setSearch(event.target.value))}
              value={search}
              type="text"
              placeholder="Поиск..."
              className="text-[14px] outline-none w-[100%]"
            />
          </div>
        </form>
        <div className="wrapper-search overflow-auto h-[45vh]">
          {dataUsers.map((e) => {
            return (
              <div
                key={e.id}
                className="
                     list hover:bg-[#00000005] cursor-pointer"
              >
                <div className="user flex items-center gap-[15px] p-[10px]">
                  <Avatar
                    src={e.avatar}
                    sx={{ width: "44px", height: "44px" }}
                  />

                  <div className="wrapper-text">
                    <p className="text-[14px]">{e.userName}</p>
                    {/* Здесь должен быть {e.fullname} */}
                    <p className="text-[12px] text-[#737373]">В сети</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ModalUsers>
    </main>
  );
};

export default Message;
