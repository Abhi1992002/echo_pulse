"use client";
import React from "react";
import { HomeProfileCard } from "../home/homeProfileCard";
import { SkillProfile } from "./skillProfile";

import { useRecoilValue } from "recoil";
import { homeProfileData } from "@/store/atoms/home/homeStates";

interface ProfileSmallProps {}

export const ProfileSmall = ({}: ProfileSmallProps) => {
  const userData = useRecoilValue(homeProfileData);

  return (
    <div className="w-[100%] h-[100%] flex items-center flex-col text-white gap-4 overflow-auto no-scrollbar">
      <HomeProfileCard userProfileDetail={userData} />
      <div className="pl-[20px]">
        <SkillProfile skills={userData.smallSkillList} />
      </div>

      <div
        role="button"
        // onClick={() => navigate(PORTFOLIO_LINK)}
        className="z-[1] mt-[20px] p-[20px] h-full w-[300px] flex items-center justify-center rounded-[15px] bg-[#2F2E2E] hover:text-black hover:bg-white hover:cursor-pointer max-h-[200px]"
      >
        <p className="text-2xl">Creator's Porfolio</p>
      </div>
    </div>
  );
};
