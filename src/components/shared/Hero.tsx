import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

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
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-burgundy/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-burgundy/5 border border-brand-burgundy/10 text-brand-burgundy text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-burgundy mr-2"></span>
              Réservé aux avocats fiscalistes
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-black leading-tight mb-6">
              Ne cherchez plus vos clients.<br />
              <span className="text-brand-burgundy">Sélectionnez-les.</span>
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

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-y-4 gap-x-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-gold" />
                <span>Exclusivité sectorielle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-gold" />
                <span>Prospects qualifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-brand-gold" />
                <span>R.O.I mesurable</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-brand-gold" />
                <span>Jusqu'à 2x plus de dossiers signés</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block lg:col-span-5 mt-12 lg:mt-0 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto-format&fit=crop" 
                alt="Avocats en réunion" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-6 pb-12 text-white">
                <p className="font-serif italic text-lg">"Leadesia a transformé notre cabinet en 3 mois."</p>
                <p className="text-sm opacity-80 mt-1">Cabinet fiscaliste associé, Paris VIII</p>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-sm shadow-xl border border-gray-100 max-w-xs z-20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400 uppercase">Croissance mensuelle</span>
                <span className="text-green-500 text-xs font-bold">+127%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-burgundy w-3/4 rounded-full"></div>
              </div>
              <p className="mt-3 text-sm text-brand-black font-semibold">Dossiers signés via Leadesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;