export function reveal(node, options = {}) {
    const { x = 0, y = 24, threshold = 0.3, delay = 0 } = options;

    node.style.setProperty('--reveal-x', `${x}px`);
    node.style.setProperty('--reveal-y', `${y}px`);
    node.style.setProperty('--reveal-delay', `${delay}s`);

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
