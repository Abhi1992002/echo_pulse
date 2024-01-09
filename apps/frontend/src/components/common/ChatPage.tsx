"use client";
import React, { useEffect } from "react";
import { ChatInput } from "../chat/chatInput";
import { ChatPageHeader } from "../chat/chatPageHeader";
import { UserBubbleMe } from "./userBubbleMe";
import { UserBubbleOther } from "./userBubbleOther";
import { useRecoilState } from "recoil";
import { aiChatSidebar } from "@/store/sideBar";
import { PlusIcon } from "lucide-react";
import { toasterPromise } from "@/lib/toast";
import { useNavigate } from "react-router-dom";

type ChatPageProps = {
  type: "ai" | "normal";
};

const factorialCode = `function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
`;

const codeObj = {
  language: "Javascript",
  code: factorialCode,
};

export const ChatPage = ({ type }: ChatPageProps) => {
  const [chatId, setChatId] = useRecoilState(aiChatSidebar);
  const navigate = useNavigate();

  const newChatCreatedHandler = () => {
    const addingNewAIChat = new Promise((resolve) => {
      setTimeout(() => {
        resolve("1");
      }, 1000);
    }).then(() => {
      const chatId = "ewlfkhwef";
      navigate(`dashboard/ai?chatId=${chatId}`);
      const id = location.search.split("=")[1];
      setChatId(id);
    });

    toasterPromise({
      promise: addingNewAIChat,
      loadingMsg: "Creating...",
      successMsg: "Created..!!",
      errorMsg: "failed",
    });
  };

  useEffect(() => {
    const id = location.search.split("=")[1];
    setChatId(id);
  });

  if (type === "ai" && chatId) {
    return (
      <div className="w-[100%] h-[100%]  rounded-[30px]">
        {/* message */}
        {chatId}
        <div className="h-[100%] overflow-auto no-scrollbar pb-36">
          <UserBubbleOther type="ai" />
          <UserBubbleMe src="/car.jpeg" />
          <UserBubbleOther type="ai" codeObj={codeObj} />
          <UserBubbleMe />
          <UserBubbleOther type="ai" src="/car.jpeg" />
          <UserBubbleMe />
          <UserBubbleOther type="ai" />
          <UserBubbleMe />
        </div>

        {/* message */}
        <div className="p-2 sticky bottom-0 py-4 pb-0  border-t bg-[#1A1A1A] border-white/40">
          <ChatInput />
        </div>
      </div>
    );
  }

  if (type === "normal" && chatId) {
    return (
      <div className="w-[100%] h-[100%]  rounded-[30px]">
        <div className="p-2  sticky bottom-0   bg-[#1A1A1A]  border-b border-white/40 ">
          <ChatPageHeader />
        </div>

        {/* message */}
        <div className="h-[100%] overflow-auto no-scrollbar pb-36">
          <UserBubbleOther type="normal" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" src="/car.jpeg" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" />
          <UserBubbleMe src="/car.jpeg" />
        </div>

        {/* message */}
        <div className="p-2 sticky bottom-0 py-4 pb-0  border-t bg-[#1A1A1A] border-white/40">
          <ChatInput />
        </div>
      </div>
    );
  }

  if (!chatId) {
    return (
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <div
          role="button"
          onClick={newChatCreatedHandler}
          className="bg-[#282828] w-[200px] aspect-square rounded-[30px] flex items-center hover:text-black hover:bg-white hover:cursor-pointer text-white justify-center"
        >
          <PlusIcon className=" w-[140px] h-[140px]" />
        </div>
      </div>
    );
  }
};
