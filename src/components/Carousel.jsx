// import React from "react";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
// ORIGINAL CODE
import { DotButton, useDotButton } from "./CarouselDotButton.jsx";
// import { useDotButton } from "./CarouselDotButton.jsx";
import Autoplay from "embla-carousel-autoplay";

// Icons
import GithubIcon from "../assets/icons/github.svg?react";
import ExternalLinkIcon from "../assets/icons/external-link.svg?react";

// WITHOUT OPACITY
// const Carousel = (props) => {
//     const { slides, options } = props;
//     const autoplay = Autoplay({
//         delay: 70000,
//         stopOnMouseEnter: true,
//         stopOnInteraction: false,
//     });

//     const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

//     const onNavButtonClick = useCallback((emblaApi) => {
//         const autoplay = emblaApi?.plugins()?.autoplay;
//         if (!autoplay) return;

//         const resetOrStop =
//             autoplay.options.stopOnInteraction === false
//                 ? autoplay.reset
//                 : autoplay.stop;

//         resetOrStop();
//     }, []);

//     const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
//         emblaApi,
//         onNavButtonClick,
//     );

// WITH OPACITY
const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

const Carousel = (props) => {
    const { slides, options } = props;
    const autoplay = Autoplay({
        delay: 4000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
    });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);
    const tweenFactor = useRef(0);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget =
                                    scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget =
                                    scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const tweenValue =
                    1 - Math.abs(diffToTarget * tweenFactor.current);
                const opacity = numberWithinRange(tweenValue, 0, 1).toString();
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
            });
        });
    }, []);

    // DOES NOT ALLOW STOPONMOUSEENTER FUNCTIONALITY
    // useEffect(() => {
    //     if (!emblaApi) return;

    //     setTweenFactor(emblaApi);
    //     tweenOpacity(emblaApi);
    //     emblaApi
    //         .on("reInit", setTweenFactor)
    //         .on("reInit", tweenOpacity)
    //         .on("scroll", tweenOpacity)
    //         .on("slideFocus", tweenOpacity);
    // }, [emblaApi, tweenOpacity]);

    // ALLOWS STOPONMOUSEENTER FUNCTIONALITY
    useEffect(() => {
        if (!emblaApi) return;

        setTweenFactor(emblaApi);

        // Delay the tweening until after everything initializes
        requestAnimationFrame(() => {
            tweenOpacity(emblaApi);
        });

        emblaApi
            .on("reInit", setTweenFactor)
            .on("reInit", tweenOpacity)
            .on("scroll", tweenOpacity)
            .on("slideFocus", tweenOpacity);
    }, [emblaApi, tweenOpacity]);

    return (
        <section className="m-auto max-w-250">
            {/* Carousel slides */}
            <div className="mt-12 overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom gap-x-4 px-4 pb-3">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="min-w-0 flex-[0_0_100%] transform cursor-grab active:cursor-grabbing md:px-4"
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
                                        >
                                            <h2 className="text-header-secondary-txt-clr md:text-header-txt-clr hover:text-accent-clr text-slide-title font-semibold transition-colors duration-300">
                                                {slide.title}
                                            </h2>
                                        </a>
                                        <div className="md:bg-tab-accent-clr pointer-events-auto mt-2 rounded-md shadow-[0px_8px_10px_rgb(0,0,0,0.1)]">
                                            <p className="text-p-slide-desc py-3 md:p-5">
                                                {slide.description}
                                            </p>
                                        </div>
                                        <ul className="flex flex-wrap gap-2 md:mt-2">
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Carousel buttons */}
            <div className="mt-4 flex justify-center">
                <div className="flex flex-wrap gap-2">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`after:content-[] pointer-events-none flex h-4 w-4 items-center justify-center rounded-full after:h-2 after:w-2 after:rounded-full md:pointer-events-auto md:h-7 md:w-7 md:cursor-pointer md:after:h-3 md:after:w-3 ${
                                index === selectedIndex
                                    ? "after:border-accent-clr after:bg-accent-clr"
                                    : "after:bg-tab-accent-clr"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
