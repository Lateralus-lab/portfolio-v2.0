function loaderFunc() {
    setTimeout(() => {
        page.style.opacity = 0.3;
        loader.style.display = 'none';

        page.style.display = 'flex';
        setTimeout(() => page.style.opacity = 1, 50);
    }, 800);
}

loaderFunc();