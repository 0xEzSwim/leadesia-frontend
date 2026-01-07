import React from 'react';
import { MousePointerClick, Filter, CalendarCheck, Briefcase } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-6 h-6 text-white" />,
      title: "Acquisition",
      desc: "Nous déployons nos campagnes ciblées sur des canaux propriétaires pour capter l'attention des contribuables en difficulté."
    },
    {
      icon: <Filter className="w-6 h-6 text-white" />,
      title: "Filtrage",
      desc: "Nos experts qualifient la demande : nature du contentieux, montant en jeu, urgence. Nous écartons 70% des demandes non pertinentes."
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-white" />,
      title: "Prise de RDV",
      desc: "Le prospect qualifié est inscrit directement dans votre agenda aux créneaux de votre choix."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Signature",
      desc: "Vous recevez le dossier complet avant l'appel. Vous n'avez plus qu'à convaincre et signer la lettre de mission."
    }
  ];

  return (
    <section id="processus" className="py-20 bg-brand-burgundy text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto">
            Un processus rodé pour transformer des inconnus en clients fidèles, sans effort de votre part.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-burgundy border-2 border-brand-gold flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative bg-[#4a1016]">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-xs font-bold text-brand-burgundy">
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