"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Brain,
  Heart,
  Home,
  MessageCircleMore,
  Search,
  User2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SearchByUsernameModel } from "../models/searchByUsername";
export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="w-[100%]">
      <div className="w-[100%] pb-4 z-[100] flex gap-4 items-center  ">
        {/* <Input
          className="bg-[#282828] text-white flex-1 border-none placeholder:text-white/60 placeholder:text-sm rounded-[15px]"
          placeholder=" search with username"
        /> */}

        <div className="flex-1 flex items-center justify-center gap-8">
          <SearchByUsernameModel />
          <Link
            href={"/dashboard/home"}
            className={cn(
              "text-[#CBCBCB] hover:text-[#FFFD00]",
              pathname === "/dashboard/home" && "text-[#FFFD00]"
            )}
          >
            <Home className="h-[20px] w-[20px] " />
          </Link>
          <Link
            href={"/dashboard/chat"}
            className={cn(
              "text-[#CBCBCB] hover:text-[#FFFD00]",
              pathname === "/dashboard/chat" && "text-[#FFFD00]"
            )}
          >
            <MessageCircleMore className="h-[20px] w-[20px] " />
          </Link>
          <Link
            href={"/dashboard/like"}
            className={cn(
              "text-[#CBCBCB] hover:text-[#FFFD00]",
              pathname === "/dashboard/like" && "text-[#FFFD00]"
            )}
          >
            <Heart className="h-[20px] w-[20px] " />
          </Link>
          <Link
            href={"/dashboard/ai"}
            className={cn(
              "text-[#CBCBCB] hover:text-[#FFFD00]",
              pathname === "/dashboard/ai" && "text-[#FFFD00]"
            )}
          >
            <Brain className="h-[20px] w-[20px] " />
          </Link>
          <Link
            href={"/dashboard/profile"}
            className={cn(
              "text-[#CBCBCB] hover:text-[#FFFD00]",
              pathname === "/dashboard/profile" && "text-[#FFFD00]"
            )}
          >
            <User2 className="h-[20px] w-[20px] " />
          </Link>
        </div>
      </div>
    </div>
  );
};
