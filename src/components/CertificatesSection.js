import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function CertificatesSection({ certificates }) {
    const [selected, setSelected] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSelectCertificate = (certificate) => {
        setSelected(certificate);
        setCurrentImageIndex(0);
    };

    const selectedImages = selected
        ? [selected.image, selected.imageBelakang].filter(Boolean)
        : [];

    const getCurrentImage = () => {
        if (!selectedImages.length) return null;
        return selectedImages[currentImageIndex] || selectedImages[0];
    };

    const hasMultipleImages = selectedImages.length > 1;

    const goToPreviousImage = () => {
        setCurrentImageIndex((current) =>
            current === 0 ? selectedImages.length - 1 : current - 1,
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((current) =>
            current === selectedImages.length - 1 ? 0 : current + 1,
        );
    };

    return (
        <>
            <section id="certificates" className="scroll-mt-28 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Certificates"
                        title="Certificate Gallery"
                        description="Click any certificate to view it in detail."
                    />

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {certificates.map((certificate, index) => (
                            <motion.button
                                type="button"
                                key={certificate.title}
                                onClick={() =>
                                    handleSelectCertificate(certificate)
                                }
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.04,
                                }}
                                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                            >
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="aspect-[7/5] w-full object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                                        {certificate.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {certificate.description ||
                                            "View certificate in modal view."}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selected ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 10 }}
                            transition={{ duration: 0.25 }}
                            className="w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl dark:bg-slate-900"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                                        {selected.title}
                                    </h3>
                                    {selected.description && (
                                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                            {selected.description}
                                        </p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelected(null)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300"
                                    aria-label="Close certificate preview"
                                >
                                    <FiX />
                                </button>
                            </div>
                            <div className="relative flex w-full items-center justify-center bg-slate-50 dark:bg-slate-950">
                                <img
                                    src={getCurrentImage()}
                                    alt={selected.title}
                                    className="h-auto w-full max-h-[70vh] object-contain"
                                />

                                {hasMultipleImages && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={goToPreviousImage}
                                            className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/70 text-white transition hover:bg-slate-900"
                                            aria-label="Lihat gambar sebelumnya"
                                        >
                                            <FiChevronLeft className="h-5 w-5" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={goToNextImage}
                                            className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/70 text-white transition hover:bg-slate-900"
                                            aria-label="Lihat gambar berikutnya"
                                        >
                                            <FiChevronRight className="h-5 w-5" />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-900/70 px-3 py-1.5">
                                            {selectedImages.map(
                                                (_, dotIndex) => (
                                                    <button
                                                        key={`dot-${dotIndex}`}
                                                        type="button"
                                                        onClick={() =>
                                                            setCurrentImageIndex(
                                                                dotIndex,
                                                            )
                                                        }
                                                        className={`h-2.5 w-2.5 rounded-full transition ${
                                                            currentImageIndex ===
                                                            dotIndex
                                                                ? "bg-white"
                                                                : "bg-white/40 hover:bg-white/60"
                                                        }`}
                                                        aria-label={`Lihat gambar ${dotIndex + 1}`}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
