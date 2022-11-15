import React from "react";

const Message = ({message}) => {
  return (
    <div className="m-[10px]">
        <p>Arman</p>
        <p className="bg-[#4B67F2] text-[#ffff] rounded-t-[50px] rounded-bl-[50px] p-[12px] w-[100%]">
          {message.text}
        </p>
    </div>
  );
};

export default Message;
