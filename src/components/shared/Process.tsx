import React from 'react';
import { MousePointerClick, Filter, CalendarCheck, Briefcase } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Acquisition Digitale",
      desc: "Nous déployons des campagnes publicitaires ultra-ciblées sur l'écosystème Meta (Facebook & Instagram) pour capter l'attention des justiciables en recherche de solutions."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Filtrage",
      desc: "Nos experts qualifient la demande : nature du contentieux, montant en jeu, urgence. Nous écartons 70% des demandes non pertinentes."
    },
    {
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Prise de RDV",
      desc: "Le prospect qualifié est inscrit directement dans votre agenda aux créneaux de votre choix."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Signature",
      desc: "Vous recevez le dossier complet avant l'appel. Vous n'avez plus qu'à convaincre et signer la convention d'honoraires."
    }
  ];

  return (
    <section id="processus" className="py-20 bg-brand-burgundy text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-2">Votre Parcours d'Acquisition</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Nous apportons les dossiers, vous plaidez.</h2>
          <p className="text-lg text-brand-cream/80 max-w-2xl mx-auto">
             Notre équipe gère la publicité et le premier contact téléphonique. Votre temps est préservé pour l'essentiel : le rendez-vous client et le traitement du dossier.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-brand-gold -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Icon Container with Metallic Effect */}
                  {/* Added group-hover:border-brand-lightGold so the border changes color on hover */}
                  <div className="w-16 h-16 rounded-full border-2 border-brand-gold group-hover:border-brand-lightGold flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(140,100,40,0.5),0_4px_6px_-4px_rgba(140,100,40,0.5)] btn-burgundy transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Badge positioned absolutely outside the clipped icon container */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-xs font-bold text-brand-burgundy z-10 transition-all duration-300 group-hover:bg-brand-lightGold group-hover:scale-125">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;