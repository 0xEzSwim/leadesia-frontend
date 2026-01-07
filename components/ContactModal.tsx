import React from 'react';
import { X, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-burgundy/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md p-8 overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Audit Gratuit</h3>
              <p className="text-sm text-gray-600">
                Vérifiez si votre zone géographique est disponible pour notre programme d'acquisition.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="Maître Jean Dupont"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="jean.dupont@avocat.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site web du cabinet</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="www.cabinet-dupont.fr"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-brand-burgundy text-white font-bold py-3 rounded-md hover:bg-[#380c11] transition-colors shadow-lg"
                >
                  Vérifier l'éligibilité
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Demande Reçue</h3>
            <p className="text-gray-600 mb-8">
              Notre équipe va analyser votre profil. Si votre zone est disponible, vous serez contacté sous 24h.
            </p>
            <button 
              onClick={onClose}
              className="text-brand-burgundy font-medium hover:underline"
            >
              Fermer la fenêtre
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;