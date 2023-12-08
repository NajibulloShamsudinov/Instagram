import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setListBg } from "../../reducers/Layout/Layout";
import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Link, NavLink, useLocation } from "react-router-dom";
import IOSSwitch from "../../components/Message/IOSSwitch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  setModalUsers,
  setSearch,
  setValueSearch,
  setUserChat,
  setMessageText,
  setChatIdAdd,
  setDefaultLogoMessage,
  setChatsFullname,
  setChatsUserPhoto,
  setHidePanel,
  setChatsId,
  setChatsUserId,
} from "../../reducers/Message/Message";
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
import {
  getChats,
  getUsersSearch,
  createChat,
  getChatById,
  deleteChat,
  sendMessage,
  deleteMessage,
} from "../../api/Message/messageApi";
import CloseIcon from "@mui/icons-material/Close";
import { data } from "autoprefixer";
import { getToken } from "../../utils/token";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Message = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // Stata from Redux
  const dispatch = useDispatch();
  const listBg = useSelector((store) => store.layout.listBg);
  const modalUsers = useSelector((store) => store.message.modalUsers);

  // Data from state Redux
  const dataChats = useSelector((store) => store.message.data);
  const dataSearch = useSelector((store) => store.message.dataSearch);
  const search = useSelector((store) => store.message.search);
  const valueSearch = useSelector((store) => store.message.valueSearch);
  // const userChat = useSelector((store) => store.message.userChat);
  const chatId = useSelector((store) => store.message.chatId);
  const dataChatById = useSelector((store) => store.message.dataChatById);
  const messageText = useSelector((store) => store.message.messageText);
  const chatIdAdd = useSelector((store) => store.message.chatIdAdd);
  const chatsId = useSelector((store) => store.message.chatsId);
  const chatsUserId = useSelector((store) => store.message.chatsUserId);
  const defaultLogoMessage = useSelector(
    (store) => store.message.defaultLogoMessage
  );
  const hidePanel = useSelector((store) => store.message.hidePanel);
  const chatsFullname = useSelector((store) => store.message.chatsFullname);
  const chatsUserPhoto = useSelector((store) => store.message.chatsUserPhoto);

  const [info, setInfo] = useState(false);

  const myToken = getToken().sid;

  console.log(myToken);

  const handleInfo = () => {
    setInfo(!info);
  };

  let location = useLocation();

  const [modalSmile, setModalSmile] = useState(false);

  const handleSmile = () => {
    setModalSmile(!modalSmile);
  };

  const [panelMessage, setPanelMessage] = useState(null);
  const handlePanelClick = (messageId) => {
    setPanelMessage(messageId);
  };

  const handleSmileClick = () => {
    const newMessageText = messageText + "😊"; // добавляем смайлик к текущему сообщению
    dispatch(setMessageText(newMessageText)); // обновляем значение сообщения
  };

  const [idx, setIdx] = useState(null);

  const smiles = [
    "😂",
    "😮",
    "😍",
    "😢",
    "👏",
    "🔥",
    "🎉",
    "💯",
    "❤️",
    "🤣",
    "🥰",
    "😘",
    "😭",
    "😊",
  ];
  const smilesSecond = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "😚",
    "😙",
    "😋",
    "😛",
    "😜",
  ];

  const [smile, setSmile] = useState("");

  useEffect(() => {
    dispatch(getChats());
    dispatch(getUsersSearch());
  }, [dispatch, search]);

  useEffect(() => {
    if (idx) {
      dispatch(getChatById(idx));
    }
  }, [idx]);


  useEffect(() => {
    if (idx) {
      dispatch(getChatById(idx));
      dispatch(deleteMessage(panelMessage));
    }
  }, [panelMessage]);


  return (
    <main className="h-[100vh]">
      <div className="wrapper-message flex justify-between items-start">
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
              <p
                onClick={handleClick}
                className="query text-[14px] text-[#737373] font-[500] cursor-pointer"
              >
                Запросы
              </p>
            </div>
          </div>
          <div className="wrapper-list mt-[25px] h-[77%] overflow-auto">
            {dataChats.map((e) => {
              return (
                <NavLink to="newMessage">
                  <div
                    onClick={() => {
                      dispatch(setChatsFullname(e.receiveUser.fullname));
                      dispatch(setChatsUserPhoto(e.receiveUser.userPhoto));
                      dispatch(setHidePanel(true));
                      dispatch(getChatById(e.chatId));
                      setIdx(e.chatId);
                      dispatch(setChatsUserId(e.receiveUser.userId));
                      dispatch(setDefaultLogoMessage(false));
                    }}
                    key={e.id}
                    className="
                     list hover:bg-[#00000005] cursor-pointer"
                  >
                    <div className="user flex items-center gap-[15px] p-[20px]">
                      <Avatar
                        src={e.receiveUser.userPhoto}
                        sx={{ width: "56px", height: "56px" }}
                      />
                      <div className="wrapper-text">
                        <p className="text-[14px]">{e.receiveUser.userName}</p>
                        <div className="wrapper-text flex items-end gap-[10px]">
                          <p>{e.receiveUser.fullname}</p>
                          <p className="text-[12px] text-[#737373]">
                            {e.chatId}
                          </p>
                        </div>
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
                  <div
                    className={`${
                      hidePanel ? "flex" : "hidden"
                    } panel-control flex justify-between items-center p-[20px] border-b-[1px]`}
                  >
                    <div className="user flex items-center gap-[15px] cursor-pointer w-[30%]">
                      <Avatar src={chatsUserPhoto} />
                      <div className="wrapper-text">
                        <p className="text-[14px]">{chatsFullname}</p>
                        <p className="text-[12px] text-[#737373]">В сети</p>
                      </div>
                    </div>
                    <div className="wrapper-icons flex items-center gap-[18px]">
                      <ControlPhone
                        onClick={handleClick}
                        style={{ cursor: "pointer" }}
                      />
                      <ControlVideoChat
                        onClick={handleClick}
                        style={{ cursor: "pointer" }}
                      />
                      <button
                        onClick={() => {
                          handleInfo();
                          console.log(info);
                        }}
                      >
                        <ControlUserInfo style={{ cursor: "pointer" }} />
                      </button>
                    </div>
                  </div>
                  <div className="wrapper-input fixed w-[66%] z-50 bottom-0">
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        dispatch(
                          sendMessage({

                            newObj: {

                              chatId: idx,
                              messageText: messageText,
                            },
                            idx: idx,
                          })
                        );
                        dispatch(setMessageText(""));
                        console.log(chatIdAdd);
                      }}
                      className={`${
                        info ? "w-[77%]" : "w-full"
                      } bg-[#fff] p-[20px]`}
                    >
                      <div className="wrapper-input flex justify-between px-[15px] items-center border-[1px] w-full rounded-[50px]">
                        <SmileInput
                          onClick={() => handleSmile()}
                          style={{ cursor: "pointer" }}
                        />
                        <input
                          onChange={(event) =>
                            dispatch(setMessageText(event.target.value))
                          }
                          value={messageText + smile}
                          type="text"
                          className=" p-[10px] outline-none w-full"
                          placeholder="Напишите сообщение..."
                        />
                        <div className="input-icons flex items-center gap-[20px]">
                          <button
                            type="submit"
                            className={`${
                              messageText ? "block" : "hidden"
                            } text-[14px] font-[600] text-[#0095f6] hover:text-[#19405a] transition-all duration-100`}
                          >
                            Отправить
                          </button>
                          <VoiceInput
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                          />
                          <ImageInput
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                          />
                          <HeartInput
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                      {/* Modal Smile ============== */}
                      <div
                        className={`${
                          modalSmile ? "block" : "hidden"
                        } modal bg-[#fff] rounded-[10px] border-[1px] overflow-auto h-[60vh] w-[40%] shadow-lg absolute bottom-[90%] p-[15px]`}
                      >
                        <p>Самые популярные</p>
                        <div className="wrapper-smile flex flex-wrap py-[10px]">
                          {smiles.map((e) => {
                            return (
                              <p
                                onClick={() =>
                                  dispatch(setMessageText(messageText + e))
                                }
                                className="text-[35px] cursor-pointer"
                              >
                                {e}
                              </p>
                            );
                          })}
                        </div>
                        <p>Смайлики и люди</p>
                        <div className="wrapper-smile-people flex flex-wrap">
                          {smilesSecond.map((e) => {
                            return (
                              <p
                                onClick={() =>
                                  dispatch(setMessageText(messageText + e))
                                }
                                className="text-[35px] cursor-pointer"
                              >
                                {e}
                              </p>
                            );
                          })}
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
              defaultLogoMessage ? "flex" : "hidden"
            } wrapper-loading flex-col gap-[10px] justify-center items-center pt-[150px]`}
          >
            <LoadingMessage style={{ width: "96px", height: "96px" }} />
            <p className="text-[20px]">Ваши сообщения</p>
            <p className="text-[14px] text-[#737373]">
              Отправляйте личные фото и сообщения другу или группе
            </p>
            <button
              onClick={() => dispatch(setModalUsers(true))}
              className="bg-[#0095f6] text-[#fff] text-[14px] font-[600] px-[16px] py-[6px] rounded-[8px] hover:bg-[#0065e0d4] transition-all duration-100"
            >
              Отправить сообщение
            </button>
          </div>
          <div
            className={`${
              location.pathname === "/basic/message/newMessage" ||
              defaultLogoMessage
                ? "hidden"
                : "flex"
            } wrapper-loading flex-col gap-[10px] justify-center items-center py-[170px]`}
          >
            <LoadingMessage style={{ width: "96px", height: "96px" }} />
            <p className="text-[20px]">Ваши сообщения</p>
            <p className="text-[14px] text-[#737373]">
              Отправляйте личные фото и сообщения другу или группе
            </p>
            <button
              onClick={() => dispatch(setModalUsers(true))}
              className="bg-[#0095f6] text-[#fff] text-[14px] font-[600] px-[16px] py-[6px] rounded-[8px] hover:bg-[#0065e0d4] transition-all duration-100"
            >
              Отправить сообщение
            </button>
          </div>

          {/* CHAT ================== */}
          <div
            className={`${
              location.pathname === "/basic/message/newMessage"
                ? "h-[76vh]"
                : "h-[auto]"
            } wrapper-chat overflow-auto p-[20px]`}
          >
            <div
              className={`${
                location.pathname === "/basic/message" ? "hidden" : "flex"
              } wrapper-message flex-col-reverse gap-[20px]`}
            >
              {dataChatById.map((e) => {
                dispatch(setChatIdAdd(e.chatId));
                console.log(e.userId);

                return (
                  <>
                    <div
                      key={e.messageId}
                      className={`message-user flex w-full items-center gap-[10px] ${
                        chatsUserId === e.userId
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`${
                          panelMessage === e.messageId ? "flex" : "hidden"
                        } modal-panel-message bg-[#000] gap-[20px]   text-[#fff] p-[5px] px-[10px] rounded-[5px]`}
                      >
                        <p className="cursor-pointer">Переслать</p>
                        <p className="cursor-pointer">Копировать</p>
                        <p
                          className="cursor-pointer"
                          onClick={() => {
                            dispatch(deleteMessage(panelMessage));
                            handlePanelClick(false);
                          }}
                        >
                          Отменить отправку
                        </p>
                      </div>
                      <div
                        onClick={() => handlePanelClick(e.messageId)}
                        className={`${
                          myToken !== e.userId ? "hidden" : "block panel-hidden"
                        } panel-message relative`}
                      >
                        <p>...</p>
                      </div>
                      <Avatar
                        src={chatsUserPhoto}
                        sx={{
                          display: myToken !== e.userId ? "flex" : "none",
                        }}
                      />
                      <p
                        className={`${
                          myToken !== e.userId
                            ? "bg-[#00000010]"
                            : "bg-[#3797f0] text-[#fff]"
                        } bg-[#00000010] inline rounded-[20px] p-[5px] px-[10px]`}
                      >
                        {e.messageText}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </aside>
        {/* Chat INFO */}
        <div
          className={`${
            info ? "block" : "hidden"
          } wrapper-chat-info  bg-[#fff] border-l-[1px] w-[28%] h-[100vh]`}
        >
          <p className="text-[20px] font-[600] p-[20px]">Информация</p>
          <div className="natification-off mt-[20px] px-[20px] py-[10px] border-b-[1px] flex items-center justify-between w-full gap-[20px]">
            <p>Выключить уведомления о сообщениях</p>
            <IOSSwitch />
          </div>
          <div className="wrapper-user h-[30vh]">
            <p className="p-[20px] text-[16px] font-[600]">Участники</p>

            <div className="user flex items-center gap-[10px] py-[10px] px-[20px] hover:bg-[#00000005] cursor-pointer transition-all duration-100">
              <Avatar
                src={chatsUserPhoto}
                sx={{ width: "56px", height: "56px" }}
              />
              <p className="text-[14px] font-[600]">{chatsFullname}</p>
            </div>
            {/* );
              }
            })} */}
          </div>
          <div
            className={`${
              hidePanel ? "flex" : "hidden"
            } panel-control flex flex-col gap-[20px] p-[20px] border-t-[1px]`}
          >
            <p
              onClick={handleClick}
              className="text-[16px] cursor-pointer text-[#ed4956] tracking-[0.5px]"
            >
              Пожаловать
            </p>
            <p
              onClick={handleClick}
              className="text-[16px] cursor-pointer text-[#ed4956] tracking-[0.5px]"
            >
              Заблокировать
            </p>
            <Link to="/basic/message">
              <p
                onClick={() => {
                  dispatch(deleteChat(idx));
                  setInfo(false);
                }}
                className="delete-active text-[16px] cursor-pointer text-[#ed4956] tracking-[0.5px]"
              >
                Удалить чат
              </p>
            </Link>
          </div>
        </div>
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
        <form
          onSubmit={(event) => {
            dispatch(createChat());
            event.preventDefault();
            dispatch(setModalUsers(false));
          }}
        >
          <div className="wrapper-input flex items-end gap-[20px] py-[7px] px-[20px] border-[1px]">
            <label className="font-[500]">Кому:</label>
            <div
              className={`${
                valueSearch == "" ? "hidden" : "flex"
              } items-end gap-[10px] bg-[#e0f1ff] rounded-[12px] px-[12px] py-[3px] font-[600] cursor-pointer`}
            >
              <p className="text-[14px] text-[#0095F6] hover:text-[#1d4a68]">
                {valueSearch}
              </p>
              <button type="button" onClick={() => setCloseChoose(false)}>
                <CloseIcon
                  className="to-active cursor-pointer"
                  sx={{ fontSize: "18px", color: "#0095F6" }}
                />
              </button>
            </div>
            <input
              onChange={(event) => dispatch(setSearch(event.target.value))}
              value={search}
              type="text"
              placeholder="Поиск..."
              className="text-[14px] outline-none w-[100%]"
            />
          </div>

          <div className="wrapper-search overflow-auto h-[45vh]">
            {dataSearch.map((e) => {
              return (
                <div
                  key={e.id}
                  onClick={() => {
                    dispatch(setUserChat(e.id));
                    dispatch(setValueSearch(e.userName));
                  }}
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
          <button
            type="submit"
            className="h-[44px] flex justify-center items-center text-center mx-auto w-[94%] bg-[#0095f6] text-[#fff] text-[14px] font-[600] rounded-[8px]"
          >
            Чат
          </button>
        </form>
      </ModalUsers>
      {/* Alert - на стадии разработки */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          На стадии разработки
        </Alert>
      </Snackbar>
    </main>
  );
};

export default Message;
