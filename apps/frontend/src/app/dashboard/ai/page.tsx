import { ChatPage } from "@/components/common/ChatPage";
import { ChatSidebar } from "@/components/common/ChatSidebar";
import { Navigation } from "@/components/common/navigation";

import React from "react";

type DashboardAIProps = {};

const DashboardAI = ({}: DashboardAIProps) => {
  return (
    <main className="w-screen h-screen flex  flex-col items-center">
      <div className="w-[100%] h-[100%] max-w-[1440px] grid grid-rows-1 grid-cols-8 grid-flow-rows gap-6 p-6 pt-1 pl-1 text-white">
        <section className="row-span-1 col-span-2 flex gap-1 flex-col">
          <div className="pt-5 bg-[#282828] w-[100%] max-w-[1440px] rounded-[30px]">
            <Navigation />
          </div>
          <div className="h-[calc(100%-40px)]">
            <ChatSidebar type="ai" />
          </div>
        </section>
        <section className="row-span-1 col-span-6">
          <ChatPage type="ai" />
        </section>
      </div>
    </main>
  );
};

export default DashboardAI;
