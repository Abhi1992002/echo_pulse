import { NotificationCard } from "@/components/common/notificationCard";
import { ProfileSmall } from "@/components/common/smallProfile";
import { HomeMiddle } from "@/components/common/homeMiddle";
import React from "react";

type DashboardProps = {};

const Dashboard = ({}: DashboardProps) => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-[100%] h-[100%] max-w-[1440px] grid grid-rows-1 grid-cols-4 grid-flow-rows gap-6  p-6 pt-4">
        <section className="col-span-1 row-span-1">
          <ProfileSmall />
        </section>

        <section className="row-span-1 col-span-2 ">
          <HomeMiddle posts="all" />
        </section>

        <section className="row-span-1 col-span-1">
          <NotificationCard />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
