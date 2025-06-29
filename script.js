document.addEventListener('DOMContentLoaded', () => {

    /**
     * ------------------------------------------------------------------------
     *  Global State & Constants
     * ------------------------------------------------------------------------
     */
    let currentLang = 'en';
    const FORMSPREE_URL = "https://formspree.io/f/mrbbgydr";

    /**
     * ------------------------------------------------------------------------
     *  Element Selectors
     * ------------------------------------------------------------------------
     */
    const yearSpan = document.getElementById('year');
    const header = document.querySelector('.header');
    const demoForm = document.getElementById('demoForm');
    const successMessage = document.getElementById('successMessage');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const languageBtns = document.querySelectorAll('.language-btn');
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const heroStatsSection = document.querySelector('.hero-stats');
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const timelineImages = document.querySelectorAll('.timeline-images .timeline-image');
    const progressSteps = document.querySelectorAll('.timeline-progress-step');
    const progressLineFill = document.querySelector('.timeline-progress-line-fill');

    /**
     * ------------------------------------------------------------------------
     *  Initial Setup
     * ------------------------------------------------------------------------
     */
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /**
     * ------------------------------------------------------------------------
     *  Functions
     * ------------------------------------------------------------------------
     */

    // --- Language Switching ---
    const switchLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

        languageBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('[data-en], [data-he]').forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            if (translation) {
                const placeholderAttr = `data-${lang}-placeholder`;
                if (element.hasAttribute(placeholderAttr)) {
                    element.placeholder = element.getAttribute(placeholderAttr);
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    };

    // --- Animations ---
    const startCountUp = () => {
        const counters = document.querySelectorAll('.hero-stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let current = 0;
            const increment = target / 100;

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    counter.childNodes[0].nodeValue = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.childNodes[0].nodeValue = target;
                }
            };
            updateCount();
        });
    };

    const setActiveTimelineStep = (stepIndex) => {
        timelineImages.forEach((img, i) => img.classList.toggle('active', i + 1 === stepIndex));
        progressSteps.forEach((step, i) => step.classList.toggle('active', i + 1 === stepIndex));

        if (progressLineFill) {
            const percentage = (stepIndex - 1) * 50;
            progressLineFill.style.height = `${percentage}%`;
        }
    };

    // --- Event Handlers ---
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(demoForm);
        formData.append("extraNote", "User is requesting a Blabber demo.");

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                if (successMessage) successMessage.style.display = 'block';
                demoForm.reset();
                setTimeout(() => location.reload(), 2000);
            } else {
                alert("Oops, there was a problem. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Oops, something went wrong. Please try again.");
        }
    };

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileNavToggle) {
                    mobileNavToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            }
            const headerOffset = header ? header.offsetHeight : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    /**
     * ------------------------------------------------------------------------
     *  Event Listeners & Observers
     * ------------------------------------------------------------------------
     */

    // --- General Event Listeners ---
    if (demoForm) {
        demoForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    languageBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.getAttribute('data-lang')));
    });

    allNavLinks.forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // --- Intersection Observers ---
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => scrollObserver.observe(element));
    
    if (heroStatsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCountUp();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(heroStatsSection);
    }

    // --- Timeline Logic (unchanged) ---
    if (timelineSteps.length > 0 && timelineImages.length > 0) {
        setActiveTimelineStep(1); // Set initial state
        
        if (window.matchMedia("(min-width: 993px)").matches) {
            const stepObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const stepNumber = parseInt(entry.target.dataset.step, 10);
                        setActiveTimelineStep(stepNumber);
                    }
                });
            }, { root: null, threshold: 0.5 });

            timelineSteps.forEach(step => stepObserver.observe(step));
        } else {
             // Optional: Add simplified logic for mobile if needed,
             // for now, it just defaults to the first step.
        }
    }

    /**
     * ------------------------------------------------------------------------
     *  Initialization
     * ------------------------------------------------------------------------
     */
    switchLanguage(currentLang); // Set default language on load

});
