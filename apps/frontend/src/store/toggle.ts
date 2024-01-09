import { atom } from "recoil";

type homeNotificationToggleType = "notification" | "friend_request";

export const homeNotificationToggle = atom({
  key: "homeNotificationToggle",
  default: "friend_request" as homeNotificationToggleType,
});

type profileTimelineToggleType = "education" | "work";

export const profileTimelineToggle = atom({
  key: "profileTimelineToggle",
  default: "work" as profileTimelineToggleType,
});
