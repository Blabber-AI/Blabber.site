// Smooth scroll to an element by its ID
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 60,
      behavior: "smooth",
    });
  }
}

// Update the footer year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
