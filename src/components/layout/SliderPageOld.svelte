<script>
    import Arrow from '../../assets/icons/Arrow.svelte';
    import { SLIDES } from '../../lib/data/projects.js';
    import { onMount, onDestroy } from 'svelte';

    const duration = 3000;

    let currentSlide = 0;
    let interval;
    let autoplay = false;

    // Autoplay functions
    function startAutoplay() {
        clearInterval(interval);
        if (!autoplay) return;
        interval = setInterval(() => {
            currentSlide = (currentSlide + 1) % SLIDES.length;
        }, duration);
    }

    function stopAutoplay() {
        autoplay = false;
        clearInterval(interval);
    }

    // Navigation functions
    function nextSlide() {
        stopAutoplay();
        currentSlide = (currentSlide + 1) % SLIDES.length;
    }

    function prevSlide() {
        stopAutoplay();
        currentSlide = (currentSlide - 1 + SLIDES.length) % SLIDES.length;
    }

    onMount(() => {
        startAutoplay();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="slider">
    <div class="track" style="transform: translateX(-{currentSlide * 100}%);">
        {#each SLIDES as slide}
            <div class="slide">
                <img src={slide.image} alt={slide.title} draggable="false" />
            </div>
        {/each}
    </div>

    <button class="prev" on:click={prevSlide}><Arrow /></button>
    <button class="next" on:click={nextSlide}><Arrow /></button>

    <!-- <div class="nav">
        {#each SLIDES as _, i}
            <button
                class="bubble"
                class:current={i === currentSlide}
                class:onedown={i === currentSlide - 1}
                class:twodown={i === currentSlide - 2}
                class:oneup={i === currentSlide + 1}
                class:twoup={i === currentSlide + 2}
                on:click={() => goToSlide(i)}
                aria-label={`Go to slide ${startIndex + i + 1}`}
            ></button>
        {/each}
    </div> -->
</div>

<style>
    .slider {
        width: 780px;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }

    .track {
        display: flex;
        height: 100%;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .slide {
        min-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    /* arrows */
    .next,
    .prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        z-index: 2;
    }

    .next {
        right: 20px;
        rotate: 90deg;
    }

    .prev {
        left: 20px;
        rotate: -90deg;
    }

    /* dots */
    /* .nav {
        position: absolute;
        bottom: 20px;
        inset-inline: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .bubble {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: none;
        opacity: 0.3;
        transition: 0.3s;
        cursor: pointer;
    }

    .bubble.current {
        width: 12px;
        height: 12px;
        opacity: 0.8;
    }

    .onedown,
    .oneup {
        height: 8px;
        width: 8px;
    }
    .twodown,
    .twoup {
        height: 5px;
        width: 5px;
    } */
</style>
