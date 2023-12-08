import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalUsers } from "../../reducers/Message/Message";

const ModalUsers = (props) => {
  const dispatch = useDispatch();
  const windowRef = useRef(null);
  console.log(windowRef);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target)) {
        dispatch(setModalUsers(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [windowRef, props]);
  return (
    <div
      className={`${
        props.modal === true ? "block" : "hidden"
      } modal-container bg-[#00000089] fixed z-50 w-full h-full top-0 left-0`}
    >
      <div
        ref={windowRef}
        className="modal bg-[#fff] rounded-[10px] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[43.5%] h-[71vh]"
      >
        {props.children}
      </div>
    </div>
  );
};

export default ModalUsers;
