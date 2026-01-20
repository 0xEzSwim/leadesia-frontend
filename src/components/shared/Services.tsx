import React from 'react';
import { Zap, UserCheck, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-brand-cream relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Notre Valeur Ajoutée</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Une double compétence pour un seul objectif : <span className="text-brand-burgundy">Votre Rentabilité</span>
          </h3>
          <p className="text-lg text-gray-600">
            Nous maîtrisons les algorithmes pour attirer, et la psychologie humaine pour convaincre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Colonne 1 : Le Moteur (Tech) */}
          <div className="bg-white p-8 lg:p-10 rounded-sm shadow-lg border-t-4 border-brand-burgundy flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-burgundy/5 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"></div>

            <div className="flex items-center mb-8 relative z-10">
              <div className="w-14 h-14 bg-brand-burgundy/10 rounded-full flex items-center justify-center mr-5 text-brand-burgundy shadow-sm">
                <Zap size={28} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900">L'Expertise Publicitaire <br/><span className="text-sm font-sans font-normal text-gray-500 uppercase tracking-wide">Le Moteur</span></h4>
            </div>

            <div className="flex-grow space-y-8 relative z-10">
              <p className="text-gray-600 italic border-l-2 border-brand-gold pl-4 text-lg">
                "On ne vous apporte pas juste du clic, on capture l'attention de justiciables qui ont un problème <strong>maintenant</strong>."
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Copywriting Juridique</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Rédaction de messages éthiques mais persuasifs qui résonnent avec la douleur immédiate de vos prospects.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Visuels "Scroll-Stopper"</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Créations graphiques conçues spécifiquement pour arrêter le défilement sur mobile.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Gestion Technique Meta Ads</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Optimisation quotidienne des enchères publicitaires pour réduire votre coût d'acquisition.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne 2 : Le Filtrage (Humain) */}
          <div className="bg-white p-8 lg:p-10 rounded-sm shadow-lg border-t-4 border-brand-gold flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
             {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"></div>

            <div className="flex items-center mb-8 relative z-10">
              <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mr-5 text-brand-burgundy shadow-sm">
                <UserCheck size={28} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900">La Qualification Humaine <br/><span className="text-sm font-sans font-normal text-gray-500 uppercase tracking-wide">Le Bouclier</span></h4>
            </div>

            <div className="flex-grow space-y-8 relative z-10">
              <p className="text-gray-600 italic border-l-2 border-brand-burgundy pl-4 text-lg">
                "Vous ne perdez plus une minute. Chaque RDV posé dans votre agenda est une opportunité réelle de signature."
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-burgundy mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Vérification du Triptyque</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Validation systématique par téléphone : <strong>Besoin / Urgence / Solvabilité</strong>.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-burgundy mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Identification du Décideur</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Nous écartons les intermédiaires pour vous mettre directement face au signataire de la convention.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-brand-burgundy mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-gray-900 text-sm font-bold mb-1">Filtrage des "Touristes"</strong>
                    <p className="text-gray-600 text-sm leading-relaxed">Élimination impitoyable des demandes de conseil gratuit ou d'aide juridictionnelle.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;