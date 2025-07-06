import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get current scroll position
    const currentScrollY = window.scrollY;
    
    // Use instant scroll if user is far down the page (> 1000px)
    // Use smooth scroll for shorter distances
    const behavior = currentScrollY > 1000 ? 'instant' : 'smooth';
    
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior as ScrollBehavior
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop; 
