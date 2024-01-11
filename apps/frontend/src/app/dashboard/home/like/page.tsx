"use client";
import { HomeMiddle } from "@/components/common/homeMiddle";
import React, { useEffect, useState } from "react";
import { postDetails } from "@/lib/constant";
import { useRecoilState } from "recoil";
import { homeProfilePosts } from "@/store/atoms/home/homeStates";

type DashboardProps = {};

const DashboardLiked = ({}: DashboardProps) => {
  const [profilePost, setProfilePost] = useRecoilState(homeProfilePosts);

  useEffect(() => {
    // accessing likedposts using userID

    // storing  them in state
    setProfilePost(postDetails);
  });

  return <>{profilePost && <HomeMiddle type={"liked"} />}</>;
};

export default DashboardLiked;
