import React, { useEffect, useState } from "react";
import { UserAvatar } from "./userAvatar";
import { BadgeCheck, Circle } from "lucide-react";
import Link from "next/link";

type UserListProps = {};

const users = [
  {
    username: "@abhi1992002",
    name: "Abhimanyu",
    isOnline: true,
    isVerified: true,
    userId: "1efy123e",
  },

  {
    username: "@jane_doe",
    name: "Jane Doe",
    isOnline: false,
    isVerified: true,
    userId: "1efy123f",
  },
  {
    username: "@john_smith",
    name: "John Smith",
    isOnline: true,
    isVerified: false,
    userId: "1efy123g",
  },
  {
    username: "@alex1984",
    name: "Alex Johnson",
    isOnline: false,
    isVerified: true,
    userId: "1efy123h",
  },
  {
    username: "@sarah_connor",
    name: "Sarah Connor",
    isOnline: true,
    isVerified: true,
    userId: "1efy123i",
  },
  {
    username: "@mike_w",
    name: "Mike Wheeler",
    isOnline: false,
    isVerified: false,
    userId: "1efy123j",
  },
  {
    username: "@lucy_sky",
    name: "Lucy Sky",
    isOnline: true,
    isVerified: false,
    userId: "1efy123k",
  },
  {
    username: "@omar_little",
    name: "Omar Little",
    isOnline: false,
    isVerified: true,
    userId: "1efy123l",
  },
  {
    username: "@chris_p_bacon",
    name: "Chris P. Bacon",
    isOnline: true,
    isVerified: false,
    userId: "1efy123m",
  },
  {
    username: "@karen_reyes",
    name: "Karen Reyes",
    isOnline: false,
    isVerified: false,
    userId: "1efy123n",
  },
  {
    username: "@dave_grohl",
    name: "Dave Grohl",
    isOnline: true,
    isVerified: true,
    userId: "1efy123o",
  },
  {
    username: "@emma_2021",
    name: "Emma Clark",
    isOnline: false,
    isVerified: true,
    userId: "1efy123p",
  },
  {
    username: "@leo_valdez",
    name: "Leo Valdez",
    isOnline: true,
    isVerified: false,
    userId: "1efy123q",
  },
  {
    username: "@lisa_m",
    name: "Lisa Morrison",
    isOnline: false,
    isVerified: true,
    userId: "1efy123r",
  },
  {
    username: "@max_thunder",
    name: "Max Thunder",
    isOnline: true,
    isVerified: false,
    userId: "1efy123s",
  },
];

type userType = {
  username: string;
  name: string;
  isVerified: boolean;
  isOnline: boolean;
  userId: string;
};

export const UserList = ({}: UserListProps) => {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <div className="text-white flex gap-4 flex-col mt-[20px] h-max-[300px] h-[300px] overflow-auto scrollbar">
        {users.map((user, i) => {
          return (
            <User
              userId={user.userId}
              key={user.username}
              username={user.username}
              name={user.name}
              isOnline={user.isOnline}
              isVerified={user.isVerified}
            />
          );
        })}
      </div>
    </>
  );
};

const User = ({ username, name, isOnline, isVerified, userId }: userType) => {
  return (
    <>
      <Link
        href={`/dashboard/profile/${userId}`}
        className="flex w-[100%] gap-4 pl-4 flex-1 hover:cursor-pointer  relative py-0 "
      >
        <div>
          <UserAvatar size={"sm"} />
        </div>

        {/* username */}
        <div className="flex flex-col gap-1">
          {/* username */}
          <div className="flex gap-1">
            <p className="text-xs text-[#7D7D7D]">{username}</p>
            {isVerified && (
              <BadgeCheck className="w-[18x] h-[18px] text-[#5197FF]" />
            )}
          </div>

          {/* name */}
          <div className="flex gap-2">
            <p className="text-sm font-semibold">{name}</p>

            {isOnline && (
              <div className="flex gap-1 items-center">
                <p className="text-[#FFFD00]">
                  <Circle className="bg-[#FFFD00] w-1 h-1 rounded-e-full" />
                </p>
                <p className="text-sm text-[#FFFD00]">online</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};
