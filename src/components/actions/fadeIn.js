export function fadeIn(node, options = {}) {
    const { threshold = 0.3, delay = 0 } = options;

    node.style.setProperty('--fade-delay', `${delay}s`);

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
