import { BoardingForm } from "@/components/boarding/boarding";
import React from "react";

type BoardingProps = {};

const Boarding = ({}: BoardingProps) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-white">
      <div className="w-[80%] h-[80%] flex items-center justify-center bg-[#222222] , rounded-[30px]">
        <div className="w-[95%] h-[90%] ">
          <BoardingForm />
        </div>
      </div>
    </div>
  );
};

export default Boarding;
