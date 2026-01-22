<script>
    // icons
    import Github from '../../assets/icons/Github.svelte';
    import Linkedin from '../../assets/icons/Linkedin.svelte';
    import Instagram from '../../assets/icons/Instagram.svelte';
    import Email from '../../assets/icons/Email.svelte';

    // actions
    import { reveal } from '../actions/reveal.js';
</script>

<!-- mark: -->

<div use:reveal={{ delay: 0.8 }} class="left-sidebar reveal">
    <a
        href="https://github.com/vhalen0515"
        target="_blank"
        aria-label="Link to my github profile."
    >
        <Github width={24} height={20} />
    </a>
    <a
        href="https://www.linkedin.com/in/trent-avilla/"
        target="_blank"
        aria-label="Link to my linkedin profile."
    >
        <Linkedin width={24} height={20} />
    </a>
    <a
        href="https://www.instagram.com/trent_av/"
        target="_blank"
        aria-label="Link to my instagram profile."
    >
        <Instagram width={24} height={20} />
    </a>
    <a
        href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
        aria-label="Link an email to Trent."
    >
        <Email />
    </a>
</div>

<!-- mark: -->

<style>
    .left-sidebar {
        position: fixed;
        bottom: 0;
        display: none;
        left: 1rem;
        flex-direction: column;
        align-items: center;
        z-index: 1;

        @media (width > 768px) {
            display: flex;
        }

        @media (width >= 1000px) {
            left: 2.5rem;
        }

        @media (width >= 1360px) {
            left: calc((100vw - 1200px) / 2 - 40px);
        }

        &::after {
            content: '';
            background: var(--main-txt-clr);
            height: 5.75rem;
            width: 0.0625rem;
        }

        a {
            display: inline-block;
            width: fit-content;
            color: var(--main-txt-clr);
            padding: 0.75rem 0.5rem;
            transition:
                color 0.3s ease,
                transform 0.3s ease;

            &:hover {
                color: var(--accent-clr);
                transform: translateY(-3px);
            }
        }

        & a:nth-child(4) {
            margin-block-end: 1rem;
        }
    }
</style>
