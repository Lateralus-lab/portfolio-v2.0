// Add animation for circles on scroll
window.addEventListener('scroll', () => {
    const scrollPos = parseInt(window.scrollY);

    if (scrollPos >= (trigger.scrollHeight - 500)) {
        circles.forEach(item => item.classList.add('animated'));
    }
});



