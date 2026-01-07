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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* The Problem Side */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-300 group-hover:bg-red-400 transition-colors"></div>
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
          <div className="bg-brand-burgundy text-white p-8 rounded-lg shadow-2xl relative overflow-hidden transform md:scale-105 transition-transform">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <ShieldCheck className="mr-3 text-brand-gold" />
              Avec Leadesia
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-brand-gold mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Flux constant de dossiers qualifiés (Contrôle fiscal, ESFP, contentieux).</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Filtrage rigoureux en amont : vous ne parlez qu'aux décideurs.</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-3 text-lg">✓</span>
                <p className="text-gray-100 text-sm">Exclusivité territoriale et sectorielle garantie.</p>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold mr-3 text-lg">✓</span>
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