import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: 'home' | 'legal' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle home-page sections
    if (href.startsWith('#')) {
      onNavigate('home');
      // Delay to allow view switch
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-brand-cream border-t border-brand-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 cursor-pointer w-full max-w-sm" onClick={() => onNavigate('home')}>
              <Logo className="w-full h-auto" color="#0A0A0A" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Leadesia est l'agence de référence pour les avocats fiscalistes ambitieux. Nous combinons technologie et expertise humaine pour garantir votre croissance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-brand-burgundy mb-4 uppercase text-sm tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-brand-gold transition-colors">Accueil</a></li>
              <li><a href="#expertise" onClick={(e) => handleNavClick(e, '#expertise')} className="hover:text-brand-gold transition-colors">Expertise</a></li>
              <li><a href="#resultats" onClick={(e) => handleNavClick(e, '#resultats')} className="hover:text-brand-gold transition-colors">Résultats</a></li>
              <li><a href="#processus" onClick={(e) => handleNavClick(e, '#processus')} className="hover:text-brand-gold transition-colors">Processus</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-burgundy mb-4 uppercase text-sm tracking-wider">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button onClick={() => onNavigate('legal')} className="hover:text-brand-gold transition-colors text-left">
                  Mentions Légales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-brand-gold transition-colors text-left">
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-brand-gold transition-colors text-left">
                  CGU
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Leadesia. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fait avec précision à Paris.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;