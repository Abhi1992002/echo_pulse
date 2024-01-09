import React, { useEffect, useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

type UserBubbleMeProps = {
  src?: string;
};

export const UserBubbleMe = ({ src }: UserBubbleMeProps) => {
  return (
    <div className="bg-[#5197FF] w-fit max-w-[70%] mt-[20px]  p-4 rounded-[20px] flex flex-col gap-2 float-right text-sm">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">@abhi1992002</p>
        <p className="text-sm ">23/04/2023</p>
      </div>
      <p className="text-black text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nihil
        dolor ipsum suscipit neque obcaecati, aliquid doloribus maxime
        accusantium.
      </p>
      {src && (
        <div className="w-[100%]">
          <AspectRatio ratio={16 / 9} className="rounded-[15px]">
            <Image
              src={src}
              alt="Image"
              fill
              className="rounded-[15px] object-cover"
            />
          </AspectRatio>
        </div>
      )}
    </div>
  );
};
