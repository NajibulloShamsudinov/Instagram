import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get, users, likes } from "../../api/home/home";
import { handelChange, setOpen } from "../../reducers/Home/Home";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Followers from "../../components/home/Followers";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalSetings from "../../components/home/ModalSetings";
// import { Swiper, SwiperSlide } from "swiper";
// import "swiper/css";

function Home() {
  /////datas
  const data = useSelector(({ home }) => home.data);
  const user = useSelector(({ home }) => home.user);
  const open = useSelector(({ home }) => home.open);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
    dispatch(users());
  }, [dispatch]);

  return (
    <div className="mx-[auto] p-[20px] pb-[10vh]">
      <div className="flex justify-between">
        <div className="w-[65%]">
          <div className="flex gap-[10px] mx-[40px]">
            {user.map((e) => {
              return (
                <div className="text-center">
                  <div className="w-[60px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
                      className="rounded-[30px] border-[2px] border-[white] bg-[white]"
                      alt=""
                    />
                  </div>
                  <span className="text-[12px]">{e.userName}</span>
                </div>
              );
            })}
          </div>
          <div className="my-[10vh] ">
            {data.map((e) => {
              return (
                <div
                  key={e.postId}
                  className="w-[500px] h-auto m-auto my-[40px]"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[4px]">
                      <div className="w-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30px] p-[2px]">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-75-512.png"
                          className="rounded-[30px] border-[2px] border-[white] bg-[white]"
                          alt=""
                        />
                      </div>
                      <span className="text-[14px] font-semibold">admin</span>
                    </div>
                    <button onClick={() => dispatch(setOpen(true))}>
                      <MoreVertIcon />
                    </button>
                  </div>{" "}
                  <br />
                  <img
                    src={`${import.meta.env.VITE_APP_FILES_URL}${e.images[0]}`}
                    className="w-[100%]"
                    alt="error"
                  />
                  <div className="p-[2px]">
                    {console.log(
                      `${import.meta.env.VITE_APP_FILES_URL}${e.images[0]}`
                    )}
                    <div className="flex justify-between">
                      <div className="flex gap-[2px] items-center">
                        <div className="text-center">
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                            sx={{
                              color: "red",
                              ":hover": {
                                color: "red",
                              },
                            }}
                            onClick={() => dispatch(likes(e.postId))}
                          />{" "}
                          <br />
                          {e.userLikes}
                        </div>
                        <ModeCommentOutlinedIcon />
                      </div>
                      <Checkbox
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                      />
                    </div>
                    <h1>{e.title}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* modals */}
        <ModalSetings open={open} />

        {/* right side */}

        <div className="mx-[40px] w-[35%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                className="w-[50px] rounded-[30px]"
                alt=""
              />
              <div>
                <h1 className="text-[12px]">betman</h1>
                <h1 className="text-[12px]">noctua 😊</h1>
              </div>
            </div>
            <h1 className="text-[14px] text-[blue]">Переключиться</h1>
          </div>
          <div className="text-[grey] my-[20px] text-[12px] flex justify-between">
            <h1>Рекомендации для вас</h1>
            <h1>Все</h1>
          </div>
          <Followers
            user="betman"
            img="https://i.pinimg.com/originals/02/af/6f/02af6f406b25e5c284daa0c39cf96a9a.jpg"
          />
          <Followers
            user="AMIRTJK"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe-QcdiM2zDMaptVBPduk0oYeAw473xEy48VwSMBBA-Q0AbTRWcB6rxiGX70kPC9HVwM&usqp=CAU"
          />
          <Followers
            user="damir"
            img="https://i.pinimg.com/236x/5f/5d/13/5f5d1320da50c29055bb0c1f12a1d777.jpg"
          />{" "}
          <br />
          <h1 className="text-[grey] text-[14px]">
            Информация Помощь Пресса API Вакансии Конфиденциальность Условия
            Места Язык Meta Verified
          </h1>
          <br />
          <h1 className="text-[grey] text-[12px]">
            © 2023 INSTAGRAM FROM META
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
