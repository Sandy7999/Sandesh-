// You can add your JavaScript code here, for example for interactive elements
// If you have any animations, interactivity, or form submissions, this is the file to use.

document.addEventListener("DOMContentLoaded", () => {
  // Example: Smooth Scroll on Navbar links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for fixed header height
        behavior: "smooth"
      });
    });
  });
});
