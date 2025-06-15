import { motion } from "motion/react";
import EmailIcon from "../assets/icons/email.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";

export default function LeftSidebar() {
    return (
        <motion.div
            className="after:bg-main-txt-clr fixed bottom-0 left-4 z-10 hidden items-center [writing-mode:vertical-lr] after:block after:h-23 after:w-0.25 after:content-[''] md:flex lg:left-10 xl:left-[calc((100vw-1200px)/2-40px)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1.8,
                duration: 1,
                ease: "easeOut",
            }}
        >
            <a
                href="https://github.com/vhalen0515"
                className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                target="_blank"
                aria-label="Link to GitHub profile"
            >
                <GithubIcon className="h-5" width="24" height="20" />
            </a>
            <a
                href="https://www.linkedin.com/in/trent-avilla/"
                className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                target="_blank"
                aria-label="Link to LinkedIn profile"
            >
                <LinkedinIcon className="h-5" width="24" height="20" />
            </a>
            <a
                href="https://www.instagram.com/trent_av/"
                className="text-main-txt-clr hover:text-accent-clr px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                target="_blank"
                aria-label="Link to Instagram profile"
            >
                <InstagramIcon className="h-5" width="24" height="20" />
            </a>
            <a
                href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
                className="text-main-txt-clr hover:text-accent-clr mb-4 px-3 py-2 transition-transform duration-300 hover:translate-y-[-3px]"
                aria-label="Send an email to Trent"
            >
                <EmailIcon className="h-5" width="24" height="20" />
            </a>
        </motion.div>
    );
}
