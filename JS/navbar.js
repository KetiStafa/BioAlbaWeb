let lastScrollY = window.scrollY; // Keep track of the last scroll position

window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.nav-bar');
    const topBar = document.querySelector('.top-bar');
    const currentScrollY = window.scrollY; // Get the current scroll position

    if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the bars
        navBar.classList.add('scrolled');
        topBar.classList.add('scrolled');
    } else {
        // Scrolling up - show the bars
        navBar.classList.remove('scrolled');
        topBar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY; // Update the last scroll position
});
const checkbox = document.getElementById('check');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    document.body.classList.add('menu-open'); // Disable scroll
  } else {
    document.body.classList.remove('menu-open'); // Enable scroll
  }
});