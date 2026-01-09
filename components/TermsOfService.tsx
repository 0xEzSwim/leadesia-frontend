import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-4 border-b border-brand-gold/30 pb-6">
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-gray-500 italic mb-12">Dernière mise à jour : 9 janvier 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">1. Acceptation</h2>
            <p>
              L'accès et l'utilisation du site Leadesia impliquent l'acceptation sans réserve des présentes conditions. Si vous n'acceptez pas ces conditions, nous vous prions de ne pas utiliser notre site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">2. Accès aux services</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au site (matériel informatique, logiciels, connexion internet, etc.) sont exclusivement à la charge de l'utilisateur.
            </p>
            <p className="mt-2">
              Nous mettons tout en œuvre pour assurer un accès de qualité au service, mais nous ne sommes tenus à aucune obligation de résultat concernant l'accessibilité du site (maintenance, panne, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">3. Propriété intellectuelle</h2>
            <p>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle.
            </p>
            <p className="mt-2">
              L'utilisateur s'engage à une utilisation des contenus du site dans un cadre strictement privé. Une utilisation à des fins commerciales est strictement interdite sans notre accord.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">4. Responsabilité</h2>
            <p>
              Les informations diffusées sur le site Leadesia sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, la responsabilité du site ne peut être engagée en cas de modification des dispositions administratives et juridiques apparaissant après la publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-burgundy mb-3">5. Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par le droit français. En cas de litige non résolu à l'amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;