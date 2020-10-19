burger.addEventListener('click', navMenu);

function navMenu(e) {
    e.preventDefault();

    // Open nav menu on burger click
    this.classList.toggle('open');
    navList.classList.toggle('open');
    nav.style.display = 'block';
    nav.style.zIndex = '100';

    // Close mav menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                this.classList.remove('open');
                navList.classList.remove('open');
                nav.style.display = 'none';
                nav.style.zIndex = '-100';
            }
        });
    });

    // Close nav menu on burger click
    if (!navList.classList.contains('open')) {
        nav.style.display = 'none';
        nav.style.zIndex = '-100';
    }
}