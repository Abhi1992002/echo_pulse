"use client";
import { MoreVertical, PlusCircle } from "lucide-react";
import React from "react";
import { ChatUser } from "../chat/chatUser";
import { toasterPromise } from "@/lib/toast";
import { AiChatUser } from "../ai/aiChatUser";

type ChatSidebarProps = {
  type: "ai" | "normal";
};

const chats = [
  {
    chat: "Create an HTML boilerplate for this",
    chatId: "e324cdd",
  },
  {
    chat: "Can you help me with an HTML boilerplate?",
    chatId: "a3b1fde",
  },
  {
    chat: "I need an HTML boilerplate code, please.",
    chatId: "g567abc",
  },
  {
    chat: "Could you provide an example HTML boilerplate?",
    chatId: "h8i2jkl",
  },
  {
    chat: "I'm looking for a basic HTML boilerplate.",
    chatId: "m9n0pqr",
  },
  {
    chat: "Give me a sample HTML boilerplate code.",
    chatId: "z1x2c3v",
  },
  {
    chat: "HTML boilerplate, please!",
    chatId: "k4l5mno",
  },
  {
    chat: "I need a starting HTML boilerplate.",
    chatId: "p6q7r8s",
  },
  {
    chat: "Can you create an HTML boilerplate for me?",
    chatId: "t9u0vwx",
  },
  {
    chat: "HTML boilerplate code, anyone?",
    chatId: "y1z2a3b",
  },
  {
    chat: "Please provide a simple HTML boilerplate.",
    chatId: "c4d5e6f",
  },
  {
    chat: "I'm looking for an HTML boilerplate template.",
    chatId: "g7h8i9j",
  },
  {
    chat: "HTML boilerplate example, please!",
    chatId: "k0l1m2n",
  },
  {
    chat: "Can you give me a standard HTML boilerplate?",
    chatId: "o3p4q5r",
  },
  {
    chat: "I need an HTML boilerplate starting point.",
    chatId: "s6t7u8v",
  },
];

export const ChatSidebar = ({ type }: ChatSidebarProps) => {
  const newChatCreatedHandler = () => {
    const addingNewAIChat = new Promise((resolve) => {
      setTimeout(() => {
        resolve("1");
      }, 1000);
    });

    toasterPromise({
      promise: addingNewAIChat,
      loadingMsg: "Creating...",
      successMsg: "Created..!!",
      errorMsg: "failed",
    });
  };

  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#282828] rounded-[30px] overflow-auto no-scrollbar">
        <div className="w-[100%] py-4 px-8 border-b  border-white/40 flex items-center justify-between sticky top-0 z-10 bg-[#282828]">
          <p className="text-base font-semibold">
            {type === "ai" && "Chat with AI"}
            {type === "normal" && "Friends"}
          </p>

          {type === "normal" && (
            <div role="button">
              <MoreVertical className="w-[20px] h-[20px] hover:cursor-pointer" />
            </div>
          )}

          {type === "ai" && (
            <div role="button" onClick={newChatCreatedHandler}>
              <PlusCircle className="w-[20px] h-[20px] hover:cursor-pointer" />
            </div>
          )}
        </div>

        {type == "normal" && (
          <div className="w-[100%]  mt-4 flex flex-col gap-4">
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
            <ChatUser />
          </div>
        )}

        {type == "ai" && (
          <div className="w-[100%]  mt-4 flex items-center flex-col gap-4">
            {chats.map(({ chat, chatId }) => {
              return <AiChatUser chat={chat} chatId={chatId} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
