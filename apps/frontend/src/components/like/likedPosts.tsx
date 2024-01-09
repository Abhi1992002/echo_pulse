"use client";
import React from "react";
import { Post } from "../common/post";

type LikedPostProps = {};

export const LikedPost = ({}: LikedPostProps) => {
  return (
    <>
      <>
        <Post like={true} />
        <Post like={true} />
        <Post like={true} />
        <Post like={true} />
        <Post like={true} />
        <Post like={true} />
        <Post like={true} />
      </>
    </>
  );
};
