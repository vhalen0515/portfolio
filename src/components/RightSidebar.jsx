import { motion } from "motion/react";

export default function RightSidebar() {
    return (
        <motion.div
            className="after:bg-main-txt-clr fixed right-4 bottom-0 z-10 hidden items-center [writing-mode:vertical-rl] after:block after:h-23 after:w-0.25 after:content-[''] md:flex lg:right-10 xl:right-[calc((100vw-1200px)/2-40px)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 1.8,
                duration: 1,
                ease: "easeOut",
            }}
        >
            <a
                href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
                className="text-main-txt-clr hover:text-accent-clr font-reddit mx-6 py-2 text-xs tracking-[1.5px] transition-transform duration-300 hover:translate-y-[-3px]"
                aria-label="Send an email to Trent"
            >
                tavilla04@gmail.com
            </a>
        </motion.div>
    );
}
