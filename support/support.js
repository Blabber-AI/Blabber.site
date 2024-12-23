// Toggle FAQ answers
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const arrow = button.querySelector(".arrow");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    answer.style.display = "block";
    arrow.classList.add("rotate");
  }
}

// Update footer year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
