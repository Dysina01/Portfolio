import { motion } from "framer-motion";
import { translations } from "../data/translations";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { posts } from "../data/posts";
import featuredImageLight from "../assets/featured-light.webp";
import featuredImageDark from "../assets/featured-light.webp";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
        <div className="absolute top-[-120px] right-[-80px] w-[320px] md:w-[500px] h-[320px] md:h-[500px] bg-sky-300/30 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-[-80px] w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-purple-300/20 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage: "url('/noise.svg')",
            backgroundRepeat: "repeat",
            mixBlendMode: "overlay",
          }}
        />

        <div className="max-w-6xl mx-auto w-full text-center relative z-10">
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 rotate-[-8deg] px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
            <span className="text-sm">🎨 UI / UX</span>
          </div>
          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 rotate-[8deg] px-4 py-3 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-lg">
            <span className="text-sm">⚡ Design Systems</span>
          </div>

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] font-semibold tracking-[-0.08em] text-black/[0.025] dark:text-white/[0.025] pointer-events-none select-none whitespace-nowrap text-[clamp(4rem,18vw,15rem)]"
            aria-hidden="true"
          >
            DESIGNER
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[clamp(3.5rem,11vw,9rem)] font-semibold tracking-[-0.06em] leading-[0.88]"
          >
            <span className="block text-neutral-900 dark:text-white">Sina</span>
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-sky-400/40 via-violet-400/40 to-cyan-400/40 rounded-full scale-150" />
              <span className="relative bg-gradient-to-r from-sky-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                Dalaei
              </span>
            </span>
          </motion.h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs mt-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              Available for work
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mt-8"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-3"
          >
            <Link to="/works" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured project */}
      <section className="relative px-6 -mt-8 md:-mt-16 pb-6 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Link to={`/project/${projects[0]?.id}`} className="group block">
            <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,black_45%,transparent_92%)]">
              <img
                src={featuredImageLight}
                alt={projects[0]?.title ?? "Featured project"}
                className="block dark:hidden w-full aspect-[16/10] md:aspect-[16/9] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <img
                src={featuredImageDark}
                alt={projects[0]?.title ?? "Featured project"}
                className="hidden dark:block w-full aspect-[16/10] md:aspect-[16/9] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-6 -mt-10 sm:-mt-14 md:-mt-20 px-1 md:px-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
                  Featured · App Design
                </p>
                <h3 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold tracking-tight text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  {projects[0]?.title}
                </h3>
              </div>
              <span className="text-sm text-neutral-400 dark:text-neutral-500 sm:pb-1">
                2025
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Selected projects */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 overflow-visible">
        <div className="px-6 mb-6 md:mb-8 max-w-7xl mx-auto">
          <p className="section-label">Featured Work</p>
          <h2 className="section-heading">Selected Projects</h2>
        </div>

        <div className="projects-scroll overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-5 md:gap-7 w-max">
            <div className="scroll-gutter" aria-hidden="true" />
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group snap-start shrink-0 w-[78vw] sm:w-[420px] md:w-[500px] lg:w-[560px]"
              >
                <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.18)] dark:group-hover:shadow-[0_28px_60px_-12px_rgba(0,0,0,0.5)]">
                  <div className="overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-500">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className="scroll-gutter" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Let's build something meaningful.
          </h2>
          <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-lg">
            Available for freelance projects, collaborations and full-time
            opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>

      {/* ─── Thoughts section ─── */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between px-6 mb-6 md:mb-8 max-w-7xl mx-auto">
            <div>
              <p className="section-label">Writing</p>
              <h2 className="section-heading">Thoughts</h2>
            </div>
            <Link
              to="/thoughts"
              className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors pb-1 shrink-0"
            >
              See all →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link to={`/thoughts/${post.id}`} className="group block">
                  <div className="glass-card flex items-center gap-5 p-4 md:p-5 hover:bg-white/40 dark:hover:bg-white/8 transition-colors duration-300">
                    {/* Thumbnail */}
                    {post.cover ? (
                      <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div
                        className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl ${
                          post.category === "Case Study"
                            ? "bg-sky-400/10"
                            : "bg-violet-400/10"
                        }`}
                      >
                        {post.category === "Case Study" ? "📐" : "💭"}
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            post.category === "Case Study"
                              ? "bg-sky-400/10 text-sky-500 dark:text-sky-400"
                              : "bg-violet-400/10 text-violet-500 dark:text-violet-400"
                          }`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {post.readTime} read
                        </span>
                      </div>
                      <h3 className="font-semibold text-base md:text-lg leading-snug mb-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      {post.subtitle && (
                        <p className="text-sm text-neutral-500 truncate">
                          {post.subtitle}
                        </p>
                      )}
                    </div>

                    <span className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-1 transition-all duration-300 shrink-0 text-lg">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
