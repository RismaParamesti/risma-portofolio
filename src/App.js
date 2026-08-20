import { useEffect, useMemo, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AboutSection from "./components/AboutSection";
import BackToTopButton from "./components/BackToTopButton";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { portfolioData } from "./data/portfolioData";
import ActivityDetailPage from "./pages/ActivityDetailPage";

const sectionPaths = new Set([
    "/",
    "/about",
    "/skills",
    "/projects",
    "/experience",
    "/certificates",
    "/contact",
]);

function scrollToSection(pathname) {
    if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const id = pathname.replace("/", "");
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function PortfolioRoutes({ darkMode, onToggleTheme, onDownloadCv }) {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        document.title = "Risma Paramesti | Fullstack Developer";

        const timer = window.setTimeout(() => {
            if (sectionPaths.has(location.pathname)) {
                scrollToSection(location.pathname);
            }
        }, 80);

        return () => window.clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 360);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.add(
            "bg-slate-50",
            "text-slate-950",
            "dark:bg-slate-950",
            "dark:text-white",
        );
        return () => {
            document.body.classList.remove(
                "bg-slate-50",
                "text-slate-950",
                "dark:bg-slate-950",
                "dark:text-white",
            );
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
            <Navbar
                items={portfolioData.navItems}
                activePath={location.pathname}
                darkMode={darkMode}
                onToggleTheme={onToggleTheme}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            <main>
                <HeroSection
                    profile={portfolioData.profile}
                    imageSrc={portfolioData.profileImage}
                    onDownloadCv={onDownloadCv}
                    onContactClick={() => scrollToSection("/contact")}
                />
                <AboutSection
                    points={portfolioData.aboutPoints}
                />
                <SkillsSection groups={portfolioData.skillGroups} />
                <ProjectsSection projects={portfolioData.projects} />
                <ExperienceSection
                    experiences={portfolioData.experiences}
                    workExperiences={portfolioData.workExperiences}
                    activityExperiences={portfolioData.activityExperiences}
                />
                <CertificatesSection
                    certificates={portfolioData.certificatesList}
                />
                <ContactSection contact={portfolioData.contact} />
            </main>

            <Footer />
            <BackToTopButton
                visible={showBackToTop}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
        </div>
    );
}

export default function App() {
    const initialTheme = useMemo(() => {
        const storedTheme = localStorage.getItem("portfolio-theme");
        if (storedTheme) return storedTheme === "dark";
        return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    }, []);

    const [darkMode, setDarkMode] = useState(initialTheme);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setLoading(false), 1100);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    const downloadCv = () => {
        const link = document.createElement("a");
        link.href = "/CV_Risma_Paramesti.pdf";
        link.download = "CV_Risma_Paramesti.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <HashRouter>
            {loading ? <LoadingScreen /> : null}
            <Routes>
                <Route
                    path="/experience/:activityIndex"
                    element={
                        <ActivityDetailPage
                            activities={portfolioData.activityExperiences}
                            navItems={portfolioData.navItems}
                            darkMode={darkMode}
                            onToggleTheme={() =>
                                setDarkMode((current) => !current)
                            }
                        />
                    }
                />
                <Route
                    path="*"
                    element={
                        <PortfolioRoutes
                            darkMode={darkMode}
                            onToggleTheme={() =>
                                setDarkMode((current) => !current)
                            }
                            onDownloadCv={downloadCv}
                        />
                    }
                />
            </Routes>
        </HashRouter>
    );
}
