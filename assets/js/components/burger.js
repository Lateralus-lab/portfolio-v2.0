const burger = document.querySelector('.burger');
let menuOpen = false;

burger.addEventListener('click', () => {
    if (!menuOpen) {
        burger.classList.add('open');
        menuOpen = true;
    } else {
        burger.classList.remove('open');
        menuOpen = false;
    }
});