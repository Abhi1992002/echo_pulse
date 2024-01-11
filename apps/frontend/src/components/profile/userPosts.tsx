import React, { useEffect, useState } from "react";
import { Post } from "../common/post";

type UserPostProps = {
  posts: {
    userId: string;
    userImg: string;
    username: string;
    name: string;
    isliked: boolean;
    isVerified: boolean;
    description: string;
    image_url?: string;
    video_url?: string;
  }[];
};

export const UserPosts = ({ posts }: UserPostProps) => {
  return (
    <div className="w-[100%] h-[100%] overflow-auto  rounded-[30px] no-scrollbar text-white flex items-center flex-col">
      {/* heading */}
      <div className="sticky top-0 w-[95%]  p-4 bg-[#1A1A1A] z-[100] border-b border-white/40">
        <p className="text-base font-semibold">Recent Posts</p>
      </div>

      {/* all posts */}

      <div className="mt-[20px] w-[95%]">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
};
