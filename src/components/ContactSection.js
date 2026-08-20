import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiSend,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const initialFormState = { name: "", email: "", message: "" };

export default function ContactSection({ contact }) {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const contactLinks = useMemo(
        () => [
            {
                label: "Email",
                value: contact.email,
                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`,
                icon: FiMail,
            },
            {
                label: "LinkedIn",
                value: contact.linkedin,
                href: `https://${contact.linkedin}`,
                icon: FiLinkedin,
            },
            {
                label: "GitHub",
                value: contact.github,
                href: `https://${contact.github}`,
                icon: FiGithub,
            },
            {
                label: "Instagram",
                value: contact.instagram,
                href: `https://${contact.instagram}`,
                icon: FiInstagram,
            },
        ],
        [contact],
    );

    const validate = () => {
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = "Nama wajib diisi.";
        if (!form.email.trim()) nextErrors.email = "Email wajib diisi.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            nextErrors.email = "Format email tidak valid.";
        if (!form.message.trim()) nextErrors.message = "Pesan wajib diisi.";
        else if (form.message.trim().length < 20)
            nextErrors.message =
                "Pesan minimal 20 karakter agar konteksnya jelas.";

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(false);
        if (!validate()) return;

        const subject = `Portfolio inquiry from ${form.name.trim()}`;
        const body = [
            `Name: ${form.name.trim()}`,
            `Email: ${form.email.trim()}`,
            "",
            form.message.trim(),
        ].join("\n");

        const gmailComposeUrl =
            `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}` +
            `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
        setSubmitted(true);
        setForm(initialFormState);
    };

    return (
        <section id="contact" className="scroll-mt-28 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Contact" title="Get in Touch" />

                <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="space-y-4">
                            {contactLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-slate-200 px-4 py-4 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-slate-800 dark:hover:border-cyan-500"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                                                <Icon />
                                            </span>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-950 dark:text-white">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        onSubmit={handleSubmit}
                        className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="grid gap-5">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            name: event.target.value,
                                        }))
                                    }
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                                {errors.name ? (
                                    <p className="mt-2 text-sm text-rose-500">
                                        {errors.name}
                                    </p>
                                ) : null}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            email: event.target.value,
                                        }))
                                    }
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                                {errors.email ? (
                                    <p className="mt-2 text-sm text-rose-500">
                                        {errors.email}
                                    </p>
                                ) : null}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    value={form.message}
                                    onChange={(event) =>
                                        setForm((current) => ({
                                            ...current,
                                            message: event.target.value,
                                        }))
                                    }
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                                {errors.message ? (
                                    <p className="mt-2 text-sm text-rose-500">
                                        {errors.message}
                                    </p>
                                ) : null}
                            </div>

                            {submitted ? (
                                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                                    Email draft has been created. Please check
                                    your email application to send it.
                                </p>
                            ) : null}

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
                            >
                                <FiSend />
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
                    <a
                        href="https://linkedin.com/in/rismaparamesti"
                        className="transition hover:text-cyan-600"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/rismaparamesti"
                        className="transition hover:text-cyan-600"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FiGithub className="text-xl" />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rismaparamesti@gmail.com"
                        className="transition hover:text-cyan-600"
                        aria-label="Email"
                    >
                        <FiMail className="text-xl" />
                    </a>
                    <a
                        href="https://www.instagram.com/risma_mesti/"
                        className="transition hover:text-cyan-600"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FiInstagram className="text-xl" />
                    </a>
                </div>
            </div>
        </section>
    );
}
