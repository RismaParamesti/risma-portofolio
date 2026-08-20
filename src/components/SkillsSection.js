import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function SkillsSection({ groups }) {
    const skills = groups.flatMap((group) => group.skills);

    return (
        <section id="skills" className="scroll-mt-28 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Skills"
                    title="Technologies and tools I use to build digital solutions."
                />

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <motion.article
                            key={skill.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                                    {skill.name}
                                </h3>
                                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                                    {skill.level}%
                                </span>
                            </div>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 transition-all"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
