"use client";
import React from "react";

type WorkExperienceProps = {
  works: { date: string; heading: string; content: string }[];
};

export const WorkExperience = ({ works }: WorkExperienceProps) => {
  return (
    <>
      <div className="mt-[30px]">
        <p className="mb-4 text-xl font-semibold ">Work Experience</p>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {works.map((work) => {
              return (
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                    {work.date}
                  </time>
                  <h3 className="text-base font-semibold text-white">
                    {work.heading}
                  </h3>
                  <p className="mb-4 text-sm font-normal text-white dark:text-gray-400">
                    {work.content}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
