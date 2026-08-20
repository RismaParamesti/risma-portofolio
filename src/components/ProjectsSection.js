import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection({ projects }) {
    return (
        <section id="projects" className="scroll-mt-28 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Projects" title="Selected Projects" />

                <div className="mt-10 grid gap-6">
                    {projects.map((project) => (
                        <motion.article
                            key={project.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45 }}
                            className="grid gap-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.05fr_0.95fr]"
                        >
                            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-slate-100 p-3 dark:bg-slate-950 sm:p-5">
                                <img
                                    src={
                                        Array.isArray(project.image)
                                            ? project.image[0]
                                            : project.image
                                    }
                                    alt={`${project.name} preview`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <div className="flex flex-col justify-between p-6 sm:p-8">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
                                        Featured Project
                                    </p>
                                    <h3 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                                        {project.name}
                                    </h3>
                                    <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                                        {project.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                                            Fitur utama
                                        </h4>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {project.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                                    >
                                        <FiExternalLink />
                                        Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-cyan-500"
                                    >
                                        <FiGithub />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
