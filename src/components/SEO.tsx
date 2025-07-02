import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Blabber | AI-Powered English Learning for Schools',
  description = 'Advanced AI technology for English learning in schools. Help students improve pronunciation, fluency, and confidence with personalized feedback.',
  keywords = 'AI English learning, school education, pronunciation training, language learning, educational technology',
  ogTitle,
  ogDescription,
  ogImage = '/Blabber-logo.png',
  canonical
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('language', language);
    setMeta('robots', 'index, follow');
    setMeta('author', 'Blabber AI');

    // Open Graph tags
    setProperty('og:title', ogTitle || title);
    setProperty('og:description', ogDescription || description);
    setProperty('og:image', ogImage);
    setProperty('og:url', window.location.href);
    setProperty('og:type', 'website');
    setProperty('og:site_name', 'Blabber');

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', ogImage);

    // Language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Blabber",
      "url": "https://blabber.site",
      "logo": "https://blabber.site/Blabber-logo.png",
      "description": description,
      "sameAs": [
        "https://www.linkedin.com/company/blabber-ai",
        "https://twitter.com/blabber_ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+972-3-1234567",
        "contactType": "customer service",
        "availableLanguage": ["Hebrew", "English"]
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, language]);

  return null;
};

export default SEO; 