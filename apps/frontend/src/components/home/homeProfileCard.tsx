import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type HomeProfileCardProps = {
  userProfileDetail: {
    coverImg: string;
    followers: number;
    following: number;
    name: string;
    username: string;
    description: string;
    userImage: string;
    userId: string;
  };
};

export const HomeProfileCard = ({
  userProfileDetail,
}: HomeProfileCardProps) => {
  return (
    <>
      <div className="w-[300px]  flex flex-col items-center rounded-[30px] bg-[#282828]">
        {/* cover image */}
        <div
          style={{ borderRadius: "30px 30px 0px 0px" }}
          className="w-[100%] overflow-hidden h-[150px] relative"
        >
          <Image
            fill
            src={"/back.jpg"}
            alt="image"
            className="w-[100%] object-cover"
          />
        </div>

        {/* middle info */}
        <div className="flex items-center justify-center w-[100%]">
          <div className="w-[90%] flex items-center justify-between text-white">
            {/* followers */}
            <div className="text-center relative top-[-20px]">
              <h1 className="text-base font-semibold">
                {userProfileDetail.followers}
              </h1>
              <p className="text-sm text-[#7D7D7D]">Followers</p>
            </div>

            {/* Avatar */}
            <div className="text-center flex items-center justify-center flex-col relative top-[-40px] gap-8">
              <Avatar className="w-[86px] h-[85px] rounded-[30px] z-[1] border-4 border-[#282828]">
                <AvatarImage src={userProfileDetail.userImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                {/* name */}
                <p className="text-base font-semibold">
                  {userProfileDetail.name}
                </p>

                {/* usernmae */}
                <p className="text-sm text-[#7D7D7D]">
                  {userProfileDetail.username}
                </p>
              </div>
            </div>

            {/* following*/}
            <div className="text-center relative top-[-20px]">
              <h1 className="text-base font-semibold">
                {userProfileDetail.following}
              </h1>
              <p className="text-sm text-[#7D7D7D]">Following</p>
            </div>
          </div>
        </div>

        {/* descriptions */}
        <div className="w-[90%] mt-[-15px] mb-[20px] text-white text-center text-sm flex flex-col gap-8">
          <p>{userProfileDetail.description}</p>
          <Link href={`/dashboard/profile?userId=${userProfileDetail.userId}`}>
            <Button tone="dark">Your Profile</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
