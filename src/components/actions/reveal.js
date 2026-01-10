export function reveal(node, options = {}) {
    const { y = 24, x = 0, threshold = 0.5 } = options;

    node.style.opacity = 0;
    // node.style.transform = `translateY(${y}px)`;
    node.style.transform = `translate(${x}px, ${y}px)`;
    node.style.transition = `opacity ${options.duration || 0.8}s ${options.easing || 'ease'} ${options.delay || 0}s, transform ${options.duration || 0.8}s ${options.easing || 'ease'} ${options.delay || 0}s`;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.style.opacity = 1;
                node.style.transform = 'translate(0, 0)';
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
