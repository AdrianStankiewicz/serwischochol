// Mark <html> so CSS animations only activate when JS is running
document.documentElement.classList.add('js-anim-ready');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.anim').forEach(el => observer.observe(el));
