<div class="right-sidebar reveal" style="--delay:0.8s">
    <a
        href="mailto:tavilla04@gmail.com?subject=Web%20Development%20Project&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
        aria-label="Send an email to Trent">tavilla04@gmail.com</a
    >
</div>

<!-- mark: -->

<style>
    .right-sidebar {
        position: fixed;
        bottom: 0;
        right: 1rem;
        display: none;
        flex-direction: column;
        align-items: center;

        @media (width > 768px) {
            display: flex;
        }

        @media (width >= 1000px) {
            right: 2.5rem;
        }

        @media (width >= 1360px) {
            right: calc((100vw - 1200px) / 2 - 40px);
        }

        &::after {
            content: '';
            background: var(--main-txt-clr);
            height: 5.75rem;
            width: 0.0625rem;
        }

        a {
            font-family: 'Reddit-Mono', monospace;
            font-size: 0.75rem;
            color: var(--main-txt-clr);
            letter-spacing: 1.5px;
            writing-mode: vertical-rl;
            padding-block: 0.5rem;
            margin-inline-end: 1.5rem;
            transition:
                color 0.3s ease,
                transform 0.3s ease;

            &:hover {
                color: var(--accent-clr);
                transform: translateY(-3px);
            }
        }
    }

    .reveal {
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
    }
</style>
