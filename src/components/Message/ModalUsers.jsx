import React from "react";

const ModalUsers = (props) => {
  return (
    <div
      className={`${
        props.modal ? "block" : "hidden"
      } modal-container bg-[#00000089] fixed z-30 w-full h-full top-0 left-0`}
    >
      <div className="modal bg-[#fff] rounded-[10px] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-[43.5%] h-[71vh]">
        {props.children}
      </div>
    </div>
  );
};

export default ModalUsers;
