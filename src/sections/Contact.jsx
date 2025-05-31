import BlueDots from "../assets/images/blue-dots.svg?react";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center">
            <h2 className="text-accent-clr font-reddit before:mr-2 before:content-['04.']">
                Need Some Help?
            </h2>
            <h3 className="text-header-txt-clr md:text-h3-sizing mt-4 text-4xl font-semibold md:mt-5">
                Let's Connect
            </h3>
            <p className="text-main-txt-clr mt-4 text-center md:mt-5 md:text-lg lg:max-w-[550px]">
                Have a project in mind, a freelance gig, or just want to
                chat? I'd love to hear from you. Let’s build something
                together.
            </p>
            <a
                href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
                role="button"
                aria-label="Send an email to Tavilla04"
                className="text-accent-clr hover:bg-accent-clr hover:border-accent-clr hover:text-main-bg-clr font-reddit mt-12 rounded-sm border px-6 py-4 transition-colors duration-300"
            >
                Reach Out
            </a>
            {/* <BlueDots className="absolute top-40 -left-6 -z-1 hidden lg:block" /> */}
        </section>
    );
}
