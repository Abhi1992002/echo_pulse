import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

type SearchInputProps = {};

export const SearchInput = ({}: SearchInputProps) => {
  return (
    <>
      <div className="flex item-center justify-center gap-2 bg-[#222222] rounded-[15px]">
        <Search className="text-[#7D7D7D] bg-transparent w-[24px] h-[24px] m-2" />
        <Input
          placeholder="Search by Username"
          className="border-none text-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1  placeholder:text-[#7D7D7D] bg-transparent text-white  outline-none"
        />
      </div>
    </>
  );
};
