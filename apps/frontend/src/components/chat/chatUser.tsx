"use client";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { BadgeCheck, ChevronDown, Circle, MoreVertical } from "lucide-react";
import TextTruncate from "react-text-truncate";
import { friendChatType } from "@/types/common";

type ChatUserProps = {
  friend: friendChatType;
};

export const ChatUser = ({ friend }: ChatUserProps) => {
  return (
    <div className="flex gap-4 pr-8 pl-0 items-center hover:cursor-pointer hover:bg-[#2F2E2E] relative py-2 w-[100%] ">
      {/* avatar */}
      <div className="flex w-[100%] gap-4 pl-4 flex-1 hover:cursor-pointer hover:bg-[#2F2E2E] relative py-2 ">
        <div>
          <Avatar className="w-10 h-12 rounded-[5px]  z-[1]">
            <AvatarImage src={friend.userImg} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* username */}
        <div className="flex flex-col w-[100%]">
          {/* username */}

          <div className="flex gap-2 mb-2">
            <p className="text-sm text-white">{friend.username}</p>
            {!friend.isVerified && (
              <BadgeCheck className="w-[20px] h-[20px] text-[#5197FF]" />
            )}
          </div>

          <div className="text-sm text-[#7D7D7D]">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={friend.message}
            />
          </div>
        </div>
      </div>

      <div className="w-fit flex gap-2 flex-col items-end">
        <p className="text-xs translate-x-4 ">{friend.date}</p>
        <ChevronDown className="text-[#7D7D7D] w-[20px] h-[20px]  bottom-[30px] hover:text-[#FFFD00]" />
      </div>
    </div>
  );
};
