import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from '../shared/ContactModal';

export type LayoutContextType = {
  openContact: () => void;
};

const Layout: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-black">
      <Navbar onContactClick={openContact} />
      
      <main className="flex-grow">
        <Outlet context={{ openContact } satisfies LayoutContextType} />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default Layout;