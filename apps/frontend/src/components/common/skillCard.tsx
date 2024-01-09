import React from "react";

type SkillCardProps = {
  skill: string;
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-[#2F2E2E] border hover:cursor-pointer hover:bg-white hover:text-black rounded-[15px] py-1 px-4 w-fit">
      <p className="text-xs">{skill}</p>
    </div>
  );
};
