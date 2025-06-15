import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SwiperComponent from "../components/SwiperComponent";
import { SLIDES } from "../data/slidesData.js";
import BlueDots from "../assets/images/blue-dots.svg?react";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="projects" className="relative">
            <motion.div
                className="mx-auto max-w-[1200px] px-7 sm:px-13 md:px-26 lg:px-39"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                ref={ref}
            >
                <h2 className="text-header-txt-clr before:text-accent-clr before:font-reddit after:bg-main-txt-clr text-h2-section-sizing before:text-heading-num-sizing flex items-center font-semibold before:mr-2 before:font-normal before:content-['03.'] after:ml-4 after:h-0.25 after:flex-1 after:content-[''] md:after:w-1/4 md:after:flex-none lg:after:w-1/3">
                    Some Recent Projects
                </h2>
                <SwiperComponent slides={SLIDES} />
            </motion.div>
            <BlueDots
                className="absolute -bottom-[100%] -left-6 -z-1 hidden md:block xl:hidden"
                width="400"
                height="400"
            />
        </section>
    );
}
