// ===== Current Year =====
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
    revealElements.forEach(el => el.classList.add('visible'));
} else {

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.10,
        rootMargin: "0px 0px -80px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ===== Hero Fade In =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
/* ===== Mobile Menu ===== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        mainNav.classList.toggle("active");

    });

}