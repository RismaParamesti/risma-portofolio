import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

export default function HeroSection({
    profile,
    imageSrc,
    onDownloadCv,
    onContactClick,
}) {
    return (
        <section
            id="home"
            className="relative overflow-hidden pb-8 pt-10 sm:pt-14"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_24%),linear-gradient(to_bottom,rgba(2,6,23,0.02),rgba(2,6,23,0))]" />
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="max-w-3xl"
                >
                    <p className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
                        Available for web development opportunities
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                        {profile.name}
                    </h1>
                    <p className="mt-4 text-xl font-semibold text-cyan-600 dark:text-cyan-300 sm:text-2xl">
                        {profile.role}
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                        {profile.summary}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={onDownloadCv}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                        >
                            <FiDownload />
                            Download CV
                        </button>
                        <button
                            type="button"
                            onClick={onContactClick}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-cyan-500"
                        >
                            <FiMail />
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="relative mx-auto w-full max-w-md"
                >
                    <div className="absolute inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
                    <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900">
                        <img
                            src={imageSrc}
                            alt="Foto profil Risma Paramesti"
                            className="aspect-square w-full rounded-[1.5rem] object-cover"
                        />
                        <div className="mt-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                                Profile
                            </p>
                            <p className="mt-2 text-base font-semibold text-slate-950 dark:text-white">
                                Fullstack Developer
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                Combining intuitive UX, a well-structured frontend, and a reliable backend to create seamless digital experiences.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
