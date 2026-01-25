export function reveal(node, options = {}) {
    const { x = 0, y = 24, threshold = 0.3, delay = 0, mobileDelay = null } = options;

    // Determine if mobile (you can adjust breakpoint as needed)
    const isMobile = window.innerWidth < 769;
    
    // Use mobileDelay if provided and on mobile, otherwise use regular delay
    // If mobileDelay not provided, use half the desktop delay on mobile
    const actualDelay = isMobile 
        ? (mobileDelay !== null ? mobileDelay : delay * 0.5)
        : delay;

    node.style.setProperty('--reveal-x', `${x}px`);
    node.style.setProperty('--reveal-y', `${y}px`);
    node.style.setProperty('--reveal-delay', `${actualDelay}s`);

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add('is-visible');
                observer.unobserve(node);
            }
        },
        { threshold },
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
