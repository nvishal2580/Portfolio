export const Details = {
  Name: "Vishal Nagar",
  Linkedin: "https://www.linkedin.com/in/vishal-nagar-0a94a0194",
  Github: "https://github.com/nvishal2580",
  Twitter: "https://twitter.com/vishal__nagar",
  Facebook: "https://www.facebook.com/vishal.nagar.710",
  Instagram: "https://www.instagram.com/vishalnagardhakad/",
  Resume:
    "https://drive.google.com/file/d/1bLq3-MUDjWnbx46pIigfDB_nopxl1rs7/view?usp=sharing",
};

export const Logos = {
  Linkedin: "https://img.icons8.com/fluent/50/000000/linkedin.png",
  Github: "https://img.icons8.com/metro/45/000000/github.png",
  Twitter: "https://img.icons8.com/fluent/50/000000/twitter.png",
  Instagram: "https://img.icons8.com/cute-clipart/50/000000/instagram-new.png",
};

export const Icons = {
  Html: "https://img.icons8.com/color/96/000000/html-5.png",
  Css: "https://img.icons8.com/color/96/000000/css3.png",
  Javascript: "https://img.icons8.com/color/96/000000/javascript.png",
  Nodejs: "https://img.icons8.com/color/96/000000/nodejs.png",
  ReactJs: "https://img.icons8.com/plasticine/96/000000/react.png",
  MongoDb: "https://img.icons8.com/color/96/000000/mongodb.png",
  Git: "https://img.icons8.com/color/96/000000/git.png",
  Cpp: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
  Python: "https://img.icons8.com/color/96/000000/python.png",
};

export const Projects = [
  {
    id: 12,
    title: " 🦠 Covid-Tracker ",
    tags: ["html", "css", "javascript"],
    details: "Static website to get info about covid related data .",
    github: "https://github.com/nvishal2580/covid-Tracker/",
    demo: "https://nvishal2580.github.io/covid-Tracker/",
  },
  {
    id: 13,
    title: " 💬 Chat-App ",
    tags: ["ReactJs", "NodeJs", "Socket"],
    details:
      "Real-time chat application for communication.we can make different rooms for chat.",
    github: "https://github.com/nvishal2580/chat-app",
    demo: "https://chat-app-with-react-by-nvishal.herokuapp.com/",
  },
  {
    id: 14,
    title: " 🧾 Expense Tracker ",
    tags: ["ReactJs", "NodeJs", "mongoDB"],
    details: "Track daily expenses and provide useful tools.",
    github: "https://github.com/nvishal2580/Expense-Tracker/",
    demo: "https://github.com/nvishal2580/Expense-Tracker",
  },
  {
    id: 15,
    title: " 😎 Portfolio ",
    tags: ["css", "javascript", "ReactJs"],
    details: "Portfolio website.",
    github: "https://github.com/nvishal2580/Portfolio/",
    demo: "",
  },
  {
    id: 16,
    title: " 📃 Uptodo ",
    tags: ["ReactJs", "Firebase", "Tailwind"],
    details: "Web app to manage tasks and collaborate with team members to work on a project.",
    github: "https://github.com/nvishal2580/Uptodo/",
    demo: "https://up-todo.netlify.app/",
  },
  {
    id: 17,
    title: " ♟️ Chess Game ",
    tags: ["ReactJs", "NodeJs", "Socket"],
    details: "A fun chess game to play with friends.",
    github: "https://github.com/nvishal2580/Chess_game/",
    demo: "",
  },
  {
    id: 18,
    title: " 🔢 Sudoku Solver ",
    tags: ["Python", "OpenCV", "Tenserflow"],
    details: "Build a machine learning model to solve the sudoku detecting from a Image",
    github: "https://github.com/nvishal2580/Sudoku_solver/",
    demo: "",
  },
];

export const TagsColors = {
  html: "#FF6D00",
  css: "#ade8f4",
  javascript: "#FFD600",
  education: "#f4a261",
  project: "#e76f51",
  ReactJs: "#61DBFB",
  NodeJs: "#FFD600",
  Redux: "#764ABC",
  Socket: "#91D6E1",
  mongoDB: "#34D399",
  Firebase : "#FFCC2F",
  Tailwind: "#38BDF8",
  Python : "#67E8F9",
  OpenCV : "#A78BFA",
  Tenserflow : "#FB7185"
};

export function getTagColor(tag) {
  return TagsColors[`${tag}`];
}

export const TimelineData = [
  {
    id: 1,
    title: "BTech in ECE",
    subtitle: "CGPA : 9.18",
    details: "Sardar Vallabhbhai National Institute of Technology,Surat",
    date: "2019-present",
    label: "education",
  },
  {
    id: 1,
    title: "🏫 High Secondary Education",
    subtitle: "",
    details: "RBSE Board : 89.40%",
    date: "2017-2018",
    label: "education",
  },
  {
    id: 2,
    title: "🏫 Secondary Education",
    subtitle: "",
    details: "RBSE Board : 93.50%",
    date: "2015-2016",
    label: "education",
  },
];
