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
                <div className="mx-auto max-w-[1200px] space-y-40 px-7 sm:px-13 md:space-y-70 md:px-26 lg:px-39">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
                <BlueDots className="absolute top-70 -right-6 -z-1 hidden rotate-180 md:block xl:hidden" />
                <BlueDots className="absolute top-300 -left-6 -z-1 hidden md:block xl:hidden" />
                <BlueDots className="absolute top-420 -right-6 -z-1 hidden rotate-180 md:block xl:hidden" />
                <BlueDots className="absolute top-650 -left-6 -z-1 hidden md:block xl:hidden" />
            </main>
            <Footer />
        </>

        // <>
        //     <Header />
        //     <main className="mx-auto max-w-[1200px] space-y-40 overflow-hidden px-7 sm:px-13 md:space-y-70 md:px-26 lg:px-39">
        //         <Hero />
        //         <About />
        //         {/* <BlueDots className="absolute top-55 -left-6 -z-1 hidden lg:block" /> */}
        //         <Experience />
        //         <Projects />
        //         <Contact />
        //         <BlueDots className="absolute top-115 -right-6 hidden rotate-180 md:block" />
        //     </main>
        //     <Footer />
        // </>
    );
}
