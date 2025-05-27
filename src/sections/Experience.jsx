import TabComponent from "../components/TabComponent.jsx";

export default function Experience() {
    return (
        <section id="experience" className="">
            <h2 className="text-header-txt-clr before:text-accent-clr before:font-reddit after:bg-main-txt-clr text-h2-section-sizing before:text-heading-num-sizing flex items-center justify-center font-bold before:mr-2 before:font-normal before:content-['02.'] after:ml-4 after:h-0.25 after:flex-1 after:content-[''] md:after:w-1/4 md:after:flex-none lg:after:w-1/3">
                Experience
            </h2>
            <div className="mt-16 h-80 sm:h-60 lg:h-65">
                <TabComponent />
            </div>
        </section>
    );
}
