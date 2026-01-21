<script>
    // actions
    import { reveal } from '../../components/actions/reveal.js';
</script>

<div id="hero">
    <p use:reveal={{ delay: 0.4 }} class="reveal">Hi, my name is</p>

    <h1 use:reveal={{ delay: 0.5 }} class="reveal">
        Trenton Avilla<span>.</span>
    </h1>

    <h2 use:reveal={{ delay: 0.6 }} class="reveal">
        I am a Front-End Developer<span>.</span>
    </h2>

    <p use:reveal={{ delay: 0.7 }} class="reveal">
        I like to design and build things for the web. I currently enjoy using
        React and Tailwind to create functional and engaging websites<span
            >.</span
        >
    </p>
    <div use:reveal={{ delay: 0.8 }} class="reveal">
        <a href="#projects"> Recent Work </a>
    </div>
    <!-- <p class="reveal" style="--delay:0.4s">Hi, my name is</p>

    <h1 class="reveal" style="--delay:0.5s">
        Trenton Avilla<span>.</span>
    </h1>

    <h2 class="reveal" style="--delay:0.6s">
        I am a Front-End Developer<span>.</span>
    </h2>

    <p class="reveal" style="--delay:0.7s">
        I like to design and build things for the web. I currently enjoy using
        React and Tailwind to create functional and engaging websites<span
            >.</span
        >
    </p>

    <a class="reveal" style="--delay:0.8s" href="#projects">Recent Work</a> -->
</div>

<!-- mark: -->

<style>
    #hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        min-height: 100svh;
        max-width: 1280px;
        padding-inline: 1.75rem;
        margin: 2.5rem auto 0 auto;

        @media (width >= 480px) {
            padding-inline: 3.25rem;
        }

        @media (width > 768px) {
            padding-inline: 6.5rem;
        }

        @media (width >= 1000px) {
            padding-inline: 9.75rem;
        }

        @media (height <= 550px) {
            margin-block-start: 8rem;
        }

        h1 {
            font-size: clamp(
                2.25rem,
                0.6346rem + 5.3846vw,
                4rem
            ); /* 480px - 1000px */
            font-weight: 700;
            line-height: clamp(
                2rem,
                0.1538rem + 6.1538vw,
                4rem
            ); /* 480px - 1000px */
            letter-spacing: 0.05em;
            color: var(--main-header-clr);
            margin-block-end: 0.5rem;
        }

        h2 {
            font-size: clamp(
                1.875rem,
                0.375rem + 5vw,
                3.5rem
            ); /* 480px - 1000px */
            font-weight: 600;
            line-height: clamp(
                2rem,
                0.6154rem + 4.6154vw,
                3.5rem
            ); /* 480px - 1000px */
            letter-spacing: 0.025em;
            color: var(--main-txt-clr);
            margin-block-end: 1.5rem;
        }

        p:first-of-type {
            font-family: 'Reddit-Mono';
            font-size: clamp(
                1rem,
                0.8956rem + 0.4773vw,
                1.125rem
            ); /* 350px - 769px */
            color: var(--accent-clr);
            margin-block-end: 2rem;

            @media (width > 768px) {
                margin-block-end: 1.75rem;
            }
        }

        p {
            font-size: clamp(
                1rem,
                0.7912rem + 0.9547vw,
                1.25rem
            ); /* 350px - 769px */
            color: var(--main-txt-clr);
            max-width: 32rem;
            margin-block-end: 3.5rem;
        }

        a {
            align-self: flex-start;
            color: var(--accent-clr);
            border: 1px solid var(--accent-clr);
            border-radius: 0.25rem;
            padding: 1rem 1.5rem;
            transition:
                color 0.3s ease,
                background-color 0.3s ease;
        }

        span {
            color: var(--accent-clr);
        }
    }

    @media (hover: hover) and (pointer: fine) {
        #hero a:hover {
            background-color: var(--accent-clr);
            color: var(--bg-clr);
        }
    }

    /* .reveal {
        opacity: 0;
        transform: translateY(24px);
        animation: revealUp 0.4s ease forwards;
        animation-delay: var(--delay, 0s);
    }

    @keyframes revealUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    } */
</style>
