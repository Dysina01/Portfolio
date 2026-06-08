import tarathumb from "../assets/Posts/Tara-post.webp";
import tara1 from "../assets/Posts/Tara/t1.webp";
import tara2 from "../assets/Posts/Tara/t2.webp";
import tara3 from "../assets/Posts/Tara/t3.webp";
import tara4 from "../assets/Posts/Tara/t4.webp";
import tara5 from "../assets/Posts/Tara/t5.webp";
import tara6 from "../assets/Posts/Tara/t6.webp";

import DesignIran from "../assets/Posts/Design-Iran.webp";

export const postCategories = ["All", "Case Study", "Thought Piece"];

export const posts = [
  {
    id: "tara-design-process",
    title: "Tara Redesign Process",
    subtitle: "Idea to Prototype",
    category: "Case Study",
    date: "2026-05-10",
    readTime: "5 min",
    // cover: یه عکس import کن اینجا مثل: import taracover from "../assets/..."
    cover: tarathumb,
    // images: آرایه‌ای از عکس‌های imported برای اسلایدر
    images: [tara1, tara2, tara3, tara4, tara5, tara6],
    body: [
      "Tara was more than just a redesign project for me — it was a real challenge. 🔥",
      "A while ago, I decided to redesign the Tara app at the request of my friend and valued mentor, Parnaz Kazemi.",
      "In this redesign, I focused on removing unnecessary decisions, highlighting key information, and simplifying anything that required extra effort or thought from users.",
      "I also worked on addressing the main usability issues reported by users while giving Tara a fresh and distinctive visual identity. ✨",
      "This post is a brief overview of the process I went through and a glimpse into the final outcome of the redes",
    ],
    linkedinUrl: "https://www.linkedin.com/in/sinadalaei",
  },
  {
    id: "why-iranian-design",
    title: "What Would an Persian UI Look Like?",
    subtitle: "Exploring a Missing Design Language",
    category: "Thought Piece",
    date: "2026-04-22",
    readTime: "3 min",
    cover: DesignIran,
    images: [],
    body: [
      "How is it possible that a country with such a rich history, culture, and visual heritage still doesn't have a recognizable Iranian UI design language?",
      "This question suddenly caught my attention and led me down an interesting path of exploration.",
      "Why do we rarely draw inspiration from Iranian visual identity when designing digital products? Instead, most of us naturally gravitate toward modern, minimalist interfaces shaped by global design trends. ✨",
      "But why?",
      "Is it because Iranian design lacks a clearly defined digital language?",
      "Do we assume users would reject it?",
      "Or is creating a modern, localized visual identity simply more challenging than it seems?",
      "That brings us to the bigger question:",
      "If an Iranian UI design language existed today, what would it look like?",
      "How would it balance cultural identity with usability and modern product standards?",
      "And perhaps most importantly—why haven't we seen a truly successful example of it yet?",
    ],
    linkedinUrl: "https://www.linkedin.com/in/sinadalaei",
  },
];
