import React, { useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import ProblemSolution from '../components/shared/ProblemSolution';
import Services from '../components/shared/Services';
import Process from '../components/shared/Process';
import GrowthSimulator from '../components/shared/GrowthSimulator';
import Results from '../components/shared/Results';
import CaseStudies from '../components/shared/CaseStudies';
import Offers from '../components/shared/Offers';
import { LayoutContextType } from '../components/layout/Layout';

const Index: React.FC = () => {
  const { openContact } = useOutletContext<LayoutContextType>();
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL on mount (e.g. /#expertise)
    if (location.hash) {
      const targetId = location.hash.substring(1); // remove '#'
      const element = document.getElementById(targetId);
      if (element) {
        // Small timeout to ensure DOM is ready and layout stabilized
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero onContactClick={openContact} />
      <ProblemSolution />
      <Services />
      <Results />
      /*<CaseStudies />*/
      <Offers onContactClick={openContact} />
      <Process />
      <GrowthSimulator onContactClick={openContact} />
    </>
  );
};

export default Index;