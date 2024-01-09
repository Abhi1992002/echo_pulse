"use client";
import React, { useEffect, useState } from "react";
import { UserAvatar } from "../common/userAvatar";
import { BadgeCheck, Circle, MoreVertical } from "lucide-react";

type ChatPageHeaderProps = {};

export const ChatPageHeader = ({}: ChatPageHeaderProps) => {
  return (
    <div className="flex gap-4 pr-8 pl-0 items-center hover:cursor-pointer  relative py-0 w-[100%] ">
      {/* avatar */}
      <div className="flex w-[100%] gap-4 pl-4 flex-1 hover:cursor-pointer  relative py-0 ">
        <div>
          <UserAvatar size={"sm"} />
        </div>

        {/* username */}
        <div className="flex flex-col gap-1">
          {/* username */}
          <div className="flex gap-1">
            <p className="text-xs text-[#7D7D7D]">@abhi1992002</p>
            <BadgeCheck className="w-[18x] h-[18px] text-[#5197FF]" />
          </div>

          {/* name */}
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Abhimanyu</p>

            <div className="flex gap-1 items-center">
              <p className="text-[#FFFD00]">
                <Circle className="bg-[#FFFD00] w-1 h-1 rounded-e-full" />
              </p>
              <p className="text-sm text-[#FFFD00]">online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit flex gap-2 flex-col items-end">
        <MoreVertical className="text-[#7D7D7D] w-[20px] h-[20px]  bottom-[30px] hover:text-[#FFFD00]" />
      </div>
    </div>
  );
};
