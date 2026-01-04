<script>
    import { onMount, onDestroy } from 'svelte';
    import { SLIDES } from '../../lib/data/projects.js';
    import Arrow from '../../assets/icons/Arrow.svelte';
    import Github from '../../assets/icons/Github.svelte';
    import ExternalLink from '../../assets/icons/ExternalLink.svelte';

    /* =====================================================
       CONFIGURATION
    ===================================================== */
    export let autoplay = false;
    export let autoplayDelay = 1000;
    export let transitionDuration = 700;

    const DRAG_THRESHOLD = 60; // px required to change slides

    /* =====================================================
       CORE CAROUSEL STATE FLAGS
    ===================================================== */
    let interval;
    let isTransitioning = true;
    let isAnimating = false;
    let dragAllowed = false; // NEW: only true if pointer started inside slider

    /* =====================================================
       DOM REFERENCES
    ===================================================== */
    let sliderEl;

    /* =====================================================
       POINTER / DRAG STATE
    ===================================================== */
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let dragOffset = 0;

    /* =====================================================
       SLIDE MODEL
    ===================================================== */
    const slides = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];
    const lastRealIndex = slides.length - 2;
    let currentIndex = 1;

    /* =====================================================
       AUTOPLAY CONTROL
    ===================================================== */
    function startAutoplay() {
        if (!autoplay) return;
        stopAutoplay();
        interval = setInterval(next, autoplayDelay);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    /* =====================================================
       NAVIGATION
    ===================================================== */
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

    /* =====================================================
       TRANSITION SYNC
    ===================================================== */
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

    /* =====================================================
       POINTER DRAG HANDLERS
    ===================================================== */
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
        if (!dragAllowed) return; // ⬅️ prevent drag if pointer started outside
        if (event.buttons !== 1) return;

        const delta = event.clientX - startX;

        if (!isDragging && Math.abs(delta) > 5) {
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

    /* =====================================================
       LIFECYCLE
    ===================================================== */
    onMount(startAutoplay);
    onDestroy(stopAutoplay);
</script>

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
                            aria-label="Live site"
                            draggable="false"
                            on:dragstart|preventDefault
                        >
                            <img
                                src={slide.image}
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
                            aria-label="Live site"
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
                                aria-label="Github"
                                draggable="false"
                            >
                                <Github width={28} height={28} />
                            </a>
                            <a
                                href={slide.externalLink}
                                target="_blank"
                                aria-label="Live site"
                                draggable="false"
                            >
                                <ExternalLink size={28} />
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
        user-select: none;
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
        border-radius: 6px;

        @media (width >= 769px) {
            grid-column: 1 / 8;
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
                background: var(--accent-clr);
                opacity: 0.4;
                transition: opacity 0.3s ease;
            }

            &:hover::after {
                opacity: 0;
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            pointer-events: none;
            user-select: none;
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
            background: none;
            padding-block: 0;
            text-align: right;
            pointer-events: none;
        }

        a {
            width: fit-content;
            pointer-events: auto;

            h2 {
                font-size: clamp(
                    1.25rem,
                    0.8323rem + 1.9093vw,
                    1.75rem
                ); /* 350px - 769px */
                color: var(--main-header-clr);
                margin-block-end: 0.625rem;
                transition: color 0.3s ease;
            }

            &:hover h2 {
                color: var(--accent-clr);
            }
        }

        p {
            color: var(--main-txt-clr);
            margin-block-end: 1.125rem;

            @media (width >= 769px) {
                background: hsl(199, 21%, 17%);
                border-radius: 6px;
                padding: 1.25rem;
                pointer-events: auto;
            }
        }

        ul {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-block-end: 0.875rem;

            @media (width >= 769px) {
                justify-content: flex-end;
                width: 75%;
                margin-inline-start: auto;
            }
        }

        li {
            font-family: 'Reddit-Mono';
            font-size: 0.875rem;
            color: var(--main-header-clr);
            border: 1px solid var(--accent-clr);
            border-radius: 12px;
            padding-inline: 0.75rem;
            padding-block: 0.125rem;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: hsl(199, 21%, 19%);
                cursor: pointer;
            }

            @media (width >= 769px) {
                font-size: 0.75rem;
                pointer-events: auto;
            }
        }

        .link-container {
            a {
                display: inline-block;
                color: var(--main-header-clr);
                padding: 0.5rem;
                transition: color 0.3s ease;

                &:hover {
                    color: var(--accent-clr);
                }
            }

            &:last-child {
                margin-inline-start: 0.5rem;

                @media (width >= 769px) {
                    margin-inline-start: 0.25rem;
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
        color: var(--main-header-clr);
        background: none;
        border: none;
        cursor: pointer;
        z-index: 20;

        @media (width >= 480px) {
            display: block;
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
