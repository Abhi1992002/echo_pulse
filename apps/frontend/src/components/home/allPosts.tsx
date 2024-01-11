import React from "react";
import { Post } from "../common/post";

type AllPostsProps = {
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

export const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
};
