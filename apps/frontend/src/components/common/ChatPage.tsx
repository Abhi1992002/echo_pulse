import React from "react";
import { ChatInput } from "../chat/chatInput";
import { ChatPageHeader } from "../chat/chatPageHeader";
import { UserBubbleMe } from "./userBubbleMe";
import { UserBubbleOther } from "./userBubbleOther";

type ChatPageProps = {
  type: "ai" | "normal";
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

const codeObj = {
  language: "Javascript",
  code: factorialCode,
};

export const ChatPage = ({ type }: ChatPageProps) => {
  if (type === "ai") {
    return (
      <div className="w-[100%] h-[100%]  rounded-[30px]">
        {/* message */}
        <div className="h-[100%] overflow-auto no-scrollbar pb-36">
          <UserBubbleOther type="ai" />
          <UserBubbleMe src="/car.jpeg" />
          <UserBubbleOther type="ai" codeObj={codeObj} />
          <UserBubbleMe />
          <UserBubbleOther type="ai" src="/car.jpeg" />
          <UserBubbleMe />
          <UserBubbleOther type="ai" />
          <UserBubbleMe />
        </div>

        {/* message */}
        <div className="p-2 sticky bottom-0 py-4 pb-0  border-t bg-[#1A1A1A] border-white/40">
          <ChatInput />
        </div>
      </div>
    );
  }

  if (type === "normal") {
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
};
