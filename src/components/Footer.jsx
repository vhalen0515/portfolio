import InstagramIcon from "../assets/icons/instagram.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

export default function Footer() {
    return (
        <footer className="mx-auto mt-34 flex max-w-[1200px] flex-col items-center px-7 sm:mt-36 sm:px-13 md:px-26 lg:px-39">
            <div className="flex gap-6 md:hidden">
                <a
                    href=""
                    className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                    aria-label="Instagram link"
                >
                    <InstagramIcon width="24" height="24" />
                </a>
                <a
                    href=""
                    className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                    aria-label="Linkedin link"
                >
                    <LinkedinIcon width="24" height="24" />
                </a>
                <a
                    href=""
                    className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                    aria-label="GitHub link"
                >
                    <GithubIcon width="24" height="24" />
                </a>
            </div>
            <div className="text-main-txt-clr font-reddit my-3 flex flex-col gap-1 text-center text-xs sm:my-6 sm:gap-2">
                <p>Created with Tailwind and React.</p>
                <p>
                    Copyright © {new Date().getFullYear()} Trent Avilla. All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
