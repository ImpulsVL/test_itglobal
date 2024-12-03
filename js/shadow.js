window.addEventListener('scroll', function() {
    const capContent = document.querySelector('.cap-content');
    if (window.scrollY > 0) {
        capContent.classList.add('shadow');
    } else {
        capContent.classList.remove('shadow');
    }
});