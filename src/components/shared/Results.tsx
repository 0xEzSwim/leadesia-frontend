import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mois 1', leads: 4 },
  { name: 'Mois 2', leads: 9 },
  { name: 'Mois 3', leads: 15 },
  { name: 'Mois 4', leads: 22 },
  { name: 'Mois 5', leads: 28 },
  { name: 'Mois 6', leads: 35 },
];

const Results: React.FC = () => {
  return (
    <section id="resultats" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-6">
              Des résultats concrets et mesurables
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Nos partenaires constatent une augmentation significative de leur chiffre d'affaires dès le premier trimestre. Fini l'incertitude du mois suivant.
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

          <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 h-96 w-full">
             <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 text-center">Croissance moyenne du nombre de dossiers (Partenaires)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: '#f8f5f0' }}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '2px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="leads" radius={[2, 2, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#5D181E' : '#c5a065'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;