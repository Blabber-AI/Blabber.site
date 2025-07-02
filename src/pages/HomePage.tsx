import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import FeaturedBySection from '../components/FeaturedBySection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blabber | AI-Powered English Learning for Schools"
        description="Transform English education with AI technology. Help students improve pronunciation, fluency, and confidence with personalized feedback and real-time analysis."
        keywords="AI English learning, school education, pronunciation training, language learning, educational technology, blabber ai"
        canonical="https://blabber.site/"
      />
      <div className="bg-white">
        <HeroSection />
        <FeaturedBySection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToActionSection />
      </div>
    </>
  );
};

export default HomePage; 