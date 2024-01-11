import {
  friendRequestsType,
  notificationsType,
  userPostType,
  userSmallProfileType,
} from "@/types/common";
import { atom } from "recoil";

export const homeProfileData = atom({
  key: "homeProfileData",
  default: null! as userSmallProfileType,
});

export const homeProfilePosts = atom({
  key: "homeProfilePosts",
  default: null! as userPostType,
});

export const homeNotification = atom({
  key: "homeNotications",
  default: null! as notificationsType,
});

export const homeFriendRequest = atom({
  key: "homeFriendRequest",
  default: null! as friendRequestsType,
});
