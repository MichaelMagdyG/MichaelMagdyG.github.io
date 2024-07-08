// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Right Click is disabled on this website.");
});

// Disable Ctrl+C
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
    e.preventDefault();
    alert("Copying is disabled on this website.");
    // Optionally, you can prevent the alert from blocking further default action
    return false;
  }
});

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

// Get current year for footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
