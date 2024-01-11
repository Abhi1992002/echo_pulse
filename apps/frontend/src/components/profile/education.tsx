"use client";
import React from "react";

type EducationProps = {
  educations: { date: string; heading: string; content: string }[];
};

export const Education = ({ educations }: EducationProps) => {
  return (
    <>
      <div className="mt-[30px]">
        <p className="mb-4 text-xl font-semibold ">Education</p>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {educations.map((education) => {
              return (
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                    {education.date}
                  </time>
                  <h3 className="text-base font-semibold text-white">
                    {education.heading}
                  </h3>
                  <p className="mb-4 text-sm font-normal text-white dark:text-gray-400">
                    {education.content}
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
