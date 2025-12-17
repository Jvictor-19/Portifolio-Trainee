// assets/js/main.js

// Initialize Lucide Icons
lucide.createIcons();

// Set Current Year
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Mobile Menu Logic
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    });
  });
}

// Scroll Logic for Navbar Style and Active Link Highlighting
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  // Navbar Style
  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-black/80",
      "backdrop-blur-md",
      "border-b",
      "border-white/10",
      "py-4"
    );
    navbar.classList.remove("bg-transparent", "py-6");
  } else {
    navbar.classList.remove(
      "bg-black/80",
      "backdrop-blur-md",
      "border-b",
      "border-white/10",
      "py-4"
    );
    navbar.classList.add("bg-transparent", "py-6");
  }

  // Active Link Highlighting
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-green-400");
    const span = link.querySelector("span");
    if (span) {
      span.classList.remove("w-full");
      span.classList.add("w-0");
    }

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-green-400");
      if (span) {
        span.classList.remove("w-0");
        span.classList.add("w-full");
      }
    }
  });
});

// Smooth Scroll Helper
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
