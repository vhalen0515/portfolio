export default function Hero() {
    return (
        <section className="mb-60 flex h-screen flex-col justify-center sm:mt-10 md:mt-10 md:mb-70">
            <div>
                <p className="font-reddit text-accent-clr text-hero-intro mb-8 text-base md:mb-7">
                    Hi, my name is
                </p>
                <h1 className="text-h1-sizing text-header-txt-clr header-leading leading-header font-bold tracking-wider">
                    Trenton Avilla
                    <span className="text-accent-clr">.</span>
                </h1>
                <h2 className="text-h2-sizing text-main-txt-clr leading-header-h2 mt-2 font-semibold tracking-wide">
                    I am a Front-End Developer
                    <span className="text-accent-clr">.</span>
                </h2>
                <p className="text-main-txt-clr text-hero-desc mt-6 max-w-lg sm:mt-6">
                    I like to design and build things for the web
                    <span className="text-accent-clr">.</span> I currently enjoy
                    using React and Tailwind to create functional and engaging
                    websites<span className="text-accent-clr">.</span>
                </p>
                <a
                    href="#projects"
                    className="text-accent-clr hover:bg-accent-clr hover:text-main-bg-clr mt-14 inline-block cursor-pointer rounded-sm border px-6 py-4 duration-300 hover:transition-colors"
                    onClick={(e) => handleSmoothScroll(e, "projects")}
                    aria-label="Scroll to Projects section"
                >
                    Recent Work
                </a>
            </div>
        </section>
    );
}
