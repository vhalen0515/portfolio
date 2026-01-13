<script>
    // actions
    import { reveal } from '../actions/reveal.js';

    // component import
    import SliderPage from '../layout/SliderPage.svelte';
</script>

<div id="projects">
    <div class="projects-container">
        <h2 use:reveal>Some Recent Projects</h2>
        <div use:reveal>
            <SliderPage />
        </div>
    </div>
</div>

<style>
    .projects-container {
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
                content: '03.';
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
    }
</style>
