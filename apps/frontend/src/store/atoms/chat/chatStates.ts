import { friendsChatType } from "@/types/common";
import { atom } from "recoil";

export const chatSidebarState = atom({
  key: "chatSidebarState",
  default: null! as friendsChatType,
});
