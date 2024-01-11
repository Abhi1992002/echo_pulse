import Image from "next/image";
import React from "react";
import { UserAvatar } from "../common/userAvatar";

import { Button } from "../ui/button";
import ReactCountryFlag from "react-country-flag";
import { TimeLine } from "./timeLine";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { SkillProfile } from "../common/skillProfile";

type MainProfileProps = {
  profileData: {
    userId: string;
    coverImg: string;
    userImg: string;
    followers: number;
    following: number;
    github_link: string;
    linkedin_link: string;
    twitter_link: string;
    name: string;
    username: string;
    small_description: string;
    country_code: string;
    country_name: string;
    role: string;
    full_description: string;
    work_experience: { date: string; heading: string; content: string }[];
    education: { date: string; heading: string; content: string }[];
    skills: { skill: string }[];
  };
};

export const MainProfile = ({ profileData }: MainProfileProps) => {
  return (
    <div className="w-[100%] h-[100%] overflow-auto  rounded-[30px]  flex flex-col items-center no-scrollbar">
      <div className="flex flex-col w-[100%] bg-[#282828] items-center">
        {/* cover image  */}
        <div
          style={{ borderRadius: "30px 30px 0px 0px" }}
          className="w-[100%] overflow-hidden h-[150px] relative"
        >
          <Image
            fill
            src={profileData.coverImg}
            alt="image"
            className="w-[100%] object-cover"
          />
        </div>

        {/* middle info */}
        <div className="flex items-center justify-center w-[100%]">
          <div className="w-[90%] flex items-center justify-between text-white ">
            {/* Avatar */}
            <div className="text-center flex items-center justify-center flex-col relative top-[-70px] gap-8 ">
              <UserAvatar
                userImg="https://github.com/shadcn.png"
                size={"lg"}
                className="w-[146.33px] h-[145px] rounded-[30px] z-[1] border-4 border-[#282828]"
              />

              <div className="flex items-center justify-center flex-col gap-4">
                {/* friend Request */}
                <div className="text-center relative">
                  <Button tone="dark" className=" border">
                    Friend Request
                  </Button>
                </div>
                {/* follow */}
                <div className="text-center relative  w-full">
                  <Button tone="bright">Follow</Button>
                </div>
              </div>
            </div>

            {/* followers  box */}
            <div className="flex justify-between gap-8 flex-col  w-[100%] items-center relative top-[-20px]">
              {/* following / followers*/}
              <div className="flex items-center justify-center gap-8">
                <div className="text-center relative ">
                  <h1 className="text-3xl font-semibold">
                    {profileData.following}
                  </h1>
                  <p className="text-sm text-[#7D7D7D]">Following</p>
                </div>
                {/* following*/}
                <div className="text-center relative ">
                  <h1 className="text-3xl font-semibold">
                    {profileData.followers}
                  </h1>
                  <p className="text-sm text-[#7D7D7D]">Followers</p>
                </div>
              </div>

              {/* potfolio */}
              <div
                role="button"
                className="flex bg-[#222222] p-7 rounded-[30px] w-fit text-lg text-white font-semibold uppercase items-center justify-center gap-8"
              >
                <Link href={profileData.github_link}>
                  <Github className="hover:fill-white" />
                </Link>
                <Link href={profileData.linkedin_link}>
                  <Linkedin className="hover:fill-white" />
                </Link>
                <Link href={profileData.twitter_link}>
                  <Twitter className="hover:fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* small description */}
        <div className="text-white text-center flex items-center justify-between  w-[90%]">
          <div className="mt-[-30px]">
            {/* name */}
            <p className=" text-3xl font-semibold">{profileData.name}</p>

            {/* usernmae */}
            <p className=" text-3xl text-[#7D7D7D] ">{profileData.username}</p>
          </div>

          <div className="flex gap-4 flex-col">
            <p className="text-sm text-start ml-[50px]">
              {profileData.small_description}
            </p>
            <div className=" ml-[50px] flex  items-center gap-2">
              <ReactCountryFlag
                countryCode={profileData.country_code}
                aria-label="India"
                style={{
                  fontSize: "24px",
                }}
                className="text-[24px]"
              />
              <p className="text-sm text-start">{profileData.country_name}</p>
            </div>

            <p className="text-sm text-start ml-[50px]">{profileData.role}</p>
          </div>
        </div>

        {/* descriptions */}
        <div className="w-[90%] mt-[30px] mb-[20px] text-white text-start text-sm flex flex-col gap-8">
          <p>{profileData.full_description}</p>
        </div>

        {/* Work Experience / Education */}
        <div className="w-[90%] text-white">
          <TimeLine
            works={profileData.work_experience}
            education={profileData.education}
          />
        </div>

        {/* Skills */}
        <div className="w-[90%] text-white mb-[30px]">
          <SkillProfile skills={profileData.skills} />
        </div>
      </div>
    </div>
  );
};
