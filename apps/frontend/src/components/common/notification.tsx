"use client";
import { notificationType, notificationTypeEnum } from "@/types/common";
import Link from "next/link";
import React from "react";
import TextTruncate from "react-text-truncate";

type NotificationProps = {
  notification: notificationType;
};

export const Notification = ({ notification }: NotificationProps) => {
  if (notification.type === notificationTypeEnum.comment) {
    return (
      <div className="w-[100%] rounded-[30px] bg-[#222222] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#FF8181]">Comment</p>
          <p className="text-sm text-[#CBCBCB]">{notification.date}</p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[#CBCBCB]">from:</p>
          <Link href={"/"} className="]">
            <p className="text-sm hover:text-[#FFFD00] hover:cursor-pointer">
              {notification.from}
            </p>
          </Link>
        </div>

        <div className="text-sm">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={notification.message}
          />
        </div>
      </div>
    );
  }
  if (notification.type === notificationTypeEnum.message) {
    return (
      <div className="w-[100%] rounded-[30px] bg-[#222222] p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#5197FF]">Message</p>
          <p className="text-sm text-[#CBCBCB]">{notification.date}</p>
        </div>

        <div className="flex gap-2">
          <p className="text-sm text-[#CBCBCB]">from:</p>
          <p className="text-sm">{notification.from}</p>
        </div>

        <div className="text-sm">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={notification.message}
          />
        </div>
      </div>
    );
  }
};
