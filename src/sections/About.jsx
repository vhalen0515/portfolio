import about_me_img from "../assets/images/about-me.webp";

export default function About() {
    return (
        <section id="about">
            <div className="mx-auto max-w-[1200px] px-7 sm:px-13 md:px-26 lg:px-39">
                <h2 className="text-header-txt-clr before:text-accent-clr before:font-reddit after:bg-main-txt-clr text-h2-section-sizing before:text-heading-num-sizing flex items-center font-semibold before:mr-2 before:font-normal before:content-['01.'] after:ml-4 after:h-0.25 after:flex-1 after:content-[''] md:after:w-1/4 md:after:flex-none lg:after:w-1/3">
                    About Me
                </h2>
                <div className="mt-8 flex flex-col items-center md:grid md:grid-cols-[3fr_2fr] md:place-items-start md:gap-12">
                    <div className="flex flex-col">
                        <p className="text-main-txt-clr mb-4 text-lg">
                            Hello! My name is Trenton Avilla, and I love
                            bringing ideas to life on the web. My journey into
                            web development began several years ago in 2019 when
                            I started experimenting with building simple
                            websites just for fun—and I quickly realized how
                            much I enjoyed the process of combining design and
                            code to create something people could interact with.
                        </p>

                        <p className="text-main-txt-clr mb-4 text-lg">
                            Since then, I’ve worked on a variety of projects,
                            from small, basic web apps to more complex websites
                            and designs. What keeps me hooked is the challenge
                            of creating intuitive, user-friendly experiences
                            that not only look good but feel great to use.
                        </p>

                        <p className="text-main-txt-clr mb-4 text-lg">
                            Lately, I’ve been focused on building responsive and
                            accessible web experiences using React and Tailwind
                            CSS—continually learning and evolving with each new
                            project.
                        </p>
                    </div>
                    <div className="relative mt-10 flex aspect-square w-3/4 max-w-[300px] md:mt-0 md:w-full">
                        <div className="before:border-accent-clr after:bg-accent-clr before:absolute before:inset-0 before:-z-10 before:translate-x-3 before:translate-y-3 before:rounded-md before:border-2 after:absolute after:inset-0 after:rounded-md after:opacity-40 after:transition-opacity after:duration-300 hover:after:opacity-0 md:before:translate-x-4 md:before:translate-y-4">
                            <img
                                src={about_me_img}
                                className="h-full w-full rounded-md object-cover"
                                alt="Picture of me"
                                width="300"
                                height="300"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
