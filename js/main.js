// --- SCRIPT PARA MENÚ HAMBURGUESA ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Anima el menú
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');

    // Anima los enlaces
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// --- SCRIPT PARA ANIMACIÓN AL SCROLL ---
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // La animación se activa cuando el 10% del elemento es visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});