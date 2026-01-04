<script>
    import { reveal } from '../actions/reveal.js';
</script>

<section id="contact">
    <h2 use:reveal>Need Some Help?</h2>
    <h3 use:reveal>Let's Connect</h3>
    <p use:reveal>
        Have a project in mind, a freelance gig, or just want to chat? I'd love
        to hear from you. Let’s build something together.
    </p>
    <a
        use:reveal
        href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
        role="button"
        aria-label="Send an email to Trent"
    >
        Reach Out
    </a>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-family: 'Reddit-Mono';
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-clr);

        &::before {
            content: '04.';
            font-family: 'Reddit-Mono';
            color: var(--accent-clr);
            margin-inline-end: 0.5rem;
        }
    }

    h3 {
        font-size: 2.25rem;
        font-weight: 600;
        color: var(--main-header-clr);
        margin-block-start: 1rem;

        @media (width >= 769px) {
            font-size: clamp(
                2.25rem,
                -2.7155rem + 10.3448vw,
                3.75rem
            ); /* 769px - 1000px */
        }
    }

    p {
        color: var(--main-txt-clr);
        text-align: center;
        margin-block-start: 1rem;
        max-width: 650px;

        @media (width >= 769px) {
            font-size: 1.125rem;
            margin-block-start: 1.25rem;
        }
    }

    a {
        display: inline-block;
        font-family: 'Reddit-Mono';
        color: var(--accent-clr);
        padding-inline: 1.5rem;
        padding-block: 1rem;
        border: 1px solid var(--accent-clr);
        border-radius: 6px;
        margin-block-start: 3rem;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;

        &:hover {
            background-color: var(--accent-clr);
            color: var(--bg-clr);
        }
    }
</style>
