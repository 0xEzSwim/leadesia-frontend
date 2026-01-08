import React from 'react';
import { Scale, Clock, TrendingDown, ShieldCheck } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">La réalité du marché juridique actuel</h2>
          <p className="text-gray-600">
            L'expertise technique ne suffit plus. Dans un marché concurrentiel, les meilleurs dossiers ne vont pas aux meilleurs avocats, mais aux plus visibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* The Problem Side */}
          <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 relative overflow-hidden group h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 group-hover:bg-red-400 transition-colors duration-300"></div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <TrendingDown className="mr-3 text-red-400" />
              Sans stratégie d'acquisition
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-lg">•</span>
                <p className="text-gray-600 text-sm">Dépendance au bouche-à-oreille (imprévisible et lent).</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-lg">•</span>
                <p className="text-gray-600 text-sm">Perte de temps avec des prospects insolvables ou hors-sujet.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-lg">•</span>
                <p className="text-gray-600 text-sm">Concurrence accrue des "LegalTech" et grands cabinets.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3 text-lg">•</span>
                <p className="text-gray-600 text-sm">Revenus en dents de scie générant du stress.</p>
              </li>
            </ul>
          </div>

          {/* The Solution Side */}
          <div className="bg-brand-burgundy text-white p-8 rounded-sm shadow-sm hover:shadow-[0_20px_25px_-5px_rgba(140,100,40,0.6),0_8px_10px_-6px_rgba(140,100,40,0.6)] relative overflow-hidden h-full group transition-all card-solution-hover">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold group-hover:bg-brand-lightGold transition-colors duration-300 shadow-[0_0_15px_rgba(197,160,101,0.5)] group-hover:shadow-[0_0_20px_rgba(240,213,155,0.6)]"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="mr-3 text-brand-gold group-hover:text-brand-lightGold transition-colors duration-300" />
              Avec Leadesia
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-brand-gold group-hover:text-brand-lightGold transition-colors duration-300 mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Flux constant de dossiers qualifiés (Contrôle fiscal, ESFP, contentieux).</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold group-hover:text-brand-lightGold transition-colors duration-300 mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Filtrage rigoureux en amont : vous ne parlez qu'aux décideurs.</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold group-hover:text-brand-lightGold transition-colors duration-300 mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Exclusivité territoriale et sectorielle garantie.</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold group-hover:text-brand-lightGold transition-colors duration-300 mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Focus 100% sur votre cœur de métier et vos plaidoiries.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;