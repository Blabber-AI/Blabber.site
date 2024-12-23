// Smooth scroll to element by ID
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 60,
      behavior: "smooth",
    });
  }
}

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

// Update footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
