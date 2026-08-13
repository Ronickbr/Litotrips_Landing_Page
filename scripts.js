ScrollReveal().reveal('.benefit-card', {
    delay: 200,
    distance: '60px',
    origin: 'bottom',
    interval: 150,
    reset: false,
    opacity: 0,
    scale: 0.95,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.pricing-card', {
    delay: 300,
    scale: 0.9,
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.hero-content', {
    delay: 100,
    origin: 'left',
    distance: '100px'
});

ScrollReveal().reveal('.hero-image', {
    delay: 300,
    origin: 'right',
    distance: '100px'
});

// GSAP Hover effect for the product card
const card = document.querySelector('.product-glass-card');
if (card) {
    card.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(card, {
            rotationY: x * 15,
            rotationX: -y * 15,
            ease: "power2.out",
            duration: 0.5
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            ease: "power2.out",
            duration: 0.5
        });
    });
}

// GSAP Tilt effect for benefit cards
const benefitCards = document.querySelectorAll('.benefit-card');
benefitCards.forEach(bCard => {
    bCard.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = bCard.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        gsap.to(bCard, {
            rotationY: x * 12,
            rotationX: -y * 12,
            y: -15,
            scale: 1.03,
            ease: "power2.out",
            duration: 0.4
        });
    });

    bCard.addEventListener('mouseleave', () => {
        gsap.to(bCard, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.6
        });
    });
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('is-active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('is-active');
        });
    });
}
