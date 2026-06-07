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
  category: "App Design",
  discipline: "UI/UX",
  year: "2025",
  role: "UI/UX Designer",
  tags: ["UI", "UX"],
  description:
    "A credit-based shopping and payment app redesigned for Gen Z users — faster, clearer, and more trustworthy.",

  // Hero image (large, 16:9)
  image: tarathumb,

  // Narrative sections — each has text + optional image (4:3 works best)
  mission: "My mission was to rebuild trust and clarity within Tara's user experience: streamline the onboarding and credit verification steps, reduce friction across essential tasks, and introduce a fresh, modern visual identity aligned with Gen Z behaviors and expectations.",
  missionImage: "/images/tara-mission.png",

  challenge: "One of the biggest challenges came from usability tests and app-store feedback. Many users — especially those without a national ID — were stuck and forced to abandon the credit verification process. The interface also caused hesitation, making users unsure about completing basic tasks.",
  challengeImage: "/images/tara-challenge.png",

  middleImage: "/images/tara-middle.png",
  
  goal: "Reduce friction across all essential flows. Simplify onboarding, clarify the credit verification steps, reorganize the information architecture, and bring a modern design system that better reflects Gen Z expectations.",
  goalImage: "/images/tara-goal.png",

  // Result — text only, no image
  result:
    "The final redesign delivered a smoother onboarding experience, a more accessible credit verification flow, and a clearer structure that reduced confusion during usability testing. Users completed tasks faster and with more confidence.",

  // Optional
  behanceUrl: "https://www.behance.net/your-project-url",
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
