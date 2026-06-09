import tarathumb from "../assets/Projects/Tara/Tara-Thumb.webp";
import sakenthumb from "../assets/Projects/Saken/Saken-Thumb.webp";
import arsinthumb from "../assets/Projects/Arsin/Arsin-Thumb.webp";
import { Badge } from "lucide-react";

export const disciplines = ["UI/UX", "Graphic"];

export const projects = [
  {
    id: "saken",
    title: "Saken",
    tags: ["real"],
    category: ["App Design"],
    discipline: "UI/UX",
    year: "2026",
    role: ["Role: UI/UX Designer"],
    badge: ["Real Project"],
    description: "lalalala",

    // Hero Image
    image: sakenthumb,

    // text + optional image (4:3 works best)
    mission:
      "My mission was to rebuild trust and clarity within Tara's user experience: streamline the onboarding and credit verification steps, reduce friction across essential tasks, and introduce a fresh, modern visual identity aligned with Gen Z behaviors and expectations.",
    missionImage: "/images/tara-mission.png",

    challenge:
      "One of the biggest challenges came from usability tests and app-store feedback. Many users — especially those without a national ID — were stuck and forced to abandon the credit verification process. The interface also caused hesitation, making users unsure about completing basic tasks.",
    challengeImage: "/images/tara-challenge.png",

    middleImage: "/images/tara-middle.png",

    goal: "Reduce friction across all essential flows. Simplify onboarding, clarify the credit verification steps, reorganize the information architecture, and bring a modern design system that better reflects Gen Z expectations.",
    goalImage: "/images/tara-goal.png",

    // Result — text only, no image
    result:
      "The final redesign delivered a smoother onboarding experience, a more accessible credit verification flow, and a clearer structure that reduced confusion during usability testing. Users completed tasks faster and with more confidence.",

    // Optional
    thoughtsSlug: "",
  },

  {
    id: "tara",
    title: "Tara",
    tags: ["concept"],
    category: "App Design",
    discipline: "UI/UX",
    year: "2025",
    role: "UI/UX Designer",
    badge: ["UI", "UX"],
    description:
      "A credit-based shopping and payment app redesigned for Gen Z users — faster, clearer, and more trustworthy.",

    // Hero image
    image: tarathumb,

    // text + optional image (4:3 works best)
    mission:
      "My mission was to rebuild trust and clarity within Tara's user experience: streamline the onboarding and credit verification steps, reduce friction across essential tasks, and introduce a fresh, modern visual identity aligned with Gen Z behaviors and expectations.",
    missionImage: "/images/tara-mission.png",

    challenge:
      "One of the biggest challenges came from usability tests and app-store feedback. Many users — especially those without a national ID — were stuck and forced to abandon the credit verification process. The interface also caused hesitation, making users unsure about completing basic tasks.",
    challengeImage: "/images/tara-challenge.png",

    middleImage: "/images/tara-middle.png",

    goal: "Reduce friction across all essential flows. Simplify onboarding, clarify the credit verification steps, reorganize the information architecture, and bring a modern design system that better reflects Gen Z expectations.",
    goalImage: "/images/tara-goal.png",

    // Result — text only, no image
    result:
      "The final redesign delivered a smoother onboarding experience, a more accessible credit verification flow, and a clearer structure that reduced confusion during usability testing. Users completed tasks faster and with more confidence.",

    // Optional
    thoughtsSlug: "tara-design-process",
  },

  {
    id: "arsin",
    title: "Arsin",
    tags: ["concept"],
    discipline: "UI/UX",
    category: "Dashboard",
    year: "2026",
    description:
      "A premium dashboard experience with smooth workflows and modern UI components.",
    image: arsinthumb,
  },
];
