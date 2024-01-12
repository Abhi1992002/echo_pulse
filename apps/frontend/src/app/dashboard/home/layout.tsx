"use client";
import { NotificationCard } from "@/components/common/notificationCard";
import { ProfileSmall } from "@/components/common/smallProfile";
import {
  friendRequestData,
  notificationData,
  userSmallProfileData,
} from "@/lib/constant";
import {
  homeFriendRequest,
  homeNotification,
  homeProfileData,
} from "@/store/atoms/home/homeStates";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

type homeAndLikeLayoutProps = {
  children: React.ReactNode;
};

const homeAndLikeLayout = ({ children }: homeAndLikeLayoutProps) => {
  const [profileData, setProfileData] = useRecoilState(homeProfileData);
  const [notification, setNotification] = useRecoilState(homeNotification);
  const [friendRequest, setFriendRequest] = useRecoilState(homeFriendRequest);
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    // access userId
    const id = user?.id;

    // accessing posts and userData using userID

    // storing them in state
    setProfileData(userSmallProfileData);
    setNotification(notificationData);
    setFriendRequest(friendRequestData);
  });
  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center">
        <div className="w-[100%] h-[100%] max-w-[1440px] grid grid-rows-1 grid-cols-4 grid-flow-rows gap-6  p-6 pt-4">
          <section className="col-span-1 row-span-1">
            {profileData && <ProfileSmall />}
          </section>

          <section className="row-span-1 col-span-2 ">{children}</section>

          <section className="row-span-1 col-span-1">
            <NotificationCard />
          </section>
        </div>
      </main>
    </>
  );
};

export default homeAndLikeLayout;
