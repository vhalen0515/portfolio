<script>
    import { onMount, onDestroy } from 'svelte';

    // actions
    import { reveal } from './components/actions/reveal.js';
    
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
    import BlueDots from './assets/icons/BlueDots.svelte';

    let showSidebars = true;

    function checkHeight() {
        showSidebars = window.innerHeight >= 400;
    }

    onMount(() => {
        history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

        checkHeight();
        window.addEventListener('resize', checkHeight);
    });

    onDestroy(() => {
        window.removeEventListener('resize', checkHeight);
    });
</script>

<Header />
{#if showSidebars}
    <LeftSidebar />
    <RightSidebar />
{/if}
<div class="page">
    <main>
        <section class="component-section">
            <Hero />
        </section>

        <section class="component-section">
            <div
                class="dot-container first left"
                use:reveal={{ x: -24, y: 0, duration: 0.4 }}
            >
                <BlueDots width="400" />
            </div>
            <About />
        </section>

        <section class="component-section">
            <div
                use:reveal={{ x: 24, y: 0, duration: 0.4 }}
                class="dot-container second right"
            >
                <div class="rotate">
                    <BlueDots width="400" />
                </div>
            </div>
            <Experience />
        </section>

        <section class="component-section">
            <div
                use:reveal={{ x: -24, y: 0, duration: 0.4 }}
                class="dot-container third left"
            >
                <BlueDots width="400" />
            </div>
            <Projects />
        </section>
        
        <section class="component-section">
            <div
                use:reveal={{ x: 24, y: 0, duration: 0.4 }}
                class="dot-container last right"
            >
                <div class="rotate">
                    <BlueDots width="400" />
                </div>
            </div>
            <Contact />
        </section>
    </main>
</div>
<Footer />

<style>
    .page {
        display: grid;
        grid-template-columns: 1fr minmax(0, 1280px) 1fr;
        width: 100%;
        overflow-x: clip;
    }

    main {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        gap: 25rem;
        max-width: 1280px;
        padding-inline: 1.75rem;

        @media (width >= 480px) {
            padding-inline: 3.25rem;
        }

        @media (width > 768px) {
            padding-inline: 6.5rem;
        }

        @media (width >= 1000px) {
            padding-inline: 9.75rem;
        }
    }

    .component-section {
        position: relative;
    }

    .dot-container {
        position: absolute;
        display: none;

        @media (width >= 1000px) {
            display: block;
        }

        @media (width > 1500px) {
            display: none;
        }
    }

    .dot-container.first {
        top: -25rem;
    }

    .dot-container.second {
        top: -25rem;
    }

    .dot-container.third {
        top: -25rem;
    }

    .dot-container.last {
        top: -25rem;
    }

    .dot-container.left {
        left: calc(-1.09 * min(50vw - 50%, 17.25rem));
    }

    .dot-container.right {
        right: calc(-1.09 * min(50vw - 50%, 17.25rem));
    }

    .rotate {
        transform: rotate(180deg);
    }
</style>
