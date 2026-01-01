<script>
</script>

<!-- mark: -->
<section id="about">
    <div class="about-container">
        <h2>About Me</h2>
        <div>
            <div class="text-container">
                <p>
                    Hello! My name is Trenton Avilla, and I love bringing ideas
                    to life on the web. My journey into web development began
                    several years ago in 2019 when I started experimenting with
                    building simple websites just for fun—and I quickly realized
                    how much I enjoyed the process of combining design and code
                    to create something people could interact with.
                </p>
                <p>
                    Since then, I’ve worked on a variety of projects, from
                    small, basic web apps to more complex websites and designs.
                    What keeps me hooked is the challenge of creating intuitive,
                    user-friendly experiences that not only look good but feel
                    great to use.
                </p>
                <p>
                    Lately, I’ve been focused on building responsive and
                    accessible web experiences using React and Tailwind
                    CSS—continually learning and evolving with each new project.
                </p>
            </div>
            <div class="image-container">
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
</section>

<!-- mark: -->
<style>
    .about-container {
        /* display: flex;
        flex-direction: column;
        align-items: center; */

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

        h2 + div {
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
            @media (width >= 1000px) {
                flex: 1;
                margin-block-start: 0;
            }
        }

        p {
            font-size: 1.125rem;
            color: var(--main-txt-clr);
            margin-block-end: 1rem;

            &:last-child {
                margin-block-end: 0;
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

            @media (width >= 1000px) {
                margin-block-start: 0;
            }
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
    }
</style>
