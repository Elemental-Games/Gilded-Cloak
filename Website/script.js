// Gilded Cloak - Interactive Landing Page

document.addEventListener('DOMContentLoaded', function () {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- Parallax Effect ---
    var scene = document.getElementById('scene');
    if (scene) {
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            hoverOnly: true
        });
    }

    // --- Initial Hero Animations ---
    const heroTl = gsap.timeline();

    // 1. Logo "Glitch" In
    heroTl.from('.hero-logo', {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        ease: 'power4.out',
        delay: 0.3,
        onStart: () => {
            // Glitch effect simulation
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

    // 2. Tagline "Decode" Animation
    heroTl.to('.hero-tagline span', {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    }, "-=0.7");

    // 3. Scroll Indicator Fade In
    heroTl.from('.scroll-indicator', {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: 'power2.out'
    }, "-=0.3");

    // --- Scroll-Triggered Animations ---
    
    // Fade in elements with class "fade-in"
    gsap.utils.toArray('.fade-in').forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            },
            duration: 1,
            opacity: 0,
            y: 50,
            ease: 'power3.out',
            delay: index * 0.1
        });
    });

    // Investigation cards - stagger animation
    gsap.utils.toArray('.investigation-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            opacity: 0,
            y: 60,
            scale: 0.9,
            ease: 'back.out(1.7)',
            delay: index * 0.2
        });

        // Hover glow effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 0 50px rgba(26, 67, 20, 0.8)',
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 0 0px rgba(26, 67, 20, 0)',
                duration: 0.3
            });
        });
    });

    // Team members - dramatic entrance
    gsap.utils.toArray('.team-member').forEach((member, index) => {
        gsap.from(member, {
            scrollTrigger: {
                trigger: member,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 1,
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotation: index % 2 === 0 ? -10 : 10,
            ease: 'power3.out',
            delay: index * 0.3
        });
    });

    // CTA button - pop in effect
    gsap.from('.cta-button', {
        scrollTrigger: {
            trigger: '.cta-button',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        opacity: 0,
        scale: 0.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.3
    });

    // Add pulsing animation to CTA button
    gsap.to('.cta-button', {
        boxShadow: '0 0 60px rgba(212, 175, 55, 0.8)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
    });
});
