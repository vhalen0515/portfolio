import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import GithubIcon from "../assets/icons/github.svg?react";
import ExternalLinkIcon from "../assets/icons/external-link.svg?react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SwiperComponent({ slides }) {
    const swiperRef = useRef(null);
    return (
        <>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onResize={() => swiperRef.current?.update()}
                pagination={{
                    dynamicBullets: true,
                }}
                spaceBetween={60}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={600}
                loop={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className="mt-12 cursor-grab px-7 active:cursor-grabbing"
                    >
                        <ul className="select-none">
                            {/* Slide Content */}
                            <li className="text-main-txt-clr relative grid grid-cols-12">
                                {/* Image Container */}
                                <div className="after:bg-secondary-overlay-clr md:after:bg-accent-clr col-start-1 col-end-[-1] row-start-1 row-end-2 h-80 after:pointer-events-none after:absolute after:inset-0 after:col-start-1 after:row-start-1 after:row-end-2 after:h-80 after:rounded-md after:opacity-92 after:transition-opacity after:duration-300 md:col-end-8 md:after:col-end-8 md:after:opacity-40 md:hover:after:opacity-0">
                                    <a
                                        href={slide.externalLink}
                                        className="pointer-events-none md:pointer-events-auto"
                                        target="_blank"
                                        aria-label="Slide Image Link"
                                    >
                                        <img
                                            src={slide.image}
                                            alt=""
                                            className="h-full w-full rounded-md object-cover object-top shadow-[0_2px_10px_0px_rgb(0,0,0,0.3)]"
                                            loading="lazy"
                                        />
                                    </a>
                                </div>

                                {/* Text Container */}
                                <div className="py- pointer-events-none z-10 col-start-1 col-end-[-1] row-start-1 row-end-2 flex h-80 flex-col justify-center px-4 text-left sm:gap-1 sm:px-8 md:col-start-5 md:items-end md:gap-3 md:pr-0 md:text-right">
                                    <a
                                        href={slide.externalLink}
                                        className="pointer-events-auto"
                                        aria-label="Slide Title Link"
                                        target="_blank"
                                    >
                                        <h2 className="text-header-secondary-txt-clr md:text-header-txt-clr hover:text-accent-clr text-slide-title font-semibold transition-colors duration-300">
                                            {slide.title}
                                        </h2>
                                    </a>
                                    <div className="md:bg-tab-accent-clr pointer-events-auto mt-2 rounded-md md:shadow-[0px_8px_10px_rgb(0,0,0,0.1)]">
                                        <p className="text-p-slide-desc py-3 md:p-5">
                                            {slide.description}
                                        </p>
                                    </div>
                                    <ul className="flex flex-wrap gap-2 md:mt-2 md:w-3/4 md:justify-end">
                                        {slide.tools.map((tool) => (
                                            <li
                                                key={tool}
                                                className="font-reddit text-header-txt-clr border-accent-clr rounded-xl border px-3 py-0.5 text-xs"
                                            >
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pointer-events-auto mt-2 flex items-center gap-1 md:mt-0">
                                        <a
                                            href={slide.githubLink}
                                            className="hover:text-accent-clr text-header-txt-clr p-2 transition-colors duration-300"
                                            aria-label="GitHub Link"
                                            target="_blank"
                                        >
                                            <GithubIcon
                                                width="24"
                                                height="24"
                                            />
                                        </a>
                                        <a
                                            href={slide.externalLink}
                                            className="hover:text-accent-clr text-header-txt-clr p-2 transition-colors duration-300"
                                            target="_blank"
                                            aria-label="External Link"
                                        >
                                            <ExternalLinkIcon
                                                width="24"
                                                height="24"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
