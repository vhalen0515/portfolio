import TabComponent from "../components/TabComponent.jsx";
import { TABS } from "../data/tabData.jsx";
import BlueDots from "../assets/images/blue-dots.svg?react";

export default function Experience() {
    return (
        <section id="experience" className="relative">
            <BlueDots
                className="absolute -top-[65%] -left-6 -z-1 hidden md:block xl:hidden"
                width="400"
                height="400"
            />
            <div className="mx-auto max-w-[1200px] px-7 sm:px-13 md:px-26 lg:px-39">
                <h2 className="text-header-txt-clr before:text-accent-clr before:font-reddit after:bg-main-txt-clr text-h2-section-sizing before:text-heading-num-sizing flex items-center justify-center font-semibold before:mr-2 before:font-normal before:content-['02.'] after:ml-4 after:h-0.25 after:flex-1 after:content-[''] md:after:w-1/4 md:after:flex-none lg:after:w-1/3">
                    Experience
                </h2>
                <div className="mt-12 h-80 sm:h-60 md:mt-16 lg:h-65">
                    <TabComponent tabs={TABS} />
                </div>
            </div>
            <BlueDots
                className="absolute -right-6 -bottom-[90%] -z-1 hidden rotate-180 md:block xl:hidden"
                width="400"
                height="400"
            />
        </section>
    );
}
