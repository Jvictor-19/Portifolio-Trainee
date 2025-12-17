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

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    });
  });
}

// Navbar Scroll Logic
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
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
  });
}

// Smooth Scroll Helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
