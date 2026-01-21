<script>
    // lifecycle
    import { onMount, onDestroy } from 'svelte';

    // sections
    import Hero from './components/sections/Hero.svelte';
    import About from './components/sections/About.svelte';
    import Experience from './components/sections/Experience.svelte';
    import Projects from './components/sections/Projects.svelte';
    import Contact from './components/sections/Contact.svelte';

    // components
    import Header from './components/layout/Header.svelte';
    import LeftSidebar from './components/layout/LeftSidebar.svelte';
    import RightSidebar from './components/layout/RightSidebar.svelte';
    import Footer from './components/layout/Footer.svelte';

    // state
    let showSidebars = true;

    // sidebar appearance function
    function checkViewportHeight() {
        showSidebars = window.innerHeight >= 400;
    }

    // lifecycle
    onMount(() => {
        history.scrollRestoration = 'manual';
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);

            checkViewportHeight();
            window.addEventListener('resize', checkViewportHeight);
        });

        // Select sections *after* mount
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing to animate only once
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 },
        );

        // Only set up observer on large screens
        if (window.innerWidth >= 1000) {
            sections.forEach((section) => observer.observe(section));
        }
    });

    onDestroy(() => {
        window.removeEventListener('resize', checkViewportHeight);
    });
</script>

<!-- mark: -->

<Header />
{#if showSidebars}
    <LeftSidebar />
    <RightSidebar />
{/if}

<main>
    <section class="hero-section">
        <Hero />
    </section>

    <section class="about-section section">
        <About />
    </section>

    <section class="experience-section section">
        <Experience />
    </section>

    <section class="projects-section section">
        <Projects />
    </section>

    <section class="contact-section section">
        <Contact />
    </section>
</main>
<Footer />

<!-- mark: -->

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 25rem;
    }

    section {
        position: relative;
        overflow-x: clip;
    }

    .section::before {
        content: '';
        position: absolute;
        display: none;

        width: 400px;
        height: 400px;

        background-image: url('/images/blue-dots.svg');
        background-repeat: no-repeat;
        background-size: contain;
        top: -25rem;

        pointer-events: none;
        z-index: -1;

        @media (width >= 1000px) {
            display: block;
        }

        @media (width > 1500px) {
            display: none;
        }
    }

    .about-section::before,
    .projects-section::before {
        left: -1.5rem;
    }

    .experience-section::before,
    .contact-section::before {
        right: -1.5rem;
        transform: rotate(180deg);
    }
</style>
