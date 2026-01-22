export function lazySection(node, options = {}) {
    const { rootMargin = '200px', threshold = 0.01 } = options;

    // Create a wrapper to hold content
    const placeholder = document.createElement('div');
    placeholder.style.minHeight = '50vh';

    // Move all children to placeholder
    while (node.firstChild) {
        placeholder.appendChild(node.firstChild);
    }

    let loaded = false;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !loaded) {
                loaded = true;

                // Move content back to node
                while (placeholder.firstChild) {
                    node.appendChild(placeholder.firstChild);
                }

                // Cleanup
                observer.unobserve(node);
            }
        },
        { rootMargin, threshold },
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
