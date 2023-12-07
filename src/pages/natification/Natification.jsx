import { useDispatch, useSelector } from "react-redux";
import { get } from "../../api/natificationApi/natification";
import { useEffect } from "react";

function Natification() {
  let dispathch = useDispatch();
  let modalnatification = useSelector(
    (store) => store.Natification.ModalNatificationState
  );
  let data = useSelector((store) => store.Natification.data);

  useEffect(() => {
    dispathch(get());
  }, [dispathch]);
  return (
    <div>
      {modalnatification ? (
        <div className=" overflow-y-auto overflow-x-auto fixed p-[2%] left-[3.6%] w-[28%] h-[100%] bg-[white] shadow-xl">
          <div className="font-bold pb-[10%] text-[20px]">
            <h1> Natification</h1>
          </div>
          <div className="  flex flex-col gap-3">
            {data.map((element) => {
              return (
                <div className=" ">
                  <div className=" flex items-center gap-[5%]">
                    <img
                      className=" rounded-[50%] object-cover w-[50px] h-[50px]"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${
                        element.userPhoto
                      }`}
                      alt=""
                    />
                    <div className="flex  w-[100%]  justify-between">
                      <div>
                        <h1 className="bg-[] font-serif">{element.userName}</h1>
                        <h1 className="bg-[] text-[12px]">
                          {element.fullname}
                        </h1>
                      </div>
                      <button className="bg-[#4780dc] h-[1%] text-[white] p-[2%] text-[16px] w-[100px] rounded-[10px]">
                        following
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Natification;
