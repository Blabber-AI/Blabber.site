// Smooth scroll to element by ID
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 60,
      behavior: 'smooth',
    });
  }
}

// Update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
