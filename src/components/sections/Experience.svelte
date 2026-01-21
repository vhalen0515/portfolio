<script>
    // actions
    import { reveal } from '../actions/reveal.js';

    // icon
    import Square from '../../assets/icons/Square.svelte';

    //tab content
    let tabs = [
        {
            name: 'Languages',
            heading: 'Programming Languages',
            description: 'The languages that I primarily speak:',
            items: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            name: 'Tools',
            heading: 'Developer Tools',
            description: 'Some tools that I often use in my projects:',
            items: [
                'Svelte',
                'React',
                'Tailwind CSS',
                'Figma',
                'Git',
                'GitHub',
                'VSCode',
                'Vite',
                'Pixelmator Pro',
                'Motion',
            ],
        },
        {
            name: 'Skills',
            heading: 'Front-End Skills',
            description: 'Other skills and techniques I work with:',
            items: [
                'Flexbox',
                'Grid',
                'RESTful APIs',
                'Mobile-First Design',
                'Web Performance Optimization',
                'SEO Fundamentals',
                'Accessibility',
            ],
        },
    ];

    let currentTab = tabs[0];
</script>

<!-- mark: -->

<div use:reveal id="experience" class="reveal">
    <h2 use:reveal class="section-heading reveal">Experience</h2>
    <div use:reveal class="experience-content reveal">
        <div class="tabs">
            {#each tabs as tab}
                <button
                    class:selected={currentTab === tab}
                    on:click={() => (currentTab = tab)}
                >
                    {tab.name}
                </button>
            {/each}
        </div>
        <div class="tab-content">
            <h3>{currentTab.heading}</h3>
            <p>{currentTab.description}</p>
            <ul>
                {#each currentTab.items as item}
                    <li>
                        <Square />
                        {item}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<!-- mark: -->

<style>
    #experience {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1280px;
        padding-inline: 1.75rem;
        margin-inline: auto;

        @media (width >= 480px) {
            padding-inline: 3.25rem;
        }

        @media (width > 768px) {
            padding-inline: 6.5rem;
        }

        @media (width >= 1000px) {
            padding-inline: 9.75rem;
        }

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

            @media (width >=768px) {
                justify-content: center;
            }

            &::before {
                content: '02.';
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

                @media (width >=768px) {
                    flex: none;
                    width: 25%;
                }

                @media (width >= 1000px) {
                    width: 33%;
                }
            }
        }
    }

    .experience-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--main-txt-clr);
        margin-block-start: 3rem;

        @media (width >= 480px) {
            flex-direction: row;
            justify-content: center;
            align-items: start;
            gap: 3rem;
            width: 100%;
        }

        @media (width >= 480px) {
            margin-block-start: 4rem;
        }

        @media (width >= 1000px) {
            height: 281px;
        }

        button {
            display: inline-block;
            font-family: 'Reddit-Mono';
            color: inherit;
            cursor: pointer;
            padding: 0.75rem clamp(1.125rem, 0.7885rem + 1.5385vw, 1.25rem);
            border-block-start: 2px solid transparent;
            border-block-end: none;
            border-inline: none;
            background-color: transparent;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: hsl(199, 21%, 17%);
            }

            @media (width >= 480px) {
                border-block: none;
                border-inline-start: 2px solid transparent;
                padding: 0.75rem 1.5rem;
            }

            @media (width >= 768px) {
                font-size: 1.25rem;
                padding: 0.75rem 2rem;
            }
        }

        button.selected {
            color: var(--accent-clr);
            background-color: hsl(199, 21%, 17%);
            border-block-start: 2px solid var(--accent-clr);

            @media (width >= 480px) {
                border-block-start: 0;
                border-inline-start: 2px solid var(--accent-clr);
            }
        }

        .tabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            border-block-end: 1px solid var(--main-txt-clr);

            @media (width >= 480px) {
                flex-direction: column;
                border-block-end: 0;
                border-inline-end: 1px solid var(--main-txt-clr);
            }
        }

        .tab-content {
            container-type: inline-size;
            width: 100%;
            max-width: 290px;

            @media (width >= 480px) {
                max-width: 340px;
            }

            @media (width >= 768px) {
                max-width: 380px;
            }

            @media (width >= 1000px) {
                max-width: 480px;
            }

            h3 {
                font-size: 1.25rem;
                color: var(--main-header-clr);
                margin-block-start: 2rem;
                line-height: 1.1;
                text-align: center;

                @media (width >= 480px) {
                    text-align: left;
                    margin-block-start: 0;
                }

                @media (width >= 768px) {
                    font-size: 1.5rem;
                }

                @media (width >= 1000px) {
                    font-size: 1.875rem;
                }
            }

            p {
                /* font-size: 1rem; */
                font-size: clamp(
                    0.875rem,
                    0.5385rem + 1.5385vw,
                    1rem
                ); /* 350px - 480px */
                color: var(--main-txt-clr);
                margin-block-start: 0.5rem;
                text-align: center;

                @media (width >= 480px) {
                    text-align: left;
                }

                @media (width >= 768px) {
                    font-size: 1.125rem;
                }

                @media (width >= 1000px) {
                    font-size: 1.25rem;
                }
            }

            ul {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0.5rem 2rem;
                margin-block-start: 1.25rem;

                @container (width >= 240px) {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                @media (width >= 1000px) {
                    margin-block-start: 1.75rem;
                }
            }

            li {
                display: flex;
                gap: 1rem;
                font-size: clamp(
                    1rem,
                    0.6635rem + 1.5385vw,
                    1.125rem
                ); /* 350px - 480px */
                width: fit-content;

                @media (width >= 1000px) {
                    font-size: 1.25rem;
                }

                & > :global(svg) {
                    color: var(--accent-clr);
                    width: 0.75rem;
                    flex-shrink: 0;
                }

                &:hover :global(svg) {
                    fill: var(--accent-clr);
                }
            }
        }
    }
</style>
