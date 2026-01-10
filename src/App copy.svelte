<script>
    import { onMount, onDestroy } from 'svelte';
    import { reveal } from './components/actions/reveal.js';

    // Sections
    import Hero from './components/sections/Hero.svelte';
    import About from './components/sections/About.svelte';
    import Experience from './components/sections/Experience.svelte';
    import Projects from './components/sections/Projects.svelte';
    import Contact from './components/sections/Contact.svelte';

    // Components
    import Header from './components/layout/Header.svelte';
    import LeftSidebar from './components/layout/LeftSidebar.svelte';
    import RightSidebar from './components/layout/RightSidebar.svelte';
    import Footer from './components/layout/Footer.svelte';

    // Images
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
<!-- ORIGINAL CODE BEFORE DOTS -->
<!-- <main>
    <Hero />
    <div class="dot-container first left" use:reveal={{ x: -24, y: 0, duration: 0.4 }}>
        <BlueDots width="400" />
    </div>
    <About />
    <div use:reveal={{ x: 24, y: 0, duration: 0.4 }} class="dot-container second right">
        <BlueDots width="400" />
    </div>
    <Experience />
    <div use:reveal={{ x: -24, y: 0, duration: 0.4 }} class="dot-container third left">
        <BlueDots width="400" />
    </div>
    <Projects />
    <div use:reveal={{ x: 24, y: 0, duration: 0.4 }} class="dot-container last right">
        <BlueDots width="400" />
    </div>
    <Contact />
</main> -->

<!-- SECOND VERSION -->
<!-- <main>
    <div class="section-container">
        <Hero />
        <div
            class="dot-container first left"
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
        >
            <BlueDots width="400" />
        </div>
        <About />
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container second right"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
        <Experience />
        <div
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
            class="dot-container third left"
        >
            <BlueDots width="400" />
        </div>
        <Projects />
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container last right"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
        <Contact />
    </div>
</main> -->
<main>
    <!-- <div class="section-container"> -->
        <Hero />
        <div
            class="dot-container first left"
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
        >
            <BlueDots width="400" />
        </div>
        <About />
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container second right"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
        <Experience />
        <div
            use:reveal={{ x: -24, y: 0, duration: 0.4 }}
            class="dot-container third left"
        >
            <BlueDots width="400" />
        </div>
        <Projects />
        <div
            use:reveal={{ x: 24, y: 0, duration: 0.4 }}
            class="dot-container last right"
        >
            <div class="rotate">
                <BlueDots width="400" />
            </div>
        </div>
        <Contact />
    <!-- </div> -->
</main>
<Footer />

<style>
    main {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 25rem;
        max-width: 1200px;
        margin-inline: auto;
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

    /* .section-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 25rem;
        max-width: 1200px;
        margin-inline: auto;
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
    } */

    .dot-container {
        position: absolute;
        /* top: 50%;
        transform: translateY(-50%); */
        visibility: hidden;

        @media (width >=1000px) {
            display: block;
            visibility: visible;
        }

        @media (width >=1800px) {
            visibility: hidden;
        }
    }

    .dot-container.first {
        top: 18%;
        /* top: 54rem; */
    }

    .dot-container.second {
        top: 41%;
        /* top: 110rem; */
    }

    .dot-container.third {
        top: 60%;
        /* top: 149rem; */
    }

    .dot-container.last {
        top: 83%;
        /* top: 200rem; */
    }

    .dot-container.left {
        left: -55px;
    }

    .dot-container.right {
        right: -55px;
    }

    .rotate {
        transform: rotate(180deg);
    }
</style>