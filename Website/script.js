// Gilded Cloak - Future Interactivity

document.addEventListener('DOMContentLoaded', function () {
    // --- Parallax Effect ---
    var scene = document.getElementById('scene');
    if (scene) {
        var parallaxInstance = new Parallax(scene);
    }

    // --- GSAP Animations ---
    const tl = gsap.timeline();

    // 1. Logo "Glitch" In
    tl.from('.hero-logo', {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: 'power4.out',
        delay: 0.5,
        onStart: () => {
            // A simple glitch effect simulation
            let glitchInterval = setInterval(() => {
                gsap.to('.hero-logo', {
                    x: (Math.random() - 0.5) * 10,
                    y: (Math.random() - 0.5) * 10,
                    skewX: (Math.random() - 0.5) * 5,
                    duration: 0.1,
                    ease: 'power2.inOut',
                    onComplete: () => gsap.to('.hero-logo', { x: 0, y: 0, skewX: 0, duration: 0.1 })
                });
            }, 200);
            setTimeout(() => clearInterval(glitchInterval), 1500);
        }
    });

    // 2. Title Fade In
    tl.to('.hero-title', {
        duration: 1,
        opacity: 1,
        ease: 'power2.out'
    }, "-=1"); // Overlap with previous animation

    // 3. Tagline "Decode" Animation
    tl.to('.hero-tagline span', {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, "-=0.5");
});
