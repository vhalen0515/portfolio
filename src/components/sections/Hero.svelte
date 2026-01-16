<script>
    // actions
    import { reveal } from '../actions/reveal.js';
</script>

<!-- mark: -->

<div id="hero">
    <div class="hero-container">
        <div use:reveal={{ y: 24, delay: 0.4, duration: 0.4 }}>
            <p>Hi, my name is</p>
        </div>
        <div use:reveal={{ y: 24, delay: 0.5, duration: 0.4 }}>
            <h1>
                Trenton Avilla<span>.</span>
            </h1>
        </div>
        <div use:reveal={{ y: 24, delay: 0.6, duration: 0.4 }}>
            <h2>
                I am a Front-End Developer<span>.</span>
            </h2>
        </div>
        <div use:reveal={{ y: 24, delay: 0.7, duration: 0.4 }}>
            <p>
                I like to design and build things for the web. I currently enjoy
                using React and Tailwind to create functional and engaging
                websites<span>.</span>
            </p>
        </div>
        <div use:reveal={{ y: 24, delay: 0.8, duration: 0.4 }}>
            <a href="#projects">Recent Work</a>
        </div>
    </div>
</div>

<!-- <div id="hero">
    <div class="hero-container">

            <p use:reveal={{ y: 24, delay: 0.4, duration: 0.4 }}>Hi, my name is</p>


            <h1 use:reveal={{ y: 24, delay: 0.5, duration: 0.4 }}>
                Trenton Avilla<span>.</span>
            </h1>


            <h2 use:reveal={{ y: 24, delay: 0.6, duration: 0.4 }}>
                I am a Front-End Developer<span>.</span>
            </h2>


            <p use:reveal={{ y: 24, delay: 0.7, duration: 0.4 }}>
                I like to design and build things for the web. I currently enjoy
                using React and Tailwind to create functional and engaging
                websites<span>.</span>
            </p>


            <a use:reveal={{ y: 24, delay: 0.8, duration: 0.4 }} href="#projects">Recent Work</a>

    </div>
</div> -->

<!-- mark: -->

<style>
    #hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        min-height: 100svh;

        @media (height <= 550px) {
            margin-block-start: 8rem;
        }

        span {
            color: var(--accent-clr);
        }
    }

    .hero-container {
        margin-block-start: 2.5rem;

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
            display: inline-block;
            color: var(--accent-clr);
            border: 1px solid var(--accent-clr);
            border-radius: 0.25rem;
            padding: 1rem 1.5rem;
            transition:
                color 0.3s ease,
                background-color 0.3s ease;

            &:hover {
                background-color: var(--accent-clr);
                color: var(--bg-clr);
            }
        }
    }
</style>
