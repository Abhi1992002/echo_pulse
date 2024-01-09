import { Navigation } from "@/components/common/navigation";
import { MainProfile } from "@/components/profile/mainProfile";
import { UserPosts } from "@/components/profile/userPosts";
import React from "react";

type DashboardProfileProps = {
  params: { profileId: string };
};

const DashboardProfile = ({ params }: DashboardProfileProps) => {
  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <main className="flex h-[100%] max-w-[1440px] flex-col w-[100%] p-4 pb-4 gap-2">
        {/* navigation */}
        <section className=" w-[100%] pt-4 rounded-[15px] bg-[#282828] flex items-center justify-center">
          <Navigation />
          <p>{params.profileId}</p>
        </section>
        <div className="w-[100%] h-[calc(100%-60px)]  grid grid-rows-1 grid-cols-5 grid-flow-col gap-2">
          <section className=" row-span-1 col-span-2">
            <MainProfile />
          </section>
          <section className=" row-span-1 col-span-3 overflow-auto no-scrollbar">
            <UserPosts />
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardProfile;
