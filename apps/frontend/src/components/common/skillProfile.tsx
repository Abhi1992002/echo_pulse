import React from "react";
import { SkillCard } from "./skillCard";

type SkillProfileProps = {
  type?: "small" | "all";
};

const skillList = [
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "React" },
  { skill: "Vue.js" },
  { skill: "Angular" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Django" },
  { skill: "Flask" },
  { skill: "Ruby on Rails" },
  { skill: "GraphQL" },
  { skill: "REST API" },
  { skill: "MongoDB" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
  { skill: "MySQL" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "Google Cloud" },
  { skill: "Git" },
  { skill: "CI/CD" },
  { skill: "Jest" },
  { skill: "Mocha" },
  { skill: "SASS" },
  { skill: "Bootstrap" },
  { skill: "Webpack" },
  { skill: "Redux" },
];

// first 10
const smallSkillList = [
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "React" },
  { skill: "Vue.js" },
  { skill: "Angular" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Django" },
  { skill: "...more" },
];

export const SkillProfile = ({ type = "all" }: SkillProfileProps) => {
  return (
    <div className="flex flex-col  w-[100%]  gap-[10px] mt-[20px]">
      <h1 className="text-base font-semibold w-auto">Skills</h1>

      {type === "all" && (
        <div className="flex flex-wrap gap-2 ">
          {skillList.map(({ skill }) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      )}
      {type === "small" && (
        <div className="flex flex-wrap gap-2 ">
          {smallSkillList.map(({ skill }) => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      )}
    </div>
  );
};
