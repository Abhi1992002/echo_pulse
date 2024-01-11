"use client";
import { ChatPage } from "@/components/common/ChatPage";

import React from "react";

type DashboardChatProps = {
  params: { username: string };
};

const DashboardChat = ({ params }: DashboardChatProps) => {
  return (
    <>
      <ChatPage type="normal" username="string" />
    </>
  );
};

export default DashboardChat;
