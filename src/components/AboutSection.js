import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function AboutSection({ points }) {
    return (
        <section id="about" className="scroll-mt-28 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="About"
                    title="Professional Profile Summary"
                    description="Focused on building efficient, well-structured, and user-friendly applications that deliver practical solutions for businesses and organizations."
                />

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-10"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                            About Me
                        </p>
                        <p className="text-justify text-base leading-8 text-slate-600 dark:text-slate-300">
                            I build web solutions across both the frontend and
                            backend, with a focus on maintainability,
                            performance, and user experience. Through my
                            experience as a Fullstack Web Developer at PT Otak
                            Kanan and BPBD Kota Surabaya, I have developed web
                            applications, integrated APIs, managed data, and
                            translated business and organizational needs into
                            practical digital solutions.
                        </p>
                        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                            <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">
                                Core strengths
                            </p>
                            <div className="space-y-4">
                                {points.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-3"
                                    >
                                        <FiCheckCircle className="mt-1 shrink-0 text-xl text-cyan-500" />
                                        <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:p-10"
                    >
                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-2xl dark:bg-cyan-500/20" />
                        <div className="relative">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                My Approach
                            </p>
                            <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                                From ideas to practical digital solutions.
                            </h3>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-300">
                                I combine technical execution with a clear
                                understanding of user needs to create products
                                that are reliable, useful, and ready to grow.
                            </p>

                            <div className="mt-8 space-y-3">
                                {[
                                    [
                                        "01",
                                        "Understand",
                                        "Clarify goals, users, and the problem to solve.",
                                    ],
                                    [
                                        "02",
                                        "Build",
                                        "Develop structured interfaces, APIs, and data flows.",
                                    ],
                                    [
                                        "03",
                                        "Improve",
                                        "Refine the experience through testing and iteration.",
                                    ],
                                ].map(([number, title, description]) => (
                                    <div
                                        key={number}
                                        className="flex gap-4 border-t border-slate-200 py-4 dark:border-white/10"
                                    >
                                        <span className="text-sm font-bold text-cyan-600 dark:text-cyan-300">
                                            {number}
                                        </span>
                                        <div>
                                            <h4 className="font-semibold">
                                                {title}
                                            </h4>
                                            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
