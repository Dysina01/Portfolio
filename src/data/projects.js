import tarathumb from "../assets/Projects/Tara/Tara-Thumb.jpg";
import sakenthumb from "../assets/Projects/Saken/Saken-Thumb.jpg";
import arsinthumb from "../assets/Projects/Arsin/Arsin-Thumb.jpg";

export const disciplines = ["UI/UX", "Graphic"];

export const projects = [
  {
    id: "saken",
    title: "Saken",
    discipline: "UI/UX",
    category: "Mobile App",
    year: "2026",
    image: sakenthumb,

    overview: {
      role: "UX/UI Designer",
      duration: "8 Weeks",
      team: "1 Designer, 1 Developer",
      tools: ["Figma", "FigJam", "Notion"],
    },

    problem:
      "Users often struggle to discover meaningful local experiences and activities that match their interests.",

    goal: "Create a simple and engaging platform for discovering local activities and connecting with like-minded people.",

    research: [
      "Competitor Analysis",
      "User Interviews",
      "Journey Mapping",
      "User Surveys",
    ],

    learnings:
      "Reducing cognitive load during onboarding significantly improved user engagement and completion rates.",
  },

  {
    id: "tara",
    title: "Tara",
    discipline: "UI/UX",
    category: "Web Design",
    year: "2026",
    description:
      "Clean and thoughtful interface design with a strong focus on usability and visual hierarchy.",
    image: tarathumb,
  },

  {
    id: "arsin",
    title: "Arsin",
    discipline: "UI/UX",
    category: "Dashboard",
    year: "2026",
    description:
      "A premium dashboard experience with smooth workflows and modern UI components.",
    image: arsinthumb,
  },
];
