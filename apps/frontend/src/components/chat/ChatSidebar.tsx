import { MoreVertical } from "lucide-react";
import React from "react";
import { ChatUser } from "./chatUser";

type ChatSidebarProps = {};

export const ChatSidebar = ({}: ChatSidebarProps) => {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#282828] rounded-[30px] overflow-auto no-scrollbar">
        <div className="w-[100%] py-4 px-8 border-b  border-white/40 flex items-center justify-between sticky top-0 z-10 bg-[#282828]">
          <p className="text-base font-semibold">Friends</p>
          <MoreVertical className="w-[20px] h-[20px] hover:cursor-pointer" />
        </div>

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

        {/* <div className="w-[100%] py-4 px-8 border-t  border-white/40 flex items-center justify-between sticky bottom-0 z-10 bg-[#282828]"></div> */}
      </div>
    </>
  );
};
