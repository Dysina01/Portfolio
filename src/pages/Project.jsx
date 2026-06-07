import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

// Mission, Challenge, Goal — alternating image/text layout
function NarrativeSection({ label, text, image, reverse }) {
  return (
    <motion.section
      {...fadeUp()}
      className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text side */}
      <div className="space-y-4">
        <p className="section-label">{label}</p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
          {text}
        </p>
      </div>

      {/* Image side */}
      {image && (
        <div className="glass-card overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={label}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      )}
    </motion.section>
  );
}

export default function Project() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Project not found.
      </div>
    );
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="max-w-5xl mx-auto space-y-24 md:space-y-28">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="space-y-6">

          {/* ── Back link ── */}
        <motion.div {...fadeIn()}>
          <Link
            to="/works"
            className="inline-flex items-center mb-4 gap-2 text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <span>←</span> All Projects
          </Link>
        </motion.div>

          <p className="section-label">{project.category}</p>

          <h1 className="page-heading">{project.title}</h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            {project.role && (
              <span className="glass-card px-3 py-1 rounded-full">
                {project.role}
              </span>
            )}
            {project.tags?.map((tag) => (
              <span key={tag} className="glass-card px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
            <span className="ml-auto">{project.year}</span>
          </div>

          {/* One-liner description */}
          {project.description && (
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg max-w-2xl">
              {project.description}
            </p>
          )}
        </motion.div>

        {/* ── Hero image ── */}
        <motion.div
          {...fadeIn(0.1)}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* ── Mission ── */}
        {project.mission && (
          <NarrativeSection
            label="Mission"
            text={project.mission}
            image={project.missionImage}
            reverse={false}
          />
        )}

        {/* ── Challenge ── */}
        {project.challenge && (
          <NarrativeSection
            label="Challenge"
            text={project.challenge}
            image={project.challengeImage}
            reverse={true}
          />
        )}

        <motion.div
          {...fadeIn(0.1)}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <img
            src={project.middleImage}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* ── Goal ── */}
        {project.goal && (
          <NarrativeSection
            label="Goal"
            text={project.goal}
            image={project.goalImage}
            reverse={false}
          />
        )}

        {/* ── Result — full width, text only ── */}
        {project.result && (
          <motion.section {...fadeUp()} className="space-y-5">
            <p className="section-label">Result</p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg max-w-3xl">
              {project.result}
            </p>
          </motion.section>
        )}

      </div>
    </main>
  );
}
