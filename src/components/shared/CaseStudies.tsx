import React from 'react';
import { ArrowRight, Droplets, Target, CheckCircle } from 'lucide-react';

interface CaseStudiesProps {
  onContactClick: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onContactClick }) => {
  
  const detailedCases = [
    {
      profile: "Cabinet Individuel - Création",
      location: "Lyon",
      objective: "Créer un flux de dossiers constant pour assurer la pérennité.",
      investment: "1 200 € / mois",
      results: [
        { label: "Dossiers générés (6 mois)", value: "18" },
        { label: "C.A. additionnel", value: "63 000 €" },
        { label: "Coût par dossier signé", value: "400 €" },
      ]
    },
    {
      profile: "Cabinet d'Associés - Croissance",
      location: "Paris",
      objective: "Se positionner sur des dossiers de restructuration à plus forte valeur.",
      investment: "2 500 € / mois",
      results: [
        { label: "Dossiers générés (6 mois)", value: "25" },
        { label: "C.A. additionnel", value: "112 500 €" },
        { label: "Coût par dossier signé", value: "600 €" },
      ]
    },
    {
      profile: "Niche Spécifique - Domination",
      location: "Bordeaux",
      objective: "Devenir le référent sur la TVA intracommunautaire.",
      investment: "1 000 € / mois",
      results: [
        { label: "Dossiers générés (6 mois)", value: "15" },
        { label: "C.A. additionnel", value: "52 500 €" },
        { label: "Coût par dossier signé", value: "400 €" },
      ]
    }
  ];

  return (
    <section id="etudes-de-cas" className="py-24 bg-brand-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Études de Cas</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Des stratégies concrètes, des résultats démontrés
          </h3>
          <p className="text-gray-600 mt-4">
            Découvrez comment nous transformons les cabinets d'avocats fiscalistes, à travers des cas réels et des projections basées sur notre expérience.
          </p>
        </div>

        {/* Part 1: Narrative Case Study */}
        <div className="bg-white rounded-sm shadow-lg border border-gray-100 p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h4 className="font-serif font-bold text-2xl text-brand-black mb-2">Le Cas du "Confrère 2.0"</h4>
            <p className="font-medium text-brand-burgundy mb-6">De la Notoriété Digitale aux Dossiers Qualifiés</p>
            <p className="text-sm text-gray-600 mb-6 italic">
              L'un des cas les plus emblématiques du marché est celui d'un avocat fiscaliste très suivi sur les réseaux sociaux. Son défi n'était pas d'être vu, mais d'être vu par les bonnes personnes pour convertir sa notoriété en dossiers à forte valeur ajoutée.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-bold text-gray-800 mb-3 flex items-center"><Droplets className="w-4 h-4 mr-2 text-red-500" />Le Défi</h5>
                <ul className="space-y-2 list-inside list-disc text-gray-500">
                  <li>Audience large mais peu qualifiée.</li>
                  <li>Difficulté à monétiser sa visibilité.</li>
                  <li>Perte de temps en tri de demandes.</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-3 flex items-center"><Target className="w-4 h-4 mr-2 text-green-500" />La Stratégie Appliquée</h5>
                <ul className="space-y-2 list-inside list-disc text-gray-500">
                  <li>Retargeting de l'audience engagée.</li>
                  <li>Tunnel de qualification publicitaire.</li>
                  <li>Automatisation du filtrage.</li>
                </ul>
              </div>
            </div>

             <div className="mt-8 bg-brand-cream p-6 rounded-sm border-l-4 border-brand-gold">
               <p className="font-serif italic text-gray-800">
                 "Ce type de témoignage illustre le changement de paradigme : 'Je sélectionne enfin mes clients au lieu de simplement accumuler des followers.'"
               </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-sm overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                alt="Avocat dans un bureau moderne"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <p className="text-xs uppercase font-bold tracking-wider mb-2 text-brand-lightGold">Résultats Publics</p>
                <div className="flex justify-around gap-4 text-center">
                  <div>
                    <span className="text-2xl font-bold font-serif">+4</span>
                    <span className="block text-xs opacity-80">dossiers/mois</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold font-serif">7:1</span>
                    <span className="block text-xs opacity-80">ROI pub</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold font-serif">/10</span>
                    <span className="block text-xs opacity-80">Temps de tri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Part 2: Detailed Cases */}
        <div className="text-center mb-12">
            <h4 className="font-serif font-bold text-2xl text-brand-black">Notre méthode en action</h4>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Voici des projections basées sur les typologies de cabinets que nous accompagnons.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedCases.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-burgundy flex flex-col">
              <div className="flex-grow">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">{study.location}</span>
                <h5 className="font-bold text-lg text-gray-900 mt-1 mb-2">{study.profile}</h5>
                <p className="text-sm text-gray-500 mb-6 italic">"{study.objective}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-800 mb-3">Investissement : <span className="font-bold text-brand-burgundy">{study.investment}</span></p>
                  <ul className="space-y-3">
                    {study.results.map((res, i) => (
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
                  className="w-full text-center px-4 py-2 bg-brand-cream border border-brand-gold/30 text-brand-burgundy text-sm font-medium rounded-sm hover:bg-brand-gold hover:text-white transition-colors"
                >
                  Analyser mon cas
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 btn-burgundy rounded-sm font-medium text-lg shadow-sm flex items-center justify-center gap-2 mx-auto"
            >
              Obtenir une Analyse Personnalisée <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;