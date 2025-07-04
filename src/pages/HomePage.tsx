import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import FeaturedBySection from '../components/FeaturedBySection';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Blabber - AI-Powered Language Learning"
        description="Transform your classroom with Blabber, the AI platform for practicing and mastering new languages."
        canonical="https://blabber.site/"
      />
      <div className="flex flex-col">
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