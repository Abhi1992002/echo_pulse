"use client";
import React, { useEffect } from "react";
import { ChatInput } from "../chat/chatInput";
import { ChatPageHeader } from "../chat/chatPageHeader";
import { UserBubbleMe } from "./userBubbleMe";
import { UserBubbleOther } from "./userBubbleOther";
import { useRecoilState } from "recoil";
import { aiChatSidebar } from "@/store/sideBar";
import { PlusIcon } from "lucide-react";
import { toasterPromise } from "@/lib/toast";
import { Bookmark } from "../ai/bookmark";

type ChatPageProps = {
  type: "ai" | "normal";
  username?: string;
};

const factorialCode = `function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
`;

const bookmarks = [
  {
    date: "23 Dec, 2024",
    content:
      "This is a great approach to solve this question, but we need something like this",
    bookmarkId: "1",
  },
  {
    date: "24 Dec, 2024",
    content: "A useful resource for solving complex problems in programming.",
    bookmarkId: "2",
  },
  {
    date: "25 Dec, 2024",
    content: "Check this out for a different perspective on the topic.",
    bookmarkId: "3",
  },
  {
    date: "26 Dec, 2024",
    content: "Bookmark for further research on the subject.",
    bookmarkId: "4",
  },
  {
    date: "27 Dec, 2024",
    content: "Important reference material for an upcoming project.",
    bookmarkId: "5",
  },
  {
    date: "28 Dec, 2024",
    content: "Interesting insights and techniques shared in this article.",
    bookmarkId: "6",
  },
  {
    date: "29 Dec, 2024",
    content: "Don't forget to review this before the next meeting.",
    bookmarkId: "7",
  },
  {
    date: "30 Dec, 2024",
    content: "Valuable information for improving our processes.",
    bookmarkId: "8",
  },
  {
    date: "31 Dec, 2024",
    content: "Must-read for staying up-to-date with industry trends.",
    bookmarkId: "9",
  },
  {
    date: "1 Jan, 2025",
    content: "Bookmark this for future reference in your coding journey.",
    bookmarkId: "10",
  },
  {
    date: "2 Jan, 2025",
    content: "A gem of an article for problem-solving enthusiasts.",
    bookmarkId: "11",
  },
  {
    date: "3 Jan, 2025",
    content: "Keep this handy for quick access to important data.",
    bookmarkId: "12",
  },
  {
    date: "4 Jan, 2025",
    content: "Useful resource that may come in handy in future projects.",
    bookmarkId: "13",
  },
  {
    date: "5 Jan, 2025",
    content: "Stay organized and keep track of your favorite references.",
    bookmarkId: "14",
  },
  {
    date: "6 Jan, 2025",
    content: "Bookmark this for sharing with the team later.",
    bookmarkId: "15",
  },
];

const codeObj = {
  language: "Javascript",
  code: factorialCode,
};

export const ChatPage = ({ type, username }: ChatPageProps) => {
  const [chatId, setChatId] = useRecoilState(aiChatSidebar);

  const newChatCreatedHandler = () => {
    const addingNewAIChat = new Promise((resolve) => {
      setTimeout(() => {
        resolve("1");
      }, 1000);
    }).then(() => {
      const chatId = "ewlfkhwef";
      // navigate(`dashboard/ai?chatId=${chatId}`);
      const id = location.search.split("=")[1];
      setChatId(id);
    });

    toasterPromise({
      promise: addingNewAIChat,
      loadingMsg: "Creating...",
      successMsg: "Created..!!",
      errorMsg: "failed",
    });
  };

  useEffect(() => {
    const id = location.search.split("=")[1];
    setChatId(id);
  });

  if (type === "ai" && chatId) {
    return (
      <div className="w-[100%] h-[100%] flex gap-4  rounded-[30px]">
        {/* message */}
        <div className="w-[70%] h-[100%]">
          <div className="h-[100%] overflow-auto no-scrollbar pb-24">
            <UserBubbleOther type="ai" />
            <UserBubbleMe type="ai" src="/car.jpeg" />
            <UserBubbleOther type="ai" codeObj={codeObj} />
            <UserBubbleMe type="ai" />
            <UserBubbleOther type="ai" src="/car.jpeg" />
            <UserBubbleMe type="ai" />
            <UserBubbleOther type="ai" />
            <UserBubbleMe type="ai" />
          </div>

          {/* message */}
          <div className="p-2 sticky bottom-0 py-4 pb-0  border-t bg-[#1A1A1A] border-white/40">
            <ChatInput />
          </div>
        </div>

        <div className="w-[30%] h-[100%] bg-[#282828] mt-4 rounded-[30px]  flex items-center flex-col">
          {/* heading */}
          <div className="w-[100%] h-[60px] border-b border-white/60 px-4 flex items-center z-[100]">
            <p className="text-base font-semibold">Bookmarks</p>
          </div>

          {/* bookmarks */}
          <div className="w-[95%] h-[100%] overflow-auto no-scrollbar flex gap-2 flex-col mt-[20px]">
            {bookmarks.map(({ content, date, bookmarkId }) => {
              return (
                <Bookmark
                  content={content}
                  date={date}
                  bookmarkId={bookmarkId}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (type === "normal" && username) {
    return (
      <div className="w-[100%] h-[100%]  rounded-[30px]">
        <div className="p-2  sticky bottom-0   bg-[#1A1A1A]  border-b border-white/40 ">
          <ChatPageHeader />
        </div>

        {/* message */}
        <div className="h-[100%] overflow-auto no-scrollbar pb-36">
          <UserBubbleOther type="normal" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" src="/car.jpeg" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" />
          <UserBubbleMe />
          <UserBubbleOther type="normal" />
          <UserBubbleMe src="/car.jpeg" />
        </div>

        {/* message */}
        <div className="p-2 sticky bottom-0 py-4 pb-0  border-t bg-[#1A1A1A] border-white/40">
          <ChatInput />
        </div>
      </div>
    );
  }

  if (type === "ai" && !chatId) {
    return (
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <div
          role="button"
          onClick={newChatCreatedHandler}
          className="bg-[#282828] w-[200px] aspect-square rounded-[30px] flex items-center hover:text-black hover:bg-white hover:cursor-pointer text-white justify-center"
        >
          <PlusIcon className=" w-[140px] h-[140px]" />
        </div>
      </div>
    );
  }
};
