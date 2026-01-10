import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import GrowthSimulator from '../components/shared/GrowthSimulator';
import { LayoutContextType } from '../components/layout/Layout';

const Simulator: React.FC = () => {
  const { openContact } = useOutletContext<LayoutContextType>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-black mb-4">
            Simulateur de Croissance
          </h1>
          <p className="text-lg text-gray-600">
            Visualisez concrètement l'impact de Leadesia sur votre cabinet. Ajustez les paramètres pour obtenir une projection personnalisée de votre croissance en nombre de dossiers et en chiffre d'affaires sur les 6 prochains mois.
          </p>
        </div>
        <GrowthSimulator onContactClick={openContact} isPage />
      </div>
    </div>
  );
};

export default Simulator;
