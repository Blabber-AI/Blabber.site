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

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (mobileNavToggle && navMenu) {
    // Logic to open/close the menu
    mobileNavToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents the 'document' click listener from firing immediately
      navMenu.classList.toggle('active');
      mobileNavToggle.querySelector('.fa-bars').classList.toggle('hidden');
      mobileNavToggle.querySelector('.fa-times').classList.toggle('hidden');
    });

    // Close the menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileNavToggle.querySelector('.fa-bars').classList.remove('hidden');
          mobileNavToggle.querySelector('.fa-times').classList.add('hidden');
        }
      });
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileNavToggle.querySelector('.fa-bars').classList.remove('hidden');
        mobileNavToggle.querySelector('.fa-times').classList.add('hidden');
      }
    });
  }

  // Header scroll effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for sticky header
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll animation for reveal elements
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Count-up animation
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCountUp();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Scroll-triggered timeline logic
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const timelineImages = document.querySelectorAll('.timeline-images .timeline-image');
  const progressSteps = document.querySelectorAll('.timeline-progress-step');
  const progressLineFill = document.querySelector('.timeline-progress-line-fill');

  function setActiveStep(stepIndex) {
    // Activate image
    timelineImages.forEach((img, i) => {
      img.classList.toggle('active', i + 1 === stepIndex);
    });

    // Activate progress step
    progressSteps.forEach((step, i) => {
      step.classList.toggle('active', i + 1 === stepIndex);
    });

    // Update progress line
    if (progressLineFill) {
      const percentage = (stepIndex - 1) * 50; // 0% for step 1, 50% for 2, 100% for 3
      progressLineFill.style.height = `${percentage}%`;
    }
  }

  // Set step 1 as active by default
  setActiveStep(1);

  if (window.matchMedia("(min-width: 993px)").matches) {
    const stepObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepNumber = parseInt(entry.target.dataset.step, 10);
          setActiveStep(stepNumber);
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Trigger when 50% of the step is visible
    });

    timelineSteps.forEach(step => {
      stepObserver.observe(step);
    });
  }
});

function startCountUp() {
  const countElements = document.querySelectorAll('[id$="Count"], [id$="Rate"]');
  countElements.forEach(element => {
    const targetValue = parseInt(element.getAttribute('data-value'), 10);
    const duration = 2000;
    let start = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    function updateCount() {
      start += increment;
      if (start < targetValue) {
        element.textContent = Math.ceil(start);
        setTimeout(updateCount, stepTime);
      } else {
        element.textContent = targetValue;
      }
    }
    updateCount();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Animated Counters
  const counters = [
    { id: 'studentCount', endValue: 150, duration: 2000 },
    { id: 'schoolCount', endValue: 5, duration: 1500 },
    { id: 'satisfactionRate', endValue: 98, duration: 2200 }
  ];

  const animateCounter = (element, endValue, duration) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * endValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle scroll-reveal elements
        if (entry.target.classList.contains('reveal-on-scroll')) {
          entry.target.classList.add('is-visible');
        }
        
        // Handle animated counters
        const counter = counters.find(c => c.id === entry.target.id);
        if (counter) {
          animateCounter(entry.target, counter.endValue, counter.duration);
          observer.unobserve(entry.target); // Animate only once
        }
      }
    });
  }, observerOptions);

  // Observe all elements that need animation
  document.querySelectorAll('.reveal-on-scroll, #studentCount, #schoolCount, #satisfactionRate').forEach(el => {
    observer.observe(el);
  });

  // Formspree success message
  const demoForm = document.getElementById('demoForm');
  const successMessage = document.getElementById('successMessage');

  demoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(demoForm);
    fetch(demoForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        demoForm.style.display = 'none';
        successMessage.style.display = 'block';
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert('Oops! There was a problem submitting your form');
          }
        })
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form');
    });
  });

  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
