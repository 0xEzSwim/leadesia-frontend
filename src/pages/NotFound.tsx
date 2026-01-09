import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-serif font-bold text-brand-burgundy mb-4 opacity-10">404</h1>
        <div className="relative -mt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black mb-6">
            Page introuvable
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            La page que vous recherchez semble avoir été déplacée ou n'existe plus. Retournons à l'essentiel.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 btn-burgundy rounded-sm font-medium text-lg shadow-sm gap-2"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;