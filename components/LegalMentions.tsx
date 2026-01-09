import React from 'react';

const LegalMentions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4 border-b border-brand-gold/30 pb-6">
          Mentions Légales
        </h1>
        <p className="text-gray-500 italic mb-12">Dernière mise à jour : 9 janvier 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">1. Éditeur du site</h2>
            <p>
              Le site Leadesia est édité par la société <strong>CHANTEREAULT SASU</strong>.
            </p>
            <ul className="mt-4 space-y-2 border-l-2 border-brand-gold/30 pl-4">
              <li><strong>Forme juridique :</strong> SASU au capital de 500 €</li>
              <li><strong>Siège social :</strong> 94240 L'HAY-LES-ROSES</li>
              <li><strong>SIREN :</strong> 952 458 230 (RCS Créteil)</li>
              <li><strong>Contact :</strong> contact@leadesia.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">2. Hébergement</h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
              Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">3. Propriété intellectuelle</h2>
            <p>
              L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-2">
              Toute reproduction, totale ou partielle, de ce site sans l'autorisation expresse de CHANTEREAULT SASU est interdite.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalMentions;