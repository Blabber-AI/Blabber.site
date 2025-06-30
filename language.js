document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-btn');
    const translatableElements = document.querySelectorAll('[data-en]');
    const ctaInput = document.querySelector('.cta-input');

    const setLanguage = (lang) => {
        if (lang !== 'en' && lang !== 'he') {
            console.warn(`Unsupported language: ${lang}. Defaulting to 'en'.`);
            lang = 'en';
        }

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
        sessionStorage.setItem('blabber-lang', lang);

        document.body.classList.add('language-transitioning');
        
        requestAnimationFrame(() => {
            // Update text content
            translatableElements.forEach(el => {
                const text = el.dataset[lang];
                if (text !== undefined) {
                    // This is a more robust way to handle elements that may contain other HTML tags like <span> or <a>
                    if (el.children.length > 0 && text.includes('<span>')) {
                         // Preserve the inner HTML structure if needed
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = text;
                        
                        const spanCopy = el.querySelector('span') ? el.querySelector('span').cloneNode(true) : null;
                        
                        // Clear the element
                        while(el.firstChild) {
                            el.removeChild(el.firstChild);
                        }
                        
                        // Reconstruct content
                        const textParts = text.split(/<span>.*<\/span>/);
                        el.appendChild(document.createTextNode(textParts[0] || ''));
                        if(spanCopy) {
                            el.appendChild(spanCopy);
                        }
                        if(textParts[1]) {
                            el.appendChild(document.createTextNode(textParts[1]));
                        }

                    } else if (el.querySelector('.back-button-text')) {
                        el.querySelector('.back-button-text').textContent = text;
                    }
                    else {
                        el.textContent = text;
                    }
                }
            });

            // Update placeholders
            if (ctaInput) {
                const placeholderText = ctaInput.dataset[lang + 'Placeholder'];
                if (placeholderText) {
                    ctaInput.placeholder = placeholderText;
                }
            }

            // Update buttons
            languageButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });

            setTimeout(() => {
                document.body.classList.remove('language-transitioning');
            }, 300); // Match CSS transition duration
        });
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            if (document.documentElement.lang !== selectedLang) {
                setLanguage(selectedLang);
            }
        });
    });

    // On page load, check session storage for saved language
    const savedLang = sessionStorage.getItem('blabber-lang');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Default to Hebrew if no language is saved
        setLanguage('he');
    }
}); 