export function reveal(node, options = {}) {
    const { y = 24, threshold = 0.5 } = options;

    node.style.opacity = 0;
    node.style.transform = `translateY(${y}px)`;
    // node.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    node.style.transition = `opacity ${options.duration || 0.8}s ${options.easing || 'ease'} ${options.delay || 0}s, transform ${options.duration || 0.8}s ${options.easing || 'ease'} ${options.delay || 0}s`;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.style.opacity = 1;
                node.style.transform = 'translateY(0)';
                observer.disconnect();
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
