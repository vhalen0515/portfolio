// export function initReveal(scope, threshold = 0.3) {
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('is-visible');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         },
//         { threshold }
//     );

//     document.querySelectorAll(`${scope} .reveal`).forEach((el) => {
//         observer.observe(el);
//     });
// }

export function initReveal(scope, threshold = 0.3) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold }
    );

    document.querySelectorAll(`${scope} .reveal`).forEach((el) => {
        observer.observe(el);
    });

    // Also observe the scope element itself if it has .reveal
    const scopeEl = document.querySelector(scope);
    if (scopeEl?.classList.contains('reveal')) {
        observer.observe(scopeEl);
    }
}

