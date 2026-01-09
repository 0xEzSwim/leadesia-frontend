import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LegalMentions from './components/LegalMentions';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type ViewState = 'home' | 'legal' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-black">
      <Navbar 
        onContactClick={() => setIsContactOpen(true)} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero onContactClick={() => setIsContactOpen(true)} />
            <ProblemSolution />
            <Services />
            <Results />
            <Process />
          </>
        ) : currentView === 'legal' ? (
          <LegalMentions />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy />
        ) : (
          <TermsOfService />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default App;