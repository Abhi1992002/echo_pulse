import { atom } from "recoil";

export const fileStatePost = atom({
  key: "fileState",
  default: {} as File | undefined,
});

export const isFileAdded = atom({
  key: "fileAdded",
  default: false,
});

export const isFileAddedChat = atom({
  key: "fileAddedChat",
  default: {} as File | undefined,
});
