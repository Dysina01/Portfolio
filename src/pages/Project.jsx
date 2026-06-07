import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">{project.category}</p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="page-heading">{project.title}</h1>
            <span className="text-neutral-500 pb-1">{project.year}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="glass-card overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover"
          />
        </motion.div>

        <section className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <p className="section-label">Overview</p>
            <h2 className="section-heading leading-tight">
              Building a clean and modern digital experience.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              This project focused on creating a thoughtful user experience with
              modern visual language, intuitive interactions and a minimal
              interface system.
            </p>
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-8">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-3">Problem</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-3">Goal</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.goal}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-8">Research</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.research?.map((item) => (
              <div key={item} className="glass-card p-5 md:p-6 text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="section-label">Process</p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Research", "Wireframing", "UI Design"].map((item) => (
              <div key={item} className="glass-card p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-3">{item}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Carefully crafted workflows and visual systems to improve user
                  experience.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-heading mb-6">Learnings</h2>
          <div className="glass-card p-6 md:p-8">
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.learnings}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
