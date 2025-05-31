import Carousel from "../components/Carousel.jsx";
import { SLIDES, OPTIONS } from "../data/slidesData.js"

export default function Projects() {
    return (
        <section id="projects" className="relative">
            <h2 className="text-header-txt-clr before:text-accent-clr before:font-reddit after:bg-main-txt-clr text-h2-section-sizing before:text-heading-num-sizing flex items-center font-semibold before:mr-2 before:font-normal before:content-['03.'] after:ml-4 after:h-0.25 after:flex-1 after:content-[''] md:after:w-1/4 md:after:flex-none lg:after:w-1/3">
                Some Recent Projects
            </h2>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </section>
    );
}
