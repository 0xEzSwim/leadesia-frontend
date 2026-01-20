import React from 'react';
import { Droplets, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {

  return (
    <section id="etudes-de-cas" className="pt-24 pb-16 bg-brand-cream scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Retour d'Expérience</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Il avait la notoriété.<br/>Il lui manquait les dossiers.
          </h2>
          <p className="text-lg text-gray-600">
            Comment un confrère est passé de la simple visibilité sur les réseaux sociaux à l’obtention de dossiers grâce au système de publicité digitale et de qualification humaine.
          </p>
        </div>

        {/* Part 1: Narrative Case Study */}
        <div className="bg-white rounded-sm shadow-lg border border-gray-100 p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h4 className="font-serif font-bold text-2xl text-brand-black mb-2">Le Cas du "Confrère 2.0"</h4>
            <p className="font-medium text-brand-burgundy mb-6">De la Notoriété Digitale aux Dossiers Qualifiés</p>
            <p className="text-sm text-gray-600 mb-6 italic">
              L'un des cas les plus emblématiques du marché est celui d'un <strong>avocat fiscaliste à son compte</strong> très suivi sur les réseaux sociaux. Son défi n'était pas d'être vu, mais d'être vu par les bonnes personnes pour convertir sa notoriété en dossiers à forte valeur ajoutée.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-bold text-gray-800 mb-3 flex items-center"><Droplets className="w-4 h-4 mr-2 text-red-500" />Le Défi</h5>
                <ul className="space-y-2 list-inside list-disc text-gray-500">
                  <li>2 ans de contenu (YT/TikTok)</li>
                  <li>Plusieurs milliers de followers</li>
                  <li className="font-semibold">Résultat : 0 dossier qualifié</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-3 flex items-center"><Target className="w-4 h-4 mr-2 text-green-500" />La Stratégie Appliquée</h5>
                <ul className="space-y-2 list-inside list-disc text-gray-500">
                  <li>Publicités Meta (Facebook & Insta)</li>
                  <li>Qualification fine des prospects</li>
                  <li className="font-semibold">Résultat : 15 RDV dans son agenda</li>
                </ul>
              </div>
            </div>

            <blockquote className="mt-8 bg-brand-cream p-6 rounded-sm border-l-4 border-brand-gold text-gray-700">
              <p className="font-serif italic">
                "J’ai demandé comment on avait des clients, et personne n’était capable de me le dire. On m’a répondu : « ils arrivent, ils arrivent ». La publicité a transformé mon activité."
              </p>
            </blockquote>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-sm overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto-format&fit=crop" 
                alt="Avocat dans un bureau moderne"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <p className="text-xs uppercase font-bold tracking-wider mb-2 text-brand-lightGold">Résultats dès le 1er mois</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="text-2xl font-bold font-serif">+30k€</span>
                    <span className="block text-xs opacity-80">Honoraires générés</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold font-serif">6</span>
                    <span className="block text-xs opacity-80">dossiers signés</span>
                  </div>
                  <div>
                    <span className="text-2xl font-bold font-serif">x10</span>
                    <span className="block text-xs opacity-80">ROI (budget 3k€)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;