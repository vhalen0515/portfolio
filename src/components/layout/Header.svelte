<script>
    // logo
    import Logo from '../../assets/logos/logo.svg';

    // actions
    import { reveal } from '../actions/reveal.js';
    import { fadeIn } from '../actions/fadeIn.js';

    // lifecycle
    import { onMount, onDestroy } from 'svelte';

    /* -------------------------------------
       Constants
    ------------------------------------- */
    const DESKTOP_QUERY = '(min-width: 769px)';
    const SCROLL_TOP_THRESHOLD = 50;

    /* -------------------------------------
       State
    ------------------------------------- */
    let isOpen = false;
    let showHeader = true;
    let lastScrollY = 0;
    let isAtTop = true;
    let menuButton;
    let mediaQuery;

    /* -------------------------------------
       Menu behavior
    ------------------------------------- */
    function toggleMenu() {
        isOpen = !isOpen;

        if (!isOpen) {
            menuButton?.focus();
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Escape' && isOpen) {
            isOpen = false;
        }
    }

    // Prevent body scroll when mobile menu is open
    $: document.body.classList.toggle('no-scroll', isOpen);

    /* -------------------------------------
       Scroll behavior (desktop)
    ------------------------------------- */
    function handleScroll() {
        const currentScrollY = window.scrollY;

        isAtTop = currentScrollY < SCROLL_TOP_THRESHOLD;

        showHeader = currentScrollY < lastScrollY || isAtTop;

        lastScrollY = currentScrollY;
    }

    /* -------------------------------------
       Media Query Handler
    ------------------------------------- */
    function handleMediaChange(e) {
        if (e.matches) {
            isOpen = false;
        }
    }

    /* -------------------------------------
       Lifecycle
    ------------------------------------- */
    onMount(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        mediaQuery = window.matchMedia(DESKTOP_QUERY);
        mediaQuery.addEventListener('change', handleMediaChange);
    });

    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
        if (mediaQuery) {
            mediaQuery.removeEventListener('change', handleMediaChange);
        }
    });
</script>

<svelte:window on:keydown={handleKeydown} />
<!-- mark: -->

<header class:hide={!showHeader} class:blur={!isAtTop && showHeader && !isOpen}>
    <div class="mobile-header">
        <a href="https://www.trent-avilla.com/" aria-label="Go to homepage">
            <img class="logo" src={Logo} alt="" />
        </a>
        <button
            class="hamburger"
            class:is-open={isOpen}
            bind:this={menuButton}
            on:click={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <div class="desktop-header">
        <a href="https://www.trent-avilla.com/" aria-label="Go to homepage">
            <img use:fadeIn class="logo fade" src={Logo} alt="" />
        </a>
        <nav class="desktop-nav">
            <ul>
                <li use:reveal={{ y: -24 }} class="reveal">
                    <a href="#about">About</a>
                </li>
                <li use:reveal={{ y: -24, delay: 0.1 }} class="reveal">
                    <a href="#experience">Experience</a>
                </li>
                <li use:reveal={{ y: -24, delay: 0.2 }} class="reveal">
                    <a href="#projects">Projects</a>
                </li>
                <li use:reveal={{ y: -24, delay: 0.3 }} class="reveal">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <!-- <ul>
                <li class="reveal">
                    <a href="#about">About</a>
                </li>
                <li
                    class="reveal"
                    style="--delay:0.1s"
                >
                    <a href="#experience">Experience</a>
                </li>
                <li
                    class="reveal"
                    style="--delay:0.2s"
                >
                    <a href="#projects">Projects</a>
                </li>
                <li
                    class="reveal"
                    style="--delay:0.3s"
                >
                    <a href="#contact">Contact</a>
                </li>
            </ul> -->
        </nav>
    </div>
</header>

<!-- mobile menu popout -->
<nav
    id="mobile-menu"
    class="mobile-nav"
    class:is-open={isOpen}
    aria-label="Mobile navigation"
    inert={!isOpen}
>
    <ul>
        <li>
            <a on:click={toggleMenu} href="#about">About</a>
        </li>
        <li>
            <a on:click={toggleMenu} href="#experience">Experience</a>
        </li>
        <li>
            <a on:click={toggleMenu} href="#projects">Projects</a>
        </li>
        <li>
            <a on:click={toggleMenu} href="#contact">Contact</a>
        </li>
    </ul>
</nav>

<!-- mark: -->

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 60;
        transition: transform 0.3s ease;
    }

    header.blur {
        background-color: color-mix(in oklab, var(--bg-clr) 60%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    header.hide {
        transform: translateY(-100%);
    }

    .mobile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1280px;
        padding: 1.5rem;
        margin-inline: auto;

        .logo {
            width: 52px;
        }

        @media (width > 768px) {
            display: none;
        }
    }

    .hamburger {
        position: relative;
        width: 40px;
        height: 40px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 70;

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
                top: 11px;
                width: 24px;
            }

            &:nth-child(2) {
                top: 19px;
                width: 32px;
            }

            &:nth-child(3) {
                top: 27px;
                width: 24px;
            }
        }
    }

    .hamburger.is-open span {
        &:nth-child(1) {
            width: 28px;
            transform: translateX(-0%) translateY(8px) rotate(45deg);
        }

        &:nth-child(2) {
            opacity: 0;
        }

        &:nth-child(3) {
            width: 28px;
            transform: translateX(-0%) translateY(-8px) rotate(-45deg);
        }
    }

    .mobile-nav {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        overflow-y: auto;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        will-change: transform;
        pointer-events: none;
        z-index: 50;

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

    .mobile-nav.is-open {
        transform: translateY(0);
        pointer-events: auto;
    }

    .mobile-nav::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: -1;
        pointer-events: none;
    }

    .desktop-header {
        display: none;

        .logo {
            width: 52px;
        }

        @media (width > 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1280px;
            padding: 2rem 2.5rem;
            margin-inline: auto;
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
                    font-family: 'Reddit-Mono', 'Courier New', monospace;
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
