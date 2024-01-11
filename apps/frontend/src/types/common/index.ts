export interface userSmallProfileType {
  coverImg: string;
  followers: number;
  following: number;
  name: string;
  username: string;
  description: string;
  userId: string;
  userImage: string;
  smallSkillList: { skill: string }[];
}

export type userPostType = {
  userId: string;
  userImg: string;
  username: string;
  name: string;
  isliked: boolean;
  isVerified: boolean;
  description: string;
  image_url?: string;
  video_url?: string;
}[];

export enum notificationTypeEnum {
  "comment",
  "message",
}

export type notificationsType = {
  type: notificationTypeEnum;
  from: string;
  userId: string;
  message: string;
  date: string;
}[];

export type notificationType = {
  type: notificationTypeEnum;
  from: string;
  userId: string;
  message: string;
  date: string;
};

export type friendRequestsType = {
  from: string;
  userId: string;
  message: string;
  date: string;
}[];
export type friendRequestType = {
  from: string;
  userId: string;
  message: string;
  date: string;
};

// chats
export type friendsChatType = {
  userId: string;
  userImg: string;
  username: string;
  date: string;
  isVerified: boolean;
  message: string;
}[];

export type friendChatType = {
  userId: string;
  userImg: string;
  username: string;
  date: string;
  isVerified: boolean;
  message: string;
};
