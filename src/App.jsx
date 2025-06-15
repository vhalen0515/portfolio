import { useCallback } from "react";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import RightSidebar from "./components/RightSidebar.jsx";
import LeftSidebar from "./components/LeftSidebar.jsx";

export default function App() {
    // Smooth scrolling on nav links
    const handleSmoothScroll = useCallback((e, targetId, offset = -100) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, []);

    return (
        <>
            <Header handleSmoothScroll={handleSmoothScroll} />
            <main className="overflow-hidden">
                <Hero handleSmoothScroll={handleSmoothScroll} />
                <div className="space-y-60 md:space-y-70">
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
                <RightSidebar />
                <LeftSidebar />
            </main>
            <Footer />
        </>
    );
}
