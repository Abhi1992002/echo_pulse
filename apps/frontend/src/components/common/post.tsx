"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Circle, Heart, MessageCirclePlus } from "lucide-react";
import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";
import { CommentPost } from "./commentPost";
import { cn } from "@/lib/utils";

type PostProps = {
  like?: boolean;
};

export const Post = ({ like = false }: PostProps) => {
  const friend = false;
  return (
    <div className=" bg-gradient-to-b from-[#282828] to-[rgba(40, 40, 40, 0.00) 100%)] p-4 rounded-[30px] flex flex-col gap-4">
      {/* top */}
      <div className="flex gap-4 items-center">
        {/* avatar */}
        <div>
          <Avatar className="w-12 h-12 rounded-[30px] z-[1]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* username */}
        <div className="flex flex-col">
          {/* username */}
          <div className="flex gap-2">
            <p className="text-sm text-[#7D7D7D]">@abhi1992002</p>
            <BadgeCheck className="w-[20px] h-[20px] text-[#5197FF]" />
          </div>

          {/* name */}
          <div className="flex gap-2">
            <p className="text-base font-semibold">Abhimanyu</p>

            <div className="flex gap-1 items-center">
              <p className="text-[#FFFD00]">
                <Circle className="bg-[#FFFD00] w-1 h-1 rounded-e-full" />
              </p>
              <p className="text-sm text-[#FFFD00]">online</p>
            </div>
          </div>
        </div>
      </div>

      {/* title */}
      <div>
        <p className="text-sm">
          Behold the Colossus of the Roads: a fusion of majestic size and
          unparalleled sophistication. This automotive giant isn't just a means
          of transport; it's a statement of power, elegance, and advanced
          engineering.
        </p>
      </div>

      {/* images / video */}
      <div className="w-[100%]">
        <AspectRatio ratio={16 / 9} className="rounded-[15px]">
          <Image
            src="/car.jpeg"
            alt="Image"
            fill
            className="rounded-[15px] object-cover"
          />
        </AspectRatio>
      </div>

      {/* like buttons */}
      <div className="flex  items-center justify-between">
        <div className="flex gap-4">
          <Button className="p-0 bg-transparent">
            <Heart
              className={cn(
                "w-[20px]  text-[#CBCBCB] h-[20px] hover:text-[#FFFD00] hover:fill-[#FFFD00] ",
                like && "fill-[#FF8181] text-[#FF8181]"
              )}
            />
          </Button>
          <Button className="p-0 bg-transparent">
            <MessageCirclePlus className="w-[20px] hover:text-[#FFFD00] h-[20px] text-[#CBCBCB]" />
          </Button>
        </div>

        {friend ? (
          <Button tone="bright" className="w-fit">
            Chat
          </Button>
        ) : (
          <Button tone="bright" className="w-fit">
            Friend Request
          </Button>
        )}
      </div>

      <hr className="border-[#2F2E2E]" />

      {/* comment */}
      <CommentPost />
    </div>
  );
};
