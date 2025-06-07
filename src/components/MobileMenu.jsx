import { Link } from "react-scroll";

export default function MobileMenu({ isOpen, closeMenu }) {
    return (
        <nav
            className={`bg-main-bg-clr fixed top-0 left-0 z-50 h-screen w-full ${isOpen ? "translate-y-0 transition-transform duration-300" : "-translate-y-full transition-transform duration-300"} md:hidden`}
        >
            <ul className="flex h-full flex-col items-center justify-center gap-8 text-2xl sm:text-3xl">
                <Link
                    className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['01.'] hover:cursor-pointer hover:transition-colors"
                    to="about"
                    smooth={true}
                    duration={400}
                    offset={-90}
                    spy={true}
                    activeClass="active"
                    onClick={closeMenu}
                >
                    About
                </Link>
                <Link
                    className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['02.'] hover:cursor-pointer hover:transition-colors"
                    to="experience"
                    smooth={true}
                    duration={400}
                    offset={-90}
                    spy={true}
                    activeClass="active"
                    onClick={closeMenu}
                >
                    Experience
                </Link>
                <Link
                    className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['03.'] hover:cursor-pointer hover:transition-colors"
                    to="projects"
                    smooth={true}
                    duration={400}
                    offset={-90}
                    spy={true}
                    activeClass="active"
                    onClick={closeMenu}
                >
                    Projects
                </Link>
                <Link
                    className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['04.'] hover:cursor-pointer hover:transition-colors"
                    to="contact"
                    smooth={true}
                    duration={400}
                    offset={-90}
                    spy={true}
                    activeClass="active"
                    onClick={closeMenu}
                >
                    Contact
                </Link>
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
