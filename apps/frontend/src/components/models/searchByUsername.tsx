import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { SearchInput } from "../common/searchInput";
import { UserList } from "../common/userList";

type SearchByUsernameModelProps = {};

export const SearchByUsernameModel = ({}: SearchByUsernameModelProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Search className="w-[20px] h-[20px] hover:cursor-pointer text-[#CBCBCB] hover:text-[#FFFD00]" />
        </DialogTrigger>
        <DialogContent className="bg-[#282828]">
          <SearchInput />
          <UserList />
        </DialogContent>
      </Dialog>
    </>
  );
};
