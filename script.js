const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
})