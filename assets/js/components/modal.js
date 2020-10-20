modalData.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Opens modal window on click
        modal.classList.add('show');
        document.body.classList.add('no-scroll');

        // Animation for modal window
        setTimeout(() => {
            modalInner.style.transform = 'scale(1)';
            modalInner.style.opacity = '1';
        }, 200)
    });
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();

    // Close modal window on close button
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');

    // Animated modal on window close
    modalInner.style.transform = 'scale(0.5)';
    modalInner.style.opacity = '0'
});