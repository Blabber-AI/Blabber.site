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

/* ----------- FORM HANDLING FOR FORMSPREE ----------- */
const form = document.getElementById('demoForm');
const successMessage = document.getElementById('successMessage');

// Your actual Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/mrbbgydr";

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(form);

    // Add extra text to the email body
    formData.append("extraNote", "User is requesting a Blabber demo.");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show success message
        successMessage.style.display = 'block';

        // Clear the form
        form.reset();

        // Wait 2 seconds, then refresh
        setTimeout(() => {
          location.reload();
        }, 2000);

      } else {
        alert("Oops, there was a problem. Please try again.");
      }
    } catch (error) {
      alert("Oops, something went wrong. Please try again.");
      console.error(error);
    }
  });
}
