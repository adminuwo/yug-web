import React from 'react';
import Hero from '../components/home/Hero';
import IncubationSpotlight from '../components/home/IncubationSpotlight';
import TrustSection from '../components/home/TrustSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import UpcomingHighlight from '../components/home/UpcomingHighlight';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';

const Home = ({ onBookVisit }) => {
  return (
    <div className="w-full">
      <Hero onBookVisit={onBookVisit} />
      <IncubationSpotlight />
      <TrustSection />
      <AboutPreview />
      <FeaturedProjects />
      <UpcomingHighlight />
      <WhyChooseUsSection />
      <Testimonials />
      <FinalCTA onBookVisit={onBookVisit} />
    </div>
  );
};

export default Home;
