// Optional: attempt to prevent right-click, selection and copying.
// Note: disabling these is not user-friendly, not foolproof, and may harm accessibility.
document.addEventListener("DOMContentLoaded", () => {
  // Prevent context menu, selection start, and copy/cut events at capture phase
  const blockEvents = (e) => {
    e.preventDefault();
  };

  ["contextmenu", "selectstart", "copy", "cut"].forEach((ev) => {
    document.addEventListener(ev, blockEvents, { capture: true });
  });

  // Block common copy shortcuts (Ctrl/Cmd + C, Ctrl+Insert) at capture phase
  document.addEventListener(
    "keydown",
    (e) => {
      const key = (e.key || "").toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (key === "c" || key === "insert")) {
        e.preventDefault();
        return false;
      }
    },
    true
  );

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", hamburger.classList.contains("active"));
    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector("header").offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 10;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
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

// Scroll Reveal Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe all elements with the 'reveal-on-scroll' class
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  observer.observe(el);
});

// Also dynamically add 'reveal-on-scroll' to project cards and observe them
document.querySelectorAll('.project-card').forEach(el => {
  el.classList.add('reveal-on-scroll');
  observer.observe(el);
});

