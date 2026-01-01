<script>
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
</script>

<Header />
<LeftSidebar />
<RightSidebar />
<main>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
</main>
<Footer />

<style>
    main {
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
</style>
