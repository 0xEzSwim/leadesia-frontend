import React from 'react';
import { Target, Users, BarChart3, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-brand-burgundy" />,
      title: "Ciblage Haute Précision",
      description: "Nous identifions les entreprises et particuliers faisant face à des contrôles fiscaux ou ayant des problématiques patrimoniales complexes via des signaux faibles digitaux."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-burgundy" />,
      title: "Qualification Humaine",
      description: "Aucun lead n'est envoyé sans validation. Nous vérifions le besoin, l'urgence et la solvabilité avant de vous transmettre le dossier."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-burgundy" />,
      title: "Rendez-vous Qualifiés",
      description: "Nous ne vendons pas de simples contacts. Nous positionnons des rendez-vous téléphoniques ou physiques directement dans votre agenda."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-brand-cream relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-burgundy uppercase tracking-widest mb-2">Notre Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Une méthodologie scientifique au service du droit
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-brand-gold/30">
              <div className="bg-brand-cream w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;