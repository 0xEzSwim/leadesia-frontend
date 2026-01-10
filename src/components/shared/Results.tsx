import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PANIER_MOYEN = 3500;

const dataDossiers = [
  { name: 'Mois 1', leadesia: 2, reseautage: 0, boucheAOreille: 0 },
  { name: 'Mois 2', leadesia: 3, reseautage: 1, boucheAOreille: 0 },
  { name: 'Mois 3', leadesia: 4, reseautage: 1, boucheAOreille: 0 },
  { name: 'Mois 4', leadesia: 5, reseautage: 1, boucheAOreille: 1 },
  { name: 'Mois 5', leadesia: 5, reseautage: 2, boucheAOreille: 1 },
  { name: 'Mois 6', leadesia: 6, reseautage: 1, boucheAOreille: 2 },
];

const dataCA = dataDossiers.map(month => ({
    name: month.name,
    leadesia: month.leadesia * PANIER_MOYEN,
    reseautage: month.reseautage * PANIER_MOYEN,
    boucheAOreille: month.boucheAOreille * PANIER_MOYEN,
}));


const CustomTooltip = ({ active, payload, label, view }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-sm shadow-lg border border-gray-200">
        <p className="font-bold text-gray-800">{label}</p>
        {payload.map((pld: any, index: number) => (
          <div key={index} style={{ color: pld.fill }}>
            {`${pld.name}: `}
            <strong>
              {view === 'ca'
                ? `${pld.value.toLocaleString('fr-FR')} €`
                : `${pld.value} ${pld.value > 1 ? 'dossiers' : 'dossier'}`}
            </strong>
          </div>
        ))}
      </div>
    );
  }
  return null;
};


const Results: React.FC = () => {
  const [view, setView] = useState('dossiers'); // 'dossiers' or 'ca'
  const chartData = view === 'dossiers' ? dataDossiers : dataCA;

  return (
    <section id="resultats" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-6">
              Des résultats concrets, une croissance prévisible
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              La publicité ciblée est le seul levier offrant un volume de dossiers prévisible et scalable. Fini l'incertitude du mois suivant, place à une croissance maîtrisée.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-brand-burgundy pl-4">
                <span className="block text-3xl font-bold text-brand-burgundy">x5</span>
                <span className="text-sm text-gray-500 font-medium">ROI moyen constaté</span>
              </div>
              <div className="border-l-4 border-brand-gold pl-4">
                <span className="block text-3xl font-bold text-brand-burgundy">3.5k€</span>
                <span className="text-sm text-gray-500 font-medium">Panier moyen honoraires</span>
              </div>
            </div>

            <blockquote className="bg-brand-cream p-6 rounded-sm border-l-4 border-brand-gold italic text-gray-700">
              "Avant Leadesia, je passais 30% de mon temps à faire du réseau. Aujourd'hui, je consacre ce temps à mes dossiers, et mon chiffre d'affaires a doublé."
              <footer className="mt-2 text-sm font-bold text-brand-burgundy not-italic">
                — Maître T., Avocat Fiscaliste à Lyon
              </footer>
            </blockquote>
          </div>

          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 h-[28rem] w-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                Comparatif de croissance sur 6 mois
              </h3>
              <div className="bg-gray-100 p-1 rounded-sm flex text-xs font-medium">
                <button 
                  onClick={() => setView('dossiers')}
                  className={`px-3 py-1 rounded-sm transition-colors ${view === 'dossiers' ? 'bg-white shadow-sm text-brand-burgundy' : 'text-gray-500'}`}
                >
                  Dossiers
                </button>
                <button 
                  onClick={() => setView('ca')}
                  className={`px-3 py-1 rounded-sm transition-colors ${view === 'ca' ? 'bg-white shadow-sm text-brand-burgundy' : 'text-gray-500'}`}
                >
                  C.A.
                </button>
              </div>
            </div>
            
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                  <YAxis 
                    tick={{ fontSize: 12, fill: '#666' }} 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(value) => view === 'ca' ? `${value / 1000}k` : value}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8f5f0' }}
                    content={<CustomTooltip view={view} />}
                  />
                  <Legend wrapperStyle={{fontSize: "12px"}} />
                  <Bar dataKey="leadesia" name="Publicité (via Leadesia)" fill="#5D181E" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="reseautage" name="Réseautage & Dîners" fill="#c5a065" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="boucheAOreille" name="Bouche-à-oreille" fill="#a0aec0" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;