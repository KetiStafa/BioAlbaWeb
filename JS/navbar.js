window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 500) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});