import { useEffect, useState } from "react";
import { motion } from "motion/react";
import logo from "../assets/images/logo.webp";
import MobileMenu from "./MobileMenu.jsx";

export default function Header({ handleSmoothScroll }) {
    const [hidden, setHidden] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Animation variables
    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    // Tracks scrolling and header visibility
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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out ${hidden ? "-translate-y-full" : "translate-y-0"} ${showBg ? "bg-main-bg-clr/50 backdrop-blur-xs" : ""}`}
        >
            <div className="font-reddit mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
                {/* Site logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <a
                        href="https://www.trent-avilla.com/"
                        aria-label="Go to homepage"
                    >
                        <img
                            className="box-content h-10 w-10 hover:cursor-pointer"
                            src={logo}
                            alt="Picture of logo"
                            width="40"
                            height="40"
                        />
                    </a>
                </motion.div>

                {/* Mobile menu button */}
                <motion.button
                    onClick={toggleMenu}
                    className="relative z-100 h-10 w-10 cursor-pointer md:hidden"
                    aria-label="Open mobile menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 flex flex-col justify-center gap-1.5 transition-all duration-300">
                        <span
                            className={`bg-accent-clr h-0.5 w-6 transition-transform duration-300 ${
                                isOpen ? "w-7 translate-y-2 rotate-45" : ""
                            }`}
                        ></span>
                        <span
                            className={`bg-accent-clr h-0.5 w-8 transition-all duration-100 ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`bg-accent-clr h-0.5 w-6 transition-transform duration-300 ${
                                isOpen ? "w-7 -translate-y-2 -rotate-45" : ""
                            }`}
                        ></span>
                    </div>
                </motion.button>

                {/* Mobile menu component */}
                <MobileMenu
                    className="md:hidden"
                    isOpen={isOpen}
                    closeMenu={() => setIsOpen(false)}
                    handleSmoothScroll={handleSmoothScroll}
                />

                {/* Desktop menu links */}
                <nav className="hidden md:block">
                    <motion.ul
                        className="flex items-center text-sm"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.li variants={item}>
                            <a
                                href="#about"
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['01.'] hover:cursor-pointer hover:transition-colors"
                                onClick={(e) => handleSmoothScroll(e, "about")}
                                aria-label="Scroll to About section"
                            >
                                About
                            </a>
                        </motion.li>
                        <motion.li variants={item}>
                            <a
                                href="#experience"
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['02.'] hover:cursor-pointer hover:transition-colors"
                                onClick={(e) =>
                                    handleSmoothScroll(e, "experience")
                                }
                                aria-label="Scroll to Experience section"
                            >
                                Experience
                            </a>
                        </motion.li>
                        <motion.li variants={item}>
                            <a
                                href="#projects"
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['03.'] hover:cursor-pointer hover:transition-colors"
                                onClick={(e) =>
                                    handleSmoothScroll(e, "projects")
                                }
                                aria-label="Scroll to Projects section"
                            >
                                Projects
                            </a>
                        </motion.li>
                        <motion.li variants={item}>
                            <a
                                href="#contact"
                                className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr px-4.5 py-2.5 duration-300 before:mr-1.5 before:content-['04.'] hover:cursor-pointer hover:transition-colors"
                                onClick={(e) =>
                                    handleSmoothScroll(e, "contact")
                                }
                                aria-label="Scroll to Contact section"
                            >
                                Contact
                            </a>
                        </motion.li>
                        {/* <motion.li className="ml-[1.125rem] hidden">
                            <a
                                href="#"
                                className="text-accent-clr hover:bg-accent-clr hover:border-accent-clr hover:text-main-bg-clr rounded-sm border px-4.5 py-2.5 duration-300 hover:transition-colors"
                                aria-label="Download Resume"
                            >
                                Resume
                            </a>
                        </motion.li> */}
                    </motion.ul>

                    {/* <motion.ul
                        className="flex items-center text-sm"
                        initial="hidden"
                        animate="visible"
                    >
                        {["About", "Experience", "Projects", "Contact"].map(
                            (text, i) => (
                                <motion.li
                                    key={text}
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.2 + i * 0.15,
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                >
                                    <a
                                        href={`#${text.toLowerCase()}`}
                                        className="text-main-txt-clr hover:text-accent-clr before:text-accent-clr before:content-['0'${i + 1}.'] px-4.5 py-2.5 duration-300 before:mr-1.5 hover:cursor-pointer hover:transition-colors"
                                        onClick={(e) =>
                                            handleSmoothScroll(
                                                e,
                                                text.toLowerCase(),
                                            )
                                        }
                                        aria-label={`Scroll to ${text} section`}
                                    >
                                        <span className="text-accent-clr mr-1.5 font-mono text-sm">
                                            {String(i + 1).padStart(2, "0")}.
                                        </span>
                                        {text}
                                    </a>
                                </motion.li>
                            ),
                        )}
                    </motion.ul> */}
                </nav>
            </div>
        </header>
    );
}
