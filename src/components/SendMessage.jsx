import React, { useState } from "react";
import { faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendText = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("enter a message");
      return;
    }

    const { uid, displayName } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAFAFA] p-[10px] m-[10px] rounded-[50px] absolute w-[95%] bottom-[0] mx-auto left-0 right-0">
      <form
        onSubmit={sendText}
        className="flex justify-between items-center"
        action=""
      >
        <input
          className="bg-[#FAFAFA] p-[5px] outline-none"
          type="text"
          placeholder="Messsage"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="flex justify-between">
          <FontAwesomeIcon icon={faPaperPlane} className="text-[#A8A3B7]" />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
