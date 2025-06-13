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

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-mobile-nav');
    const mobileLinks = mobileNav.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    });

    // Close mobile nav when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
});

// Carousel Functionality
function initializeCarousel(carouselElement) {
    const slidesContainer = carouselElement.querySelector('.carousel-slides');
    const slides = carouselElement.querySelectorAll('.carousel-slide');
    const prevButton = carouselElement.querySelector('.prev-btn');
    const nextButton = carouselElement.querySelector('.next-btn');
    let currentSlideIndex = 0;

    if (!slidesContainer || slides.length === 0) {
        // console.error("Carousel slides container or slides not found for element:", carouselElement);
        return; // Do not initialize if essential elements are missing
    }

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            // Optional: direct style manipulation if preferred over class for display
            // slide.style.display = 'none';
        });
        slides[index].classList.add('active');
        // slides[index].style.display = 'flex'; // Or 'block' depending on slide content
        currentSlideIndex = index;
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentSlideIndex--;
            if (currentSlideIndex < 0) {
                currentSlideIndex = slides.length - 1;
            }
            showSlide(currentSlideIndex);
        });

        nextButton.addEventListener('click', () => {
            currentSlideIndex++;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0;
            }
            showSlide(currentSlideIndex);
        });
    } else {
        // console.warn("Carousel navigation buttons not found for element:", carouselElement);
        // Hide buttons if they are not found, or handle as error
        if(prevButton) prevButton.style.display = 'none';
        if(nextButton) nextButton.style.display = 'none';
    }

    // Show the first slide initially if slides are present
    if (slides.length > 0) {
        showSlide(0);
    }
}

// Initialize all carousels on the page
document.addEventListener('DOMContentLoaded', function () {
    // This ensures this part of the script runs after the main DOM is loaded.
    // The existing DOMContentLoaded listener will also run.

    const projectCarousel = document.querySelector('.project-carousel');
    if (projectCarousel) {
        initializeCarousel(projectCarousel);
    }

    const servicesCarousels = document.querySelectorAll('.services-carousel');
    servicesCarousels.forEach(carousel => {
        initializeCarousel(carousel);
    });
});