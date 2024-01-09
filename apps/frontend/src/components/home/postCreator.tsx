import React from "react";
import { PostCreatorModel } from "./PostCreatorModel";

type PostCreatorProps = {};

export const PostCreator = ({}: PostCreatorProps) => {
  return (
    <div className="w-[100%] bg-[#282828] rounded-[30px] flex items-center justify-center p-[20px]">
      <PostCreatorModel />
    </div>
  );
};
