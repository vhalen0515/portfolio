<script>
    // lifecycle
    import { onMount, onDestroy } from 'svelte';

    // data
    import { SLIDES } from '../../lib/data/projects.js';

    // icons
    import Arrow from '../../assets/icons/Arrow.svelte';
    import Github from '../../assets/icons/Github.svelte';
    import ExternalLink from '../../assets/icons/ExternalLink.svelte';

    /* -------------------------------------
       CONFIGURATION
    ------------------------------------- */

    export let autoplay = true;
    export let autoplayDelay = 3000;
    export let transitionDuration = 700;

    const DRAG_THRESHOLD = 60; // px required to change slides
    const DRAG_START_THRESHOLD = 5; // px before drag starts

    /* -------------------------------------
       CORE STATE
    ------------------------------------- */

    let interval;
    let isAnimating = false;
    let isTransitioning = true;

    /* -------------------------------------
       DOM REFERENCES
    ------------------------------------- */

    let sliderEl;

    /* -------------------------------------
       POINTER STATE
    ------------------------------------- */

    let isDragging = false;
    let dragAllowed = false; // pointer must start inside slider
    let startX = 0;
    let currentTranslate = 0;
    let dragOffset = 0;

    /* -------------------------------------
       SLIDE MODEL
    ------------------------------------- */

    const slides = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];
    const lastRealIndex = slides.length - 2;
    let currentIndex = 1;

    /* -------------------------------------
       AUTOPLAY
    ------------------------------------- */

    function startAutoplay() {
        if (!autoplay) return;
        stopAutoplay();
        interval = setInterval(next, autoplayDelay);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    /* -------------------------------------
       NAVIGATION
    ------------------------------------- */

    function next() {
        if (isAnimating) return;
        isAnimating = true;
        isTransitioning = true;
        currentIndex += 1;
    }

    function prev() {
        if (isAnimating) return;
        isAnimating = true;
        isTransitioning = true;
        currentIndex -= 1;
    }

    function userNext() {
        stopAutoplay();
        next();
    }

    function userPrev() {
        stopAutoplay();
        prev();
    }

    /* -------------------------------------
       TRANSITION COORDINATION
    ------------------------------------- */

    function handleTransitionEnd(event) {
        if (event.propertyName !== 'transform') return;
        isAnimating = false;

        if (!isTransitioning) return;

        if (currentIndex === slides.length - 1) {
            isTransitioning = false;
            currentIndex = 1;
        } else if (currentIndex === 0) {
            isTransitioning = false;
            currentIndex = lastRealIndex;
        }
    }

    /* -------------------------------------
       POINTER / DRAG HANDLERS
    ------------------------------------- */

    function onPointerDown(event) {
        if (isAnimating) return;
        if (event.button !== 0) return;

        stopAutoplay();
        startX = event.clientX;
        dragOffset = 0;
        isDragging = false;
        dragAllowed = true;
    }

    function onPointerMove(event) {
        if (!dragAllowed) return;
        if (event.buttons !== 1) return;

        const delta = event.clientX - startX;

        if (!isDragging && Math.abs(delta) > DRAG_START_THRESHOLD) {
            isDragging = true;
            currentTranslate = -currentIndex * sliderEl.offsetWidth;
            isTransitioning = false;
            sliderEl.setPointerCapture(event.pointerId);
        }

        if (!isDragging) return;

        dragOffset = delta;
        currentTranslate = -currentIndex * sliderEl.offsetWidth + dragOffset;
    }

    function onPointerUp(event) {
        if (!isDragging) return;

        isDragging = false;
        dragAllowed = false;
        sliderEl.releasePointerCapture(event.pointerId);
        isTransitioning = true;

        if (dragOffset < -DRAG_THRESHOLD) next();
        else if (dragOffset > DRAG_THRESHOLD) prev();
        else isAnimating = true;

        dragOffset = 0;
    }

    /* -------------------------------------
       LIFECYCLE
    ------------------------------------- */

    onMount(() => {
        startAutoplay();
    });

    onDestroy(() => {
        stopAutoplay();
    });
</script>

<!-- mark: -->

<div class="slider">
    <ul
        bind:this={sliderEl}
        class="track"
        style="
            transform: translateX({isDragging
            ? `${currentTranslate}px`
            : `-${currentIndex * 100}%`});
            transition: {isTransitioning && !isDragging
            ? `transform ${transitionDuration}ms cubic-bezier(0.4,0,0.2,1)`
            : 'none'};
        "
        on:pointerdown={onPointerDown}
        on:pointermove={onPointerMove}
        on:pointerup={onPointerUp}
        on:pointercancel={onPointerUp}
        on:transitionend={handleTransitionEnd}
        on:pointerleave={onPointerUp}
    >
        {#each slides as slide}
            <li class="slide">
                <div class="slide-grid">
                    <div class="image-container">
                        <a
                            href={slide.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link to {slide.title} project"
                            draggable="false"
                            on:dragstart|preventDefault
                        >
                            <img
                                src={slide.image}
                                width="565"
                                height="320"
                                alt={slide.title}
                                draggable="false"
                                loading="lazy"
                                on:dragstart|preventDefault
                            />
                        </a>
                    </div>
                    <div class="text-container">
                        <a
                            href={slide.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link to {slide.title} project"
                            draggable="false"
                        >
                            <h2>{slide.title}</h2>
                        </a>
                        <p>{slide.description}</p>
                        <ul>
                            {#each slide.tools as tools}
                                <li>{tools}</li>
                            {/each}
                        </ul>
                        <div class="link-container">
                            <a
                                href={slide.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github link to {slide.title}"
                                draggable="false"
                            >
                                <Github width={24} height={24} />
                            </a>
                            <a
                                href={slide.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Link to {slide.title} project"
                                draggable="false"
                            >
                                <ExternalLink size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

    <button class="prev" on:click={userPrev} aria-label="Previous slide"
        ><Arrow /></button
    >
    <button class="next" on:click={userNext} aria-label="Next slide"
        ><Arrow /></button
    >
</div>

<!-- mark: -->

<style>
    .slider {
        height: 20rem;
        position: relative;
        overflow: hidden;
        margin-block-start: 3rem;
        border-radius: 6px;
        border: 1px solid var(--accent-clr);

        @media (width >= 769px) {
            border: none;
        }
    }

    .track {
        display: flex;
        height: 100%;
        will-change: transform;
        cursor: grab;
        touch-action: pan-y;
    }

    .track:active {
        cursor: grabbing;
    }

    .slide {
        min-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid var(--accent-clr); */
        user-select: none;

        @media (width >= 769px) {
            border: none;
        }
    }

    .slide-grid {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        position: relative;

        @media (width >= 769px) {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }
    }

    .image-container {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        /* border: 1px solid var(--main-header-clr); */
        border-radius: 6px;

        @media (width >= 769px) {
            grid-column: 1 / 8;
            &:hover img {
                transform: scale(1.1);
            }
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: hsl(194, 100%, 9%);
            opacity: 0.92;
            pointer-events: none;
        }

        @media (width >= 769px) {
            &::after {
                background: var(--slider-img);
                /* opacity: var(--slider-img-opacity); */
                opacity: 0.4;
                /* transition: opacity 0.3s ease; */
                transition: opacity 0.8s ease;
            }

            &:hover::after {
                opacity: 0.2;
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            pointer-events: none;
            user-select: none;
            transform: scale(1);
            transition: transform 0.7s ease;
            /* will-change: transform; */
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
        padding-inline: 1rem;
        z-index: 10;

        @media (width >= 480px) {
            padding-inline: 2rem;
        }

        @media (width >= 769px) {
            grid-column: 5 / 13;
            align-items: end;
            text-align: right;
            background: none;
            padding-block: 0;
            pointer-events: none;
        }

        a {
            width: fit-content;
            pointer-events: auto;

            h2 {
                /* font-size: clamp(
                    1.25rem,
                    0.8323rem + 1.9093vw,
                    1.75rem
                );  */
                /* 350px - 769px */
                font-size: clamp(
                    1.25rem,
                    0.9368rem + 1.432vw,
                    1.625rem
                ); /* 350px - 769px */
                font-weight: 600;
                color: var(--slider-header);
                margin-block-end: 0.625rem;
                transition: color 0.3s ease;

                @media (width >= 769px) {
                    color: var(--slider-header-desktop);
                }
            }

            &:hover h2 {
                color: var(--accent-clr);
            }
        }

        p {
            font-size: clamp(
                0.9375rem,
                6.074rem + -10.687vw,
                0.0625rem
            ); /* 769px - 900px */
            color: var(--slider-text);
            margin-block-end: 1.125rem;

            @media (width >= 769px) {
                color: var(--slider-text-desktop);
                background: var(--slider-text-bg);
                /* background: var(--main-txt-clr); */
                border-radius: 6px;
                /* padding: 1.25rem; */
                padding: 0.875rem 1.25rem;
                pointer-events: auto;
            }
        }

        ul {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-block-end: 0.5rem;

            @media (width >= 769px) {
                justify-content: flex-end;
                width: 65%;
                margin-inline-start: auto;
            }
        }

        li {
            font-family: 'Reddit-Mono';
            font-size: 0.75rem;
            color: var(--slider-text);
            border: 1px solid var(--accent-clr);
            border-radius: 100vw;
            padding-inline: 0.75rem;
            padding-block: 0.125rem;
            /* transition: background-color 0.3s ease, color 0.3s ease; */

            &:hover {
                background-color: var(--accent-clr);
                color: var(--bg-clr);
            }

            @media (width >= 769px) {
                color: var(--slider-text-desktop-secondary);
                pointer-events: auto;
            }
        }

        .link-container {
            a {
                display: inline-block;
                color: var(--slider-text);
                padding: 0.5rem;
                transition: color 0.3s ease;

                @media (width >= 769px) {
                    color: var(--slider-text-desktop-secondary);
                }

                &:hover {
                    color: var(--accent-clr);
                }
            }

            &:last-child {
                margin-inline-start: -0.5rem;

                @media (width >= 769px) {
                    margin-inline-end: -0.5rem;
                }
            }
        }
    }

    /* Controls */
    .prev,
    .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        color: var(--slider-arrows);
        background: none;
        border: none;
        cursor: pointer;
        z-index: 20;

        @media (width >= 480px) {
            display: block;
        }

        @media (width >= 769px) {
            color: var(--slider-arrows-desktop);
        }
    }

    .prev {
        left: 15px;
        rotate: -90deg;
    }

    .next {
        right: 15px;
        rotate: 90deg;
    }
</style>
