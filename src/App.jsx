// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlueDots from "./assets/images/blue-dots.svg?react";

export default function App() {
    return (
        <>
            <Header />
            <main className="relative overflow-hidden">
                <div className="mx-auto max-w-[1200px] px-7 sm:px-13 md:px-26 lg:px-39">
                    <Hero />
                    <div className="space-y-60 md:space-y-70">
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </div>
                </div>
                <BlueDots
                    className="absolute top-70 -right-6 -z-1 hidden rotate-180 md:block xl:hidden"
                    width="400"
                    height="400"
                />
                <BlueDots
                    className="absolute top-300 -left-6 -z-1 hidden md:block xl:hidden"
                    width="400"
                    height="400"
                />
                <BlueDots
                    className="absolute top-420 -right-6 -z-1 hidden rotate-180 md:block xl:hidden"
                    width="400"
                    height="400"
                />
                <BlueDots
                    className="absolute top-650 -left-6 -z-1 hidden md:block xl:hidden"
                    width="400"
                    height="400"
                />
            </main>
            <Footer />
        </>
    );
}
