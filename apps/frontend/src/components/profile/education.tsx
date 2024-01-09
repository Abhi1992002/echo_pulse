"use client";
import React from "react";

type EducationProps = {};

const educationList = [
  {
    date: "February 2022",
    heading: " Harvard",
    content: ` Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing
        pages.`,
  },
  {
    date: " March 2022",
    heading: "  Oxford",
    content: `  All of the pages and components are first designed in Figma and we
    keep a parity between the two versions even as we update the
    project.`,
  },
  {
    date: " April 2022",
    heading: " MIT",
    content: ` Get started with dozens of web components and interactive elements
    built on top of Tailwind CSS.`,
  },
];
export const Education = ({}: EducationProps) => {
  return (
    <>
      <div className="mt-[30px]">
        <p className="mb-4 text-xl font-semibold ">Education</p>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {educationList.map((education) => {
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
