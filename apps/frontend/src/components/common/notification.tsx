"use client";
import Link from "next/link";
import React from "react";
import TextTruncate from "react-text-truncate";

type NotificationProps = {
  type: "comment" | "message";
};

export const Notification = ({ type }: NotificationProps) => {
  if (type === "comment") {
    return (
      <div className="w-[100%] rounded-[30px] bg-[#222222] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#FF8181]">Comment</p>
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
      </div>
    );
  }
  if (type === "message") {
    return (
      <div className="w-[100%] rounded-[30px] bg-[#222222] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5197FF]">Message</p>
          <p className="text-sm text-[#CBCBCB]">23 Dec, 2024</p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[#CBCBCB]">from:</p>
          <p className="text-sm">@abhi1992002</p>
        </div>

        <div className="text-sm">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text="Lorem Ipsum is simply fewlfmewf dummy text of the printing and typesetting industry."
          />
        </div>
      </div>
    );
  }
};
