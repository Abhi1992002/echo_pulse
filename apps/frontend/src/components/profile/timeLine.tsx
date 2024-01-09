"use client";
import React from "react";
import { WorkExperience } from "./workExperience";
import { useRecoilState } from "recoil";
import { profileTimelineToggle } from "@/store/toggle";
import { cn } from "@/lib/utils";
import { Education } from "./education";

type TimeLineProps = {};

export const TimeLine = ({}: TimeLineProps) => {
  const [timelineToggle, setTimeLineToggle] = useRecoilState(
    profileTimelineToggle
  );
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <div
              role="button"
              onClick={() => setTimeLineToggle("work")}
              className={cn(
                "inline-block p-4 text-white  rounded-t-lg active",
                timelineToggle === "work" &&
                  "border-b-2 border-[#FFFD00] text-[#FFFD00]"
              )}
            >
              Work Experience
            </div>
          </li>
          <li className="me-2">
            <div
              role="button"
              onClick={() => setTimeLineToggle("education")}
              className={cn(
                "inline-block p-4 text-white  rounded-t-lg active",
                timelineToggle === "education" &&
                  "border-b-2 border-[#FFFD00] text-[#FFFD00]"
              )}
            >
              Education
            </div>
          </li>
        </ul>
      </div>

      {timelineToggle === "work" && <WorkExperience />}
      {timelineToggle === "education" && <Education />}
    </>
  );
};
