"use client";
import { aiChatSidebar } from "@/store/sideBar";
import { MoreVertical } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { useSetRecoilState } from "recoil";

type AiChatUserProps = {
  chat: string;
  chatId: string;
};

export const AiChatUser = ({ chat, chatId }: AiChatUserProps) => {
  const navigate = useNavigate();
  const setAiChatSidebarId = useSetRecoilState(aiChatSidebar);

  const chatHandler = () => {
    navigate(`dashboard/ai?chatId=${chatId}`);
    const id = location.search.split("=")[1];
    setAiChatSidebarId(id);
  };

  return (
    <div
      role="button"
      onClick={chatHandler}
      className=" w-[95%] p-2 pl-4 py-4 bg-[#2F2E2E] border border-white/40 rounded-[15px] hover:border-[#FFFD00] hover:cursor-pointer flex justify-between items-center"
    >
      <div className="text-sm">
        <TextTruncate line={1} element="span" truncateText="…" text={chat} />
      </div>

      <div role="button">
        <MoreVertical className=" text-white/70 w-[20px]" />
      </div>
    </div>
  );
};
