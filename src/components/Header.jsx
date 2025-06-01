import { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";
import { Link } from "react-scroll";

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;
            const isPastThreshold = currentScrollY > 50;

            setHidden(isScrollingDown && isPastThreshold);
            setShowBg(!isScrollingDown && isPastThreshold);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"} ${showBg ? "bg-main-bg-clr/50 backdrop-blur-xs" : ""}`}
        >
            <div className="font-reddit mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
                <a href="https://www.google.com" target="_blank">
                    <img
                        className="box-content h-10 w-10 hover:cursor-pointer"
                        src={logo}
                        alt="Picture of logo"
                        width="40"
                        height="40"
                    />
                </a>
                {/* TODO: Add onClick property to button for pop-out */}
                {/* onClick = () => .... */}
                <button>
                    <div className="flex cursor-pointer flex-col gap-1.5 md:hidden">
                        <div className="bg-accent-clr h-0.5 w-6"></div>
                        <div className="bg-accent-clr h-0.5 w-8"></div>
                        <div className="bg-accent-clr h-0.5 w-6"></div>
                    </div>
                </button>
                {/* TODO: Add pop-out menu code here */}
                <nav className="hidden md:block">
                    <ul className="flex items-center text-sm">
                        <li>
                            <Link
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['01.'] hover:cursor-pointer hover:transition-colors"
                                to="about"
                                smooth={true}
                                duration={400}
                                offset={-80} // Optional offset for sticky headers
                                spy={true}
                                activeClass="active"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['02.'] hover:cursor-pointer hover:transition-colors"
                                to="experience"
                                smooth={true}
                                duration={400}
                                offset={-80} // Optional offset for sticky headers
                                spy={true}
                                activeClass="active"
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['03.'] hover:cursor-pointer hover:transition-colors"
                                to="projects"
                                smooth={true}
                                duration={400}
                                offset={-80} // Optional offset for sticky headers
                                spy={true}
                                activeClass="active"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['04.'] hover:cursor-pointer hover:transition-colors"
                                to="contact"
                                smooth={true}
                                duration={400}
                                offset={-80} // Optional offset for sticky headers
                                spy={true}
                                activeClass="active"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="ml-[1.125rem] hidden">
                            <a
                                href="#"
                                className="text-accent-clr hover:bg-accent-clr hover:border-accent-clr hover:text-main-bg-clr rounded-sm border px-4.5 py-2.5 duration-300 hover:transition-colors"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
