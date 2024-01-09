import React from "react";
import { PostCreator } from "../home/postCreator";
import { AllPosts } from "../home/allPosts";
import { Navigation } from "./navigation";
import { LikedPost } from "../like/likedPosts";

type HomeMiddleProps = {
  posts: "liked" | "all";
};

export const HomeMiddle = ({ posts }: HomeMiddleProps) => {
  return (
    <>
      <div className=" border-b pt-2  border-white/50">
        <Navigation />
      </div>
      <div className="w-[100%] flex flex-col text-white gap-4 pb-[30px] h-[100%] no-scrollbar overflow-auto ">
        <div className="mt-4">{posts === "all" && <PostCreator />}</div>

        {posts === "liked" && <LikedPost />}
        {posts === "all" && <AllPosts />}
      </div>
    </>
  );
};
