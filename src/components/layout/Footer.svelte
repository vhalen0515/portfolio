<script>
    // actions
    import { reveal } from '../actions/reveal.js';

    // icons
    import Instagram from '../../assets/icons/Instagram.svelte';
    import Linkedin from '../../assets/icons/Linkedin.svelte';
    import Github from '../../assets/icons/Github.svelte';
</script>

<footer>
    <div use:reveal class="link-container">
        <a
            href="https://www.instagram.com/trent_av/"
            target="_blank"
            aria-label="Instagram link"
        >
            <Instagram width="24" height="24" />
        </a>
        <a
            href="https://www.linkedin.com/in/trent-avilla/"
            target="_blank"
            aria-label="Linkedin link"
        >
            <Linkedin width="24" height="24" />
        </a>
        <a
            href="https://github.com/vhalen0515"
            target="_blank"
            aria-label="GitHub link"
        >
            <Github width="24" height="24" />
        </a>
    </div>
    <p use:reveal>
        Copyright © {new Date().getFullYear()} Trent Avilla. All Rights Reserved.
    </p>
</footer>

<style>
    footer {
        padding-inline: 1.75rem;
        margin-block-start: 13rem;
    }

    .link-container {
        display: flex;
        justify-content: center;
        gap: 1.5rem;

        a {
            color: var(--main-txt-clr);
            padding: 0.5rem 0.75rem;
            transition:
                color 0.3s ease,
                transform 0.3s ease;

            &:hover {
                color: var(--accent-clr);
                transform: translateY(-3px);
            }
        }
    }

    p {
        font-family: 'Reddit-Mono';
        font-size: 0.75rem;
        color: var(--main-txt-clr);
        text-align: center;
        margin-block: 0.75rem;

        @media (width >= 480px) {
            margin-block: 1.5rem;
        }
    }
</style>
