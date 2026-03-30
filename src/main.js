// Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal, .reveal-delay-1, .reveal-delay-2, .reveal-delay-3, .reveal-right');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target); // Optimize: stop observing once revealed
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Duck Hover Interaction (Simple parallax effect)
const ducks = document.querySelectorAll('.duck-main, .duck-side, .duck-vision');
ducks.forEach(duck => {
    duck.addEventListener('mousemove', (e) => {
        const { currentTarget: target, clientX: x, clientY: y } = e;
        const { left, top, width, height } = target.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;
        
        target.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    });
    
    duck.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.transform = `translate(0, 0) scale(1)`;
    });
});

console.log("VibeCoding Long-form Landing Page Loaded.");
