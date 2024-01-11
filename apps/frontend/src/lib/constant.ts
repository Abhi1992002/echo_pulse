import { notificationTypeEnum } from "@/types/common";
import { meta, shopify, starbucks, tesla } from "../../public/images";

export const PORTFOLIO_LINK = "https://google.com";

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const userSmallProfileData = {
  coverImg: "/back.jpg",
  followers: 1998,
  following: 356,
  name: "Abhimanyu",
  username: "@abhi1992002",
  description: "Hello I am a Full Stack developer .I am Open to Work",
  userId: "12345678",
  userImage: "https://github.com/shadcn.png",
  smallSkillList: [
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill: "Vue.js" },
    { skill: "Angular" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "Django" },
    { skill: "...more" },
  ],
};

export const profileUserDetails = {
  userId: "12345678",
  coverImg: "/back.jpg",
  userImg: "https://github.com/shadcn.png",
  followers: 98,
  following: 1998,
  github_link: "#",
  linkedin_link: "#",
  twitter_link: "#",
  name: "Abhimanyu",
  username: "@abhi1992002",
  small_description: "Hello I am a Full Stack developer I am Open to Work",
  country_code: "IN",
  country_name: "India",
  role: "software developer",
  full_description:
    "Abhimanyu is a proficient full stack developer, known for his expertise in both front-end and back-end technologies. With a passion for creating seamless and efficient digital solutions, he has honed his skills in various programming languages and frameworks. Abhimanyu's journey in the tech world is marked by his commitment to continuous learning and adaptation, staying abreast with the latest industry trends. His ability to translate complex technical concepts into user-friendly applications makes him a valuable asset in any development team.",
  work_experience: [
    {
      date: "February 2022",
      heading: " Application UI code in Tailwind CSS",
      content: ` Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing
          pages.`,
    },
    {
      date: " March 2022",
      heading: "  Marketing UI design in Figma",
      content: `  All of the pages and components are first designed in Figma and we
      keep a parity between the two versions even as we update the
      project.`,
    },
    {
      date: " April 2022",
      heading: " E-Commerce UI code in Tailwind CSS",
      content: ` Get started with dozens of web components and interactive elements
      built on top of Tailwind CSS.`,
    },
  ],
  education: [
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
  ],
  skills: [
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill: "Vue.js" },
    { skill: "Angular" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "Django" },
    { skill: "Flask" },
    { skill: "Ruby on Rails" },
    { skill: "GraphQL" },
    { skill: "REST API" },
    { skill: "MongoDB" },
    { skill: "SQL" },
    { skill: "PostgreSQL" },
    { skill: "MySQL" },
    { skill: "Docker" },
    { skill: "Kubernetes" },
    { skill: "AWS" },
    { skill: "Azure" },
    { skill: "Google Cloud" },
    { skill: "Git" },
    { skill: "CI/CD" },
    { skill: "Jest" },
    { skill: "Mocha" },
    { skill: "SASS" },
    { skill: "Bootstrap" },
    { skill: "Webpack" },
    { skill: "Redux" },
  ],
};

export type profileUserDetails = typeof profileUserDetails;

export const postDetails = [
  {
    userId: "123456789",
    userImg: "https://github.com/shadcn.png",
    username: "@abhi1992002",
    name: "abhimanyu",
    isliked: true,
    isVerified: true,
    description:
      "Behold the Colossus of the Roads: a fusion of majestic size and unparalleled sophistication. This automotive giant isn't just a means of transport; it's a statement of power, elegance, and advanced engineering.",
    image_url: "/car.jpeg",
  },
  {
    userId: "987654321",
    userImg: "https://github.com/user2.png",
    username: "@user2",
    name: "User 2",
    isliked: false,
    isVerified: false,
    description:
      "Exploring new horizons with a sense of wonder and adventure. The world is full of surprises waiting to be discovered. 🌍✈️ #TravelAdventure",
    image_url: "/car.jpeg",
  },
  {
    userId: "567890123",
    userImg: "https://github.com/user3.png",
    username: "@user3",
    name: "User 3",
    isliked: true,
    isVerified: false,
    description:
      "A delicious homemade meal is the perfect way to unwind after a long day. What's your favorite comfort food? 🍔🍕🍝 #FoodLove",
    image_url: "/car.jpeg",
  },
  {
    userId: "456789012",
    userImg: "https://github.com/user4.png",
    username: "@user4",
    name: "User 4",
    isliked: false,
    isVerified: true,
    description:
      "Nature's beauty is all around us. Take a moment to appreciate the colors of the world. 🌼🌳🌸 #NaturePhotography",
    image_url: "/car.jpeg",
  },
  {
    userId: "234567890",
    userImg: "https://github.com/user5.png",
    username: "@user5",
    name: "User 5",
    isliked: true,
    isVerified: false,
    description:
      "Morning coffee and a good book - the perfect way to start the day. What's your current read? 📚☕ #Bookworm",
    image_url: "/car.jpeg",
  },
  {
    userId: "345678901",
    userImg: "https://github.com/user6.png",
    username: "@user6",
    name: "User 6",
    isliked: false,
    isVerified: true,
    description:
      "In the world of fashion, boldness knows no boundaries. Unleash your inner style with confidence. 👗🕶️👠 #Fashionista",
    image_url: "/car.jpeg",
  },
  {
    userId: "678901234",
    userImg: "https://github.com/user7.png",
    username: "@user7",
    name: "User 7",
    isliked: true,
    isVerified: true,
    description:
      "Adventures await in the great outdoors. Get lost in the beauty of the wilderness. 🏞️⛺ #OutdoorLife",
    image_url: "/car.jpeg",
  },
  {
    userId: "789012345",
    userImg: "https://github.com/user8.png",
    username: "@user8",
    name: "User 8",
    isliked: false,
    isVerified: false,
    description:
      "Music has the power to touch our souls. Share your favorite song that never gets old. 🎵🎶 #MusicLover",
    image_url: "/car.jpeg",
  },
  {
    userId: "890123456",
    userImg: "https://github.com/user9.png",
    username: "@user9",
    name: "User 9",
    isliked: true,
    isVerified: false,
    description:
      "Sunsets are a reminder that every ending can be beautiful. Share your favorite sunset view. 🌅😍 #SunsetMagic",
    image_url: "/car.jpeg",
  },
  {
    userId: "012345678",
    userImg: "https://github.com/user10.png",
    username: "@user10",
    name: "User 10",
    isliked: false,
    isVerified: true,
    description:
      "The road less traveled often leads to the most memorable adventures. Share your off-the-beaten-path experiences. 🌄🌿 #AdventureTime",
  },
];

export const chatSidebarData = [
  {
    userId: "12345678",
    userImg: "https://github.com/shadcn.png",
    username: "@abhi1992002",
    date: "1/1/2024",
    message: "lorem dfuewf ewifnnew fiwef wefiewf",
    isVerified: true,
  },

  {
    userId: "23456789",
    userImg: "https://github.com/shadcn.png",
    username: "@user2345",
    date: "2/1/2024",
    message: "Sample message text 1",
    isVerified: false,
  },
  {
    userId: "34567890",
    userImg: "https://github.com/shadcn.png",
    username: "@user3456",
    date: "3/1/2024",
    message: "Sample message text 2",
    isVerified: true,
  },
  {
    userId: "45678901",
    userImg: "https://github.com/shadcn.png",
    username: "@user4567",
    date: "4/1/2024",
    message: "Sample message text 3",
    isVerified: false,
  },
  {
    userId: "56789012",
    userImg: "https://github.com/shadcn.png",
    username: "@user5678",
    date: "5/1/2024",
    message: "Sample message text 4",
    isVerified: true,
  },
  {
    userId: "67890123",
    userImg: "https://github.com/shadcn.png",
    username: "@user6789",
    date: "6/1/2024",
    message: "Sample message text 5",
    isVerified: false,
  },
  {
    userId: "78901234",
    userImg: "https://github.com/shadcn.png",
    username: "@user7890",
    date: "7/1/2024",
    message: "Sample message text 6",
    isVerified: true,
  },
  {
    userId: "89012345",
    userImg: "https://github.com/shadcn.png",
    username: "@user8901",
    date: "8/1/2024",
    message: "Sample message text 7",
    isVerified: false,
  },
  {
    userId: "90123456",
    userImg: "https://github.com/shadcn.png",
    username: "@user9012",
    date: "9/1/2024",
    message: "Sample message text 8",
    isVerified: true,
  },
  {
    userId: "01234567",
    userImg: "https://placeholder.com/user0123.png",
    username: "@user0123",
    date: "10/1/2024",
    message: "Sample message text 9",
    isVerified: false,
  },
  {
    userId: "12345679",
    userImg: "https://placeholder.com/user1234.png",
    username: "@user1234",
    date: "11/1/2024",
    message: "Sample message text 10",
    isVerified: true,
  },
];

export const notificationData = [
  {
    type: notificationTypeEnum.comment,
    from: "@abhi1992002",
    userId: "12345678",
    date: "23/1/2023",
    message: "Lorem Ipsum is simply fewlfmewf dummy text of the",
  },
  {
    type: notificationTypeEnum.message,
    from: "@abhi1992002",
    date: "23/1/2023",
    userId: "12345678",
    message: "Lorem Ipsum is simply fewlfmewf dummy text of the",
  },
  {
    type: notificationTypeEnum.comment,
    from: "@user2",
    date: "23/1/2023",
    userId: "23456789",
    message: "Your post received a like!",
  },
  {
    type: notificationTypeEnum.message,
    from: "@user3",
    userId: "34567890",
    date: "23/1/2023",
    message: "You have a new follower!",
  },
  {
    type: notificationTypeEnum.comment,
    from: "@user4",
    userId: "45678901",
    date: "23/1/2023",
    message: "You were mentioned in a post.",
  },
  {
    type: notificationTypeEnum.message,
    from: "@user5",
    date: "23/1/2023",
    userId: "56789012",
    message: "Someone commented on your post.",
  },
  {
    type: notificationTypeEnum.message,
    from: "@user6",
    userId: "67890123",
    date: "23/1/2023",
    message: "You have a new message!",
  },
  {
    type: notificationTypeEnum.comment,
    from: "@user7",
    date: "23/1/2023",
    userId: "78901234",
    message: "You were mentioned in a comment.",
  },
];

export const friendRequestData = [
  {
    from: "@abhi1992002",
    userId: "12345678",
    message: "Lorem Ipsum is simply fewlfmewf dummy text of the",
    date: "23/1/2023",
  },
  {
    from: "@user123",
    userId: "12345678",
    message: "Hey there! Let's connect on this platform.",
    date: "23/1/2023",
  },
  {
    from: "@friend45",
    userId: "12345678",
    message: "Hello! I saw your profile and thought we could be friends.",
    date: "23/1/2023",
  },
  {
    from: "@newbie99",
    userId: "12345678",
    message:
      "Hi! I'm new here and looking for friends. Would you like to connect?",
    date: "23/1/2023",
  },
  {
    from: "@codinggeek",
    userId: "12345678",
    message:
      "Greetings! I noticed your interest in coding. Let's chat about tech!",
    date: "23/1/2023",
  },
  {
    from: "@traveler123",
    userId: "12345678",
    message: "Hello! I love traveling. Do you share the same passion?",
    date: "23/1/2023",
  },
  {
    from: "@musiclover",
    userId: "12345678",
    message: "Hey! I'm a music enthusiast. What's your favorite genre?",
    date: "23/1/2023",
  },
  {
    from: "@foodie22",
    userId: "12345678",
    message: "Hi there! I'm a food lover. What's your favorite cuisine?",
    date: "23/1/2023",
  },
  {
    from: "@fitnessfanatic",
    userId: "12345678",
    message: "Hello! Are you into fitness and health?",
    date: "23/1/2023",
  },
  {
    from: "@bookworm88",
    userId: "12345678",
    message: "Greetings! I enjoy reading. Any favorite books you'd recommend?",
    date: "23/1/2023",
  },
];
