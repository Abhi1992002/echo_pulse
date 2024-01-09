"use client";
import React from "react";
import { Notification } from "./notification";
import { useRecoilState } from "recoil";
import { homeNotificationToggle } from "@/store/toggle";
import { cn } from "@/lib/utils";
import { FriendRequestCard } from "./friendRequestCard";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

type NotificationProps = {};

export const NotificationCard = ({}: NotificationProps) => {
  const [notificationToggle, setNotificationToggle] = useRecoilState(
    homeNotificationToggle
  );

  return (
    <>
      <div className="w-[100%] min-w-[330px] h-[100%] rounded-[30px] text-white bg-[#282828] p-6 pt-0 overflow-auto no-scrollbar">
        <div>
          {/* heading */}
          <div
            className={cn(
              "sticky top-0 bg-[#282828] border-b pt-6  border-white/50 mb-3  flex items-start justify-between gap-2 z-[10]"
            )}
          >
            <div
              role="button"
              onClick={() => setNotificationToggle("notification")}
              className={cn(
                "flex items-center gap-2 text-[#7D7D7D] hover:text-white",
                notificationToggle === "notification" && "text-white"
              )}
            >
              <p className="text-base font-semibold mb-4 ml-4 ">Notification</p>
            </div>

            <div
              role="button"
              onClick={() => setNotificationToggle("friend_request")}
              className={cn(
                "flex items-center gap-2 text-[#7D7D7D] hover:text-white",
                notificationToggle === "friend_request" && "text-white"
              )}
            >
              <p className="text-base font-semibold mb-4 ml-4 ">
                Friend Request
              </p>
            </div>
          </div>

          {/* notificaitons */}

          {notificationToggle === "notification" && (
            <div className="flex gap-2 flex-col">
              <Notification type="comment" />
            </div>
          )}

          {/* friend request */}
          {notificationToggle === "friend_request" && (
            <div className="flex gap-2 flex-col">
              <div className="relative flex items-center gap-2">
                <Search className="text-[#7D7D7D] w-[20px] " />
                <Input
                  className="bg-[#222222] border-none text-sm placeholder:text-sm placeholder:text-[#7D7D7D] outline-none"
                  placeholder="Search request by username"
                />
              </div>

              <FriendRequestCard />
              <FriendRequestCard />
              <FriendRequestCard />
              <FriendRequestCard />
              <FriendRequestCard />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
