import React from 'react';
import { CheckCircle } from 'lucide-react';

interface OffersProps {
  onContactClick: () => void;
}

const Offers: React.FC<OffersProps> = ({ onContactClick }) => {
  
  const offers = [
    {
      tagline: "POUR DÉMARRER FORT",
      profile: "Cabinet Individuel - Sérénité",
      objective: "Assurer un flux de dossiers constant et rentable dès le lancement.",
      investment: "À partir de 1 000 € / mois",
      results: [
        { label: "Dossiers ciblés / mois", value: "2-3" },
        { label: "ROI moyen constaté", value: "x5" },
        { label: "Résultat immédiat", value: "Dès le 1er mois" },
      ],
      buttonText: "Débloquer la Sérénité"
    },
    {
      tagline: "POUR PASSER UN CAP",
      profile: "Cabinet d'Associés - Croissance",
      objective: "Se positionner sur des dossiers à plus forte valeur et scaler l'acquisition.",
      investment: "À partir de 3 000 € / mois",
      results: [
        { label: "Dossiers premium / mois", value: "6+" },
        { label: "Exclusivité sectorielle", value: "Prioritaire" },
        { label: "Reporting avancé", value: "Inclus" },
      ],
      buttonText: "Accélérer la Croissance"
    }
  ];

  return (
    <section id="offres" className="pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Nos Offres</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Investissez dans votre croissance</h2>
          <p className="text-lg text-gray-600">
            Des solutions adaptées aux ambitions de chaque cabinet.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-burgundy flex flex-col">
                <div className="flex-grow">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">{offer.tagline}</span>
                  <h5 className="font-bold text-lg text-gray-900 mt-1 mb-2">{offer.profile}</h5>
                  <p className="text-sm text-gray-500 mb-6 italic">"{offer.objective}"</p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-3">Investissement : <span className="font-bold text-brand-burgundy">{offer.investment}</span></p>
                    <ul className="space-y-3">
                      {offer.results.map((res, i) => (
                         <li key={i} className="flex justify-between items-center text-sm">
                           <span className="text-gray-600 flex items-center"><CheckCircle size={14} className="mr-2 text-brand-gold" />{res.label}</span>
                           <span className="font-bold text-gray-800">{res.value}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={onContactClick} 
                    className="w-full btn-burgundy rounded-sm font-medium text-sm py-3 px-4 shadow-sm"
                  >
                    {offer.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;