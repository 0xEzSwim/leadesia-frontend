import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4 border-b border-brand-gold/30 pb-6">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-500 italic mb-12">Dernière mise à jour : 9 janvier 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <p className="text-lg font-medium">
            Chez Leadesia, la confidentialité n'est pas une option. Voici, en toute transparence, comment nous traitons les données collectées sur ce site.
          </p>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">1. Responsable des données</h2>
            <p>
              Vos données sont collectées par la société <strong>CHANTEREAULT SASU</strong> (Leadesia). Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">2. Collecte des informations</h2>
            <p className="mb-2">Nous recueillons des informations lorsque vous :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Remplissez notre formulaire d'éligibilité ou de contact.</li>
              <li>Naviguez sur notre site (via des cookies anonymes).</li>
            </ul>
            <p className="mt-2">Les informations recueillies incluent votre nom, adresse e-mail, numéro de téléphone et l'URL de votre site web.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">3. Utilisation des informations</h2>
            <p>Toute les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
              <li>Améliorer notre site web.</li>
              <li>Vous contacter par e-mail ou téléphone suite à votre demande.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">4. Divulgation à des tiers</h2>
            <p>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web (hébergeur, outils d'analyse), tant que ces parties conviennent de garder ces informations confidentielles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">5. Consentement & Droits</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité. Conformément à la loi informatique et libertés, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.
            </p>
            <p className="mt-2">
              Pour l'exercer, contactez-nous simplement à : contact@leadesia.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;