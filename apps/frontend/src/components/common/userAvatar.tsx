import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-[30px] z-[1]", {
  variants: {
    size: {
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
    },
  },
});

interface UserAvatarProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  userImg?: string;
}

export const UserAvatar = ({ size, className, userImg }: UserAvatarProps) => {
  return (
    <>
      <Avatar className={cn(buttonVariants({ size }), className)}>
        <AvatarImage src={userImg} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
};
