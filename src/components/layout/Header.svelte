<script>
    import Logo from '../../assets/logos/logo.svg';
    import { slide } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    let isOpen = false;
    let showHeader = true;
    let lastScrollY = 0;
    let isScrollingUp = false;
    let isAtTop = true;

    function toggleMenu() {
        isOpen = !isOpen;
    }

    // No scroll when mobile menu is open
    $: {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    // Desktop menu disappears on scroll-down, reappears on scroll-up
    function handleScroll() {
        const currentScrollY = window.scrollY;

        isScrollingUp = currentScrollY < lastScrollY;
        isAtTop = currentScrollY < 50;

        showHeader = isScrollingUp || isAtTop;

        lastScrollY = currentScrollY;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<!-- mark: -->
<header class:hide={!showHeader} class:blur={!isAtTop && showHeader}>
    <div class="header-container">
        <a href="https://www.trent-avilla.com/" aria-label="Go to homepage">
            <!-- Logo -->
            <img class="logo" src={Logo} alt="" />
        </a>

        <!-- mobile menu button -->
        <button
            class="hamburger"
            class:is-open={isOpen}
            on:click={toggleMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- mobile menu popout -->
        {#if isOpen}
            <nav
                class="mobile-nav"
                class:is-open={isOpen}
                transition:slide={{ axis: 'y', duration: 300 }}
            >
                <ul>
                    <li>
                        <a on:click={toggleMenu} href="#about">About</a>
                    </li>
                    <li>
                        <a on:click={toggleMenu} href="#experience"
                            >Experience</a
                        >
                    </li>
                    <li>
                        <a on:click={toggleMenu} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a on:click={toggleMenu} href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        {/if}

        <!-- desktop menu -->
        <nav class="desktop-nav">
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<!-- mark: -->
<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
        transition: transform 0.3s ease;
    }

    header.hide {
        transform: translateY(-100%);
    }

    header.blur {
        background-color: color-mix(in oklab, var(--bg-clr) 60%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        padding: 1.5rem;
        margin-inline: auto;

        .logo {
            width: 52px;
        }

        @media (width > 768px) {
            padding: 2rem 2.5rem;
        }
    }

    .hamburger {
        position: relative;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 100;

        @media (width > 768px) {
            display: none;
        }

        span {
            position: absolute;
            left: 0%;
            transform-origin: center;
            height: 2px;
            background: var(--accent-clr);
            transition:
                transform 0.3s ease,
                opacity 0.15s ease,
                width 0.3s ease;

            &:nth-child(1) {
                /* top: 14px; */
                top: 11px;
                /* width: 23px; */
                width: 24px;
            }

            &:nth-child(2) {
                top: 19px;
                /* width: 30px; */
                width: 32px;
            }

            &:nth-child(3) {
                /* top: 24px; */
                top: 27px;
                /* width: 23px; */
                width: 24px;
            }
        }
    }

    .hamburger.is-open span {
        &:nth-child(1) {
            width: 28px;
            /* transform: translateX(-0%) translateY(5px) rotate(45deg); */
            transform: translateX(-0%) translateY(8px) rotate(45deg);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:nth-child(3) {
            width: 28px;
            /* transform: translateX(-0%) translateY(-5px) rotate(-45deg); */
            transform: translateX(-0%) translateY(-8px) rotate(-45deg);
        }
    }

    .mobile-nav {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        @media (height <= 510px) {
            justify-content: flex-start;
            padding-block: 8rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.25rem;

            li {
                padding: 0.625rem 1.125rem;

                a {
                    font-family: 'Reddit-Mono';
                    font-size: 1.5rem;
                    color: var(--main-txt-clr);
                    transition: color 0.3s ease;

                    &:hover {
                        color: var(--accent-clr);
                    }

                    &::before {
                        color: var(--accent-clr);
                        margin-right: 0.375rem;
                    }

                    @media (width >= 480px) {
                        font-size: 1.875rem;
                        line-height: 1.35;
                    }
                }

                &:nth-child(1) a::before {
                    content: '01.';
                }
                &:nth-child(2) a::before {
                    content: '02.';
                }
                &:nth-child(3) a::before {
                    content: '03.';
                }
                &:nth-child(4) a::before {
                    content: '04.';
                }
            }
        }
    }

    .desktop-nav {
        display: none;

        @media (width > 768px) {
            display: block;
        }

        ul {
            display: flex;

            li {
                a {
                    font-family: 'Reddit-Mono';
                    font-size: 0.875rem;
                    color: var(--main-txt-clr);
                    padding: 0.625rem 1.125rem;
                    transition: color 0.3s ease;

                    &:hover {
                        color: var(--accent-clr);
                    }

                    &::before {
                        color: var(--accent-clr);
                        margin-right: 0.375rem;
                    }
                }

                &:nth-child(1) a::before {
                    content: '01.';
                }
                &:nth-child(2) a::before {
                    content: '02.';
                }
                &:nth-child(3) a::before {
                    content: '03.';
                }
                &:nth-child(4) a::before {
                    content: '04.';
                }
            }
        }
    }
</style>
