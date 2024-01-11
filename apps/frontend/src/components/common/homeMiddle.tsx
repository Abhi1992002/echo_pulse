import React from "react";
import { PostCreator } from "../home/postCreator";
import { AllPosts } from "../home/allPosts";
import { Navigation } from "./navigation";
import { useRecoilValue } from "recoil";
import { homeProfilePosts } from "@/store/atoms/home/homeStates";

type HomeMiddleProps = {
  type: "liked" | "all";
};

export const HomeMiddle = ({ type }: HomeMiddleProps) => {
  const posts = useRecoilValue(homeProfilePosts);
  return (
    <>
      <div className=" border-b pt-2  border-white/50">
        <Navigation />
      </div>
      <div className="w-[100%] flex flex-col text-white gap-4 pb-[30px] h-[100%] no-scrollbar overflow-auto ">
        <div className="mt-4">{type === "all" && <PostCreator />}</div>
        <AllPosts posts={posts} />
      </div>
    </>
  );
};
