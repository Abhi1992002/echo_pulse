import Link from "next/link";
import React, { useEffect, useState } from "react";
import TextTruncate from "react-text-truncate";
import { Button } from "../ui/button";

type FriendRequestCardProps = {};

export const FriendRequestCard = ({}: FriendRequestCardProps) => {
  return (
    <>
      <div className="w-[100%] rounded-[30px] bg-[#222222] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#FF8181]">Friend Request</p>
          <p className="text-sm text-[#CBCBCB]">23 Dec, 2024</p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[#CBCBCB]">from:</p>
          <Link href={"/"} className="]">
            <p className="text-sm hover:text-[#FFFD00] hover:cursor-pointer">
              @abhi1992002
            </p>
          </Link>
        </div>

        <div className="text-sm">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text="Lorem Ipsum is simply fewlfmewf dummy text of the printing and typesetting industry."
          />
        </div>

        <hr className="border-white/40 my-4" />

        <div className="text-xs flex gap-4 items-center justify-end">
          <Button tone="dark" className="w-fit py-1">
            Reject
          </Button>
          <Button tone="bright" className="w-fit">
            Accept
          </Button>
        </div>
      </div>
    </>
  );
};
