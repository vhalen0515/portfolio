<script>
    // actions
    import { reveal } from '../actions/reveal.js';
</script>

<!-- mark: -->

<div id="about">
    <h2 use:reveal class="reveal">About Me</h2>
    <div class="about-content">
        <div class="text-container">
            <p use:reveal class="reveal">
                Hello! My name is Trent Avilla, and I love bringing ideas to
                life on the web. My journey into web development began several
                years ago when I started experimenting with building
                simple websites — and I quickly realized how much I
                enjoyed the process of combining design and code to create
                something people could interact with.
            </p>
            <p use:reveal class="reveal">
                Since then, I’ve worked on a variety of projects from small,
                basic web apps to more complex websites and designs. What keeps
                me hooked is the challenge of creating intuitive, user-friendly
                experiences that not only look good, but feel great to use.
            </p>
            <p use:reveal class="reveal">
                Lately, I’ve been focused on building responsive and accessible
                web experiences using Svelte — continually learning and evolving
                with each new project.
            </p>
        </div>
        <div use:reveal class="image-container reveal">
            <img
                src="./images/about-me.webp"
                width="300"
                height="300"
                alt="myself"
                loading="lazy"
            />
        </div>
    </div>
</div>

<!-- mark: -->

<style>
    #about {
        max-width: 1280px;
        padding-inline: 1.75rem;
        margin-inline: auto;

        h2 {
            display: flex;
            align-items: center;
            width: 100%;
            font-size: clamp(
                1.5rem,
                0.7941rem + 2.3529vw,
                1.75rem
            ); /* 480px - 650px */
            font-weight: 600;
            color: var(--main-header-clr);

            &::before {
                content: '01.';
                font-family: 'Reddit-Mono';
                font-size: clamp(
                    1rem,
                    0.2941rem + 2.3529vw,
                    1.25rem
                ); /* 480px - 650px */
                color: var(--accent-clr);
                margin-inline-end: 0.5rem;
            }

            &::after {
                content: '';
                flex: 1;
                height: 0.0625rem;
                background-color: var(--main-txt-clr);
                margin-inline-start: 1rem;

                @media (width >= 1000px) {
                    max-width: 21rem;
                }
            }
        }

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

    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-block-start: 2rem;

        @media (width >= 1000px) {
            flex-direction: row;
            align-items: start;
            gap: 3rem;
        }
    }

    .text-container {
        p {
            font-size: 1.125rem;
            color: var(--main-txt-clr);
            margin-block-end: 1rem;

            &:last-child {
                margin-block-end: 0;
            }
        }

        @media (width >= 1000px) {
            flex: 1;
            margin-block-start: 0;
        }
    }

    .image-container {
        position: relative;
        width: 75%;
        max-width: 300px;
        margin-block-start: 3.625rem;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid var(--accent-clr);
            border-radius: 6px;
            transform: translate(12px, 12px);
            z-index: -10;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background-color: var(--accent-clr);
            opacity: 0.4;
            border-radius: 6px;
            z-index: 10;
            transition: opacity 0.3s ease;
        }

        &:hover::after {
            opacity: 0;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 6px;
        }

        @media (width >= 1000px) {
            margin-block-start: 0;
        }
    }
</style>
