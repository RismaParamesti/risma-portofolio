import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function getActivityImages(activity) {
    if (Array.isArray(activity.images) && activity.images.length) {
        return activity.images.filter(Boolean);
    }

    return activity.image ? [activity.image] : [];
}

function getArticleParagraphs(activity) {
    if (Array.isArray(activity.article)) {
        return activity.article.filter(Boolean);
    }

    return activity.description ? [activity.description] : [];
}

export default function ActivityDetailPage({
    activities = [],
    navItems = [],
    darkMode,
    onToggleTheme,
}) {
    const { activityIndex } = useParams();
    const [mobileOpen, setMobileOpen] = useState(false);
    const activity = activities[Number(activityIndex)];
    const images = activity ? getActivityImages(activity) : [];
    const paragraphs = activity ? getArticleParagraphs(activity) : [];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        if (activity) {
            document.title = `${activity.company} | Risma Paramesti`;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [activity]);

    const goToPreviousImage = () => {
        setCurrentImageIndex((current) =>
            current === 0 ? images.length - 1 : current - 1,
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((current) =>
            current === images.length - 1 ? 0 : current + 1,
        );
    };

    if (!activity) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                <Navbar
                    items={navItems}
                    activePath="/experience"
                    darkMode={darkMode}
                    onToggleTheme={onToggleTheme}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
                <main className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                        Experience not found
                    </p>
                    <h1 className="mt-4 text-3xl font-bold">
                        Detail page not available
                    </h1>
                    <Link
                        to="/experience"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
                    >
                        <FiArrowLeft /> Back to experience
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
            <Navbar
                items={navItems}
                activePath="/experience"
                darkMode={darkMode}
                onToggleTheme={onToggleTheme}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
            <main className="mx-auto max-w-5xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
                <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                >
                    <FiArrowLeft /> Back to experience
                </Link>

                <div className="mt-8">
                    <div className="relative flex min-h-[18rem] items-center justify-center bg-slate-100 dark:bg-slate-950 sm:min-h-[28rem]">
                        {images.length ? (
                            <img
                                src={images[currentImageIndex]}
                                alt={`${activity.company} - photo ${currentImageIndex + 1}`}
                                className="max-h-[70vh] w-full object-contain"
                            />
                        ) : (
                            <div className="p-10 text-center text-slate-500">
                                No activity photos available.
                            </div>
                        )}
                        {images.length > 1 ? (
                            <>
                                <button
                                    type="button"
                                    onClick={goToPreviousImage}
                                    className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 text-white transition hover:bg-slate-950"
                                    aria-label="View previous image"
                                >
                                    <FiChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={goToNextImage}
                                    className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 text-white transition hover:bg-slate-950"
                                    aria-label="View next image"
                                >
                                    <FiChevronRight className="h-5 w-5" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-950/70 px-3 py-2">
                                    {images.map((image, index) => (
                                        <button
                                            key={`${image}-${index}`}
                                            type="button"
                                            onClick={() =>
                                                setCurrentImageIndex(index)
                                            }
                                            className={`h-2.5 w-2.5 rounded-full transition ${currentImageIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
                                            aria-label={`View image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : null}
                    </div>

                    <div className="mx-auto max-w-3xl px-0 py-10 sm:py-14">
                        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cyan-600 dark:text-cyan-300 sm:text-5xl">
                            {activity.role}
                        </h1>
                        <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                            {activity.company}
                        </p>
                        <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                            {activity.period}
                        </p>
                        <div className="mt-10 space-y-6 text-justify text-base leading-8 text-slate-600 dark:text-slate-300">
                            {paragraphs.map((paragraph, index) => (
                                <p key={`${paragraph}-${index}`}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
