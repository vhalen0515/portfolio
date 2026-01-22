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

    // images
    import BlueDots from '../public/images/BlueDots.svelte';

    // actions
    import { reveal } from './components/actions/reveal.js';
    import { lazySection } from './components/actions/lazySection.js';

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
    <section>
        <Hero />
    </section>

    <section use:lazySection>
        <div
            class="dot-container left reveal"
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
        >
            <BlueDots width="400" />
        </div>
        <About />
    </section>

    <section use:lazySection>
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container right reveal"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
        <Experience />
    </section>

    <section use:lazySection>
        <div
            class="dot-container left reveal"
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
        >
            <BlueDots width="400" />
        </div>
        <Projects />
    </section>

    <section use:lazySection>
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container right reveal"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
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

    .dot-container {
        position: absolute;
        top: -25rem;
        display: none;

        @media (width >= 1000px) {
            display: block;
        }

        @media (width > 1500px) {
            display: none;
        }
    }

    .left {
        left: -1.5rem;
    }

    .right {
        right: -1.5rem;
    }

    .rotate {
        transform: rotate(180deg);
    }
</style>
