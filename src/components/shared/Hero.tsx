import React from 'react';
import { ArrowRight, Facebook, Instagram, CalendarCheck, PhoneCall } from 'lucide-react';
import ScrollingBenefits from './ScrollingBenefits';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-cream overflow-hidden">
      <div className="relative pt-24 pb-16 md:pt-32 lg:pt-40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-burgundy/5 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-stretch">
            
            {/* Text Content */}
            <div className="lg:col-span-1 flex flex-col justify-center text-center lg:text-left">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-burgundy/5 border border-brand-burgundy/10 text-brand-burgundy text-xs font-semibold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-burgundy mr-2"></span>
                  Réservé aux avocats fiscalistes
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black leading-tight mb-6">
                  Ne cherchez plus vos clients.<br />
                  <span className="text-brand-burgundy">Choisissez vos dossiers.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Leadesia est la première agence d'acquisition dédiée exclusivement au <strong>contentieux fiscal</strong>. Nous vous apportons des dossiers qualifiés (entreprises et particuliers) directement dans votre agenda.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={onContactClick}
                    className="w-full sm:w-auto px-8 py-4 btn-burgundy rounded-sm font-medium text-lg shadow-sm flex items-center justify-center gap-2"
                  >
                    Auditer mon potentiel
                    <ArrowRight size={20} />
                  </button>
                  <a 
                    href="#expertise" 
                    onClick={(e) => handleNavClick(e, '#expertise')}
                    className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-sm font-medium text-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                  >
                    Voir notre approche
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block lg:col-span-1 mt-12 lg:mt-0">
              <div className="relative rounded-sm overflow-hidden shadow-2xl h-full border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto-format=fit=crop" 
                  alt="Avocats en réunion" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* 4 flying icon squares over image */}
                <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-sm border border-white/20 shadow-lg flex items-center justify-center w-14 h-14">
                    <Facebook size={24} className="text-brand-burgundy" fill="currentColor" strokeWidth={0} />
                  </div>
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-sm border border-white/20 shadow-lg flex items-center justify-center w-14 h-14">
                    <Instagram size={24} className="text-brand-burgundy" />
                  </div>
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-sm border border-white/20 shadow-lg flex items-center justify-center w-14 h-14">
                    <CalendarCheck size={24} className="text-brand-burgundy" />
                  </div>
                  <div className="bg-white/80 backdrop-blur-md p-3 rounded-sm border border-white/20 shadow-lg flex items-center justify-center w-14 h-14">
                    <PhoneCall size={24} className="text-brand-burgundy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingBenefits />
    </div>
  );
};

export default Hero;