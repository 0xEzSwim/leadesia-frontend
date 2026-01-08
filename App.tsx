import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-black">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      
      <main className="flex-grow">
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <ProblemSolution />
        <Services />
        <Results />
        <Process />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default App;