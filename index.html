// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark/light mode toggle
const themeToggle = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  localStorage.setItem("theme", theme);
}

if (storedTheme) {
  applyTheme(storedTheme);
} else {
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(nextTheme);
});

// Get current year for footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Back-to-top button behavior
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
