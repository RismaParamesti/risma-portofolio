import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

function getActivityImages(activity) {
    if (Array.isArray(activity.images) && activity.images.length) {
        return activity.images.filter(Boolean);
    }

    if (activity.image) {
        return [activity.image];
    }

    return [];
}

function TimelineList({ items }) {
    return (
        <div className="relative mt-6">
            <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 sm:left-6" />
            <div className="space-y-6">
                {items.map((experience, index) => (
                    <motion.article
                        key={`${experience.company}-${experience.period}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="relative pl-12 sm:pl-16"
                    >
                        <span className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-white bg-cyan-500 shadow-sm dark:border-slate-950" />
                        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-300">
                                        {experience.company}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                                        {experience.role}
                                    </p>
                                </div>
                                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                                    {experience.period}
                                </span>
                            </div>
                            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                                {experience.description}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}

export default function ExperienceSection({
    experiences = [],
    workExperiences = [],
    activityExperiences = [],
}) {
    const fallbackWork = workExperiences.length ? workExperiences : experiences;
    const fallbackActivities = activityExperiences;

    return (
        <section id="experience" className="scroll-mt-28 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Experience"
                    title="Timeline Experience"
                />

                <div className="mt-10 space-y-10">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Work Experience
                        </h3>
                        <TimelineList items={fallbackWork} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                            Activity Experience
                        </h3>
                        {fallbackActivities.length ? (
                            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {fallbackActivities.map((experience, index) => {
                                    const images =
                                        getActivityImages(experience);
                                    const previewImage = images[0];

                                    return (
                                        <motion.div
                                            key={`${experience.company}-${experience.period}-${index}`}
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.04,
                                            }}
                                            className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                                        >
                                            <Link
                                                to={`/experience/${index}`}
                                                className="block"
                                            >
                                                {previewImage ? (
                                                    <img
                                                        src={previewImage}
                                                        alt={
                                                            experience.company ||
                                                            experience.role
                                                        }
                                                        className="aspect-[7/5] w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="aspect-[7/5] w-full bg-gradient-to-br from-cyan-500 to-blue-700" />
                                                )}
                                                <div className="p-5">
                                                    <h4 className="mt-2 text-xl font-bold leading-tight text-cyan-600 dark:text-cyan-300">
                                                        {experience.role}
                                                    </h4>
                                                    <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                                                        {experience.company ||
                                                            "Activity Experience"}
                                                    </p>
                                                    <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                                                        {experience.period}
                                                    </span>
                                                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                        {experience.description}
                                                    </p>
                                                    {images.length > 1 ? (
                                                        <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                                                            {images.length} foto
                                                            tersedia
                                                        </p>
                                                    ) : null}
                                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                                                        View Detail
                                                        <FiArrowRight />
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                                Belum ada data experience kegiatan.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
