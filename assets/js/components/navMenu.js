burger.addEventListener('click', navMenu);

function navMenu(e) {
    e.preventDefault();

    // Menu on burger click
    this.classList.toggle('open');
    nav.classList.toggle('open');
}

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        nav.classList.remove('open');
    });
});