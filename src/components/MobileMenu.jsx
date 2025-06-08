export default function MobileMenu({ isOpen, closeMenu, handleSmoothScroll }) {
    return (
        <nav
            className={`bg-main-bg-clr fixed top-0 left-0 z-50 h-screen w-full ${isOpen ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"} md:hidden`}
        >
            <ul className="flex h-full flex-col items-center justify-center gap-8 text-2xl sm:text-3xl">
                <li>
                    <a
                        href="#about"
                        className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['01.'] hover:cursor-pointer hover:transition-colors"
                        onClick={(e) => {
                            handleSmoothScroll(e, "about");
                            closeMenu();
                        }}
                        aria-label="Scroll to About section"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['02.'] hover:cursor-pointer hover:transition-colors"
                        onClick={(e) => {
                            handleSmoothScroll(e, "experience");
                            closeMenu();
                        }}
                        aria-label="Scroll to Experience section"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['03.'] hover:cursor-pointer hover:transition-colors"
                        onClick={(e) => {
                            handleSmoothScroll(e, "projects");
                            closeMenu();
                        }}
                        aria-label="Scroll to Projects section"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['04.'] hover:cursor-pointer hover:transition-colors"
                        onClick={(e) => {
                            handleSmoothScroll(e, "contact");
                            closeMenu();
                        }}
                        aria-label="Scroll to Contact section"
                    >
                        Contact
                    </a>
                </li>
                {/* <li>
                    <a
                        href="#"
                        className="text-accent-clr hover:bg-accent-clr hover:border-accent-clr hover:text-main-bg-clr rounded-sm border px-4.5 py-2.5 duration-300 hover:transition-colors"
                    >
                        Resume
                    </a>
                </li> */}
            </ul>
        </nav>
    );
}
