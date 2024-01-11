"use client";
import { HomeMiddle } from "@/components/common/homeMiddle";
import React, { useEffect, useState } from "react";
import { postDetails } from "@/lib/constant";
import { useRecoilState } from "recoil";
import { homeProfilePosts } from "@/store/atoms/home/homeStates";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  const [profilePost, setProfilePost] = useRecoilState(homeProfilePosts);
  useEffect(() => {
    // access userId

    // accessing posts using userID

    // storing them in state
    setProfilePost(postDetails);
  });

  return <>{profilePost && <HomeMiddle type="all" />}</>;
};

export default Dashboard;
