import React from "react";
import { SkillCard } from "./skillCard";

type SkillProfileProps = {
  skills: { skill: string }[];
};

// first 10

export const SkillProfile = ({ skills }: SkillProfileProps) => {
  return (
    <div className="flex flex-col  w-[100%]  gap-[10px] mt-[20px]">
      <h1 className="text-base font-semibold w-auto">Skills</h1>

      <div className="flex flex-wrap gap-2 ">
        {skills.map(({ skill }) => {
          return <SkillCard skill={skill} />;
        })}
      </div>
    </div>
  );
};
