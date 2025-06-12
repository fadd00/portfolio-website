// This file contains the JavaScript code for the portfolio website. 
// It implements the functionality for the navbar to disappear when scrolling down and reappear when scrolling up.

let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-60px'; // Adjust based on your navbar height
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});