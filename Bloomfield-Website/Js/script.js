// JavaScript for toggling the mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links,auth-buttons');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu'); // Toggle the menu visibility
});
