import React from 'react';
import { Lock, Scale, Filter, CalendarCheck, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: <Lock size={16} />, text: "Exclusivité garantie" },
  { icon: <Scale size={16} />, text: "Déontologie respectée" },
  { icon: <Filter size={16} />, text: "Des clients, pas des curieux" },
  { icon: <CalendarCheck size={16} />, text: "Flux de dossiers constant" },
  { icon: <TrendingUp size={16} />, text: "Jusqu'à 2x plus de dossiers" },
];

// Duplicate for seamless scroll
const allBenefits = [...benefits, ...benefits];

const ScrollingBenefits: React.FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-12 md:mt-16 py-4 border-y border-brand-gold/10">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {allBenefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3 text-sm font-medium text-gray-600 whitespace-nowrap">
            <span className="text-brand-gold">{benefit.icon}</span>
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {allBenefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3 text-sm font-medium text-gray-600 whitespace-nowrap">
            <span className="text-brand-gold">{benefit.icon}</span>
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingBenefits;