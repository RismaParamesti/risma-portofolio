import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
