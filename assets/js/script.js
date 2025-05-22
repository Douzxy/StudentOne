// ===== Tailwind Configuration =====
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Custom color palette for different sections/themes
        "main-color-one": "#ff3b05",
        "main-color-two": "#ff3b05",
        "portfolio-color": "#ff8e47",
        "logistic-color": "#ff8e47",
        "industry-color": "#ff8e47",
        "secondary-color": "#1d2228",
        "heading-color": "#0a1121",
        "paragraph-color": "#878a95",
        "construction-color": "#ffbc13",
        "lawyer-color": "#c89e66",
        "political-color": "#e70f49",
        "medical-color": "#47ccf1",
        "medical-two-color": "#fc6286",
        "fruits-color": "#4ca338",
        "fruits-heading-color": "#014019",
        "portfolio-dark-one": "#202334",
        "portfolio-dark-two": "#191c47",
        "charity-color": "#d1312e",
        "dagency-color": "#ff8a47",
        "cleaning-color": "#fee126",
        "cleaning-two-color": "#20beea",
        "course-color": "#21baf7",
        "course-two-color": "#fda809",
        "grocery-color": "#80b82d",
        "grocery-heading-color": "#014019",
        "main-color-three": "#ff805d",
        "main-color-four": "#ff1747",
        "main-color-five": "#fcda69",
        "heading-color-home-19": "#1B1C25",
        "light-color": "#666666",
        "extra-light-color": "#999999",
        "review-color": "#FABE50",
        "stock-color": "#5AB27E",
      },
      fontFamily: {
        // Custom font families for headings and body text
        heading: ["Nunito", "sans-serif"],
        body: ["Nunito", "sans-serif"],
        "home-19-heading": ["Outfit", "sans-serif"],
        "home-20-heading": ['"Source Serif Pro"', "serif"],
        "home-21-heading": ['"Space Grotesk"', "sans-serif"],
        "home-19-body": ["Roboto", "sans-serif"],
        "home-21-body": ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
};

// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".fa-bars").parentElement;
  const mobileMenu = document.getElementById("mobileMenu");

  // Toggle menu visibility on hamburger icon click
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// ===== Sticky Navbar on Scroll =====
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navTop = document.getElementById("nav-top");
  const navContent = document.getElementById("nav-content");

  function updateNavbar() {
    if (window.scrollY > 500) {
      // When scrolling past 500px, make navbar fixed with background and shadow
      navbar.classList.remove("absolute");
      navbar.classList.add("md:fixed", "md:bg-secondary-color", "md:shadow-md");
      navContent.classList.remove("py-10");
      navContent.classList.add("py-4");

      if (navTop) navTop.classList.add("hidden");
    } else {
      // Reset navbar to original state
      navbar.classList.remove(
        "md:fixed",
        "md:bg-secondary-color",
        "md:shadow-md"
      );
      navbar.classList.add("absolute");
      navContent.classList.remove("py-4");
      navContent.classList.add("py-10");

      if (navTop) navTop.classList.remove("hidden");
    }
  }

  // Run on load and on scroll
  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
});

// ===== Scroll To Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolled more than 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove(
      "opacity-0",
      "translate-y-10",
      "pointer-events-none"
    );
    scrollBtn.classList.add(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto"
    );
  } else {
    scrollBtn.classList.add(
      "opacity-0",
      "translate-y-10",
      "pointer-events-none"
    );
    scrollBtn.classList.remove(
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto"
    );
  }
});

// Smooth scroll to top with custom speed
function smoothScrollToTop() {
  const scrollDuration = 1000; // in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 10);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

// Trigger scroll to top when button clicked
scrollBtn.addEventListener("click", smoothScrollToTop);

// ===== Carousel/News Slider =====
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const slidesContainer = document.getElementById("carouselSlides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Move to specific slide
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  const translateX = -currentSlide * 100;
  slidesContainer.style.transform = `translateX(${translateX}%)`;
}

// Show next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}

// Show previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(currentSlide);
}

// Button event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Swipe/Touch support for mobile
let startX = 0;
let endX = 0;

slidesContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slidesContainer.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Detect swipe direction and act accordingly
function handleSwipe() {
  const diffX = startX - endX;
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide(); // Swipe left
    } else {
      prevSlide(); // Swipe right
    }
  }
}

// ===== Auto-play Carousel (Optional) =====
let autoPlayInterval = setInterval(nextSlide, 2000); // Change every 2 seconds

// Pause auto-play on mouse hover
slidesContainer.addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval);
});

// Resume auto-play on mouse leave
slidesContainer.addEventListener("mouseleave", () => {
  autoPlayInterval = setInterval(nextSlide, 2000);
});
