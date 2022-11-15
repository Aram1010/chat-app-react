import React from "react";
import { auth } from "../firebase";

const Message = ({ message }) => {
  return (
    <div className="">
      {message.uid === auth.currentUser.uid ? (
        <div className="m-[10px] float-right max-w-[300px]">
          <p className="text-[12px]">{message.name}</p>
          <p className="bg-[#4B67F2] text-[#ffff] break-words rounded-t-[30px] shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-bl-[30px] p-[12px]">
            {message.text}
          </p>
        </div>
      ) : (
        <div className="m-[10px] float-left max-w-[300px]">
          <p className="text-[12px] text-[#A8A3B7]">{message.name}</p>
          <p className="bg-[#ffff] text-[#000] break-words rounded-t-[30px] shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-br-[30px] p-[12px]">
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Message;
