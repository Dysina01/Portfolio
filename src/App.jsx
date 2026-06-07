import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import useLenis from "./hooks/useLenis";
import { useLanguage } from "./context/LanguageContext";
import Cursor from "./components/Cursor";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";

export default function App() {
  const { language } = useLanguage();
  useLenis();
  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="
    bg-white
    text-black
    dark:bg-[#0a0a0a]
    dark:text-white
    min-h-screen
    transition-colors
    duration-500
  "
    >
      {" "}
      <Cursor />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
}
