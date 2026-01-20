import React, { useRef, useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Récupération des variables d'environnement
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Vérification de sécurité pour le développement
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Configuration EmailJS manquante. Vérifiez votre fichier .env");
      alert("Erreur de configuration : Les clés EmailJS ne sont pas définies.");
      setIsSending(false);
      return;
    }

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setIsSending(false);
        }, (error) => {
          console.log(error.text);
          alert("Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou nous contacter directement à contact@leadesia.com.");
          setIsSending(false);
        });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-burgundy/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-md p-8 overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-brand-black mb-2">Audit d’acquisition de dossiers</h3>
              <p className="text-sm text-gray-600">
                Vérifiez si votre zone géographique est disponible pour nos services.
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="Maître Jean Dupont"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="jean.dupont@avocat.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <input 
                  type="tel" 
                  name="user_phone"
                  required
                  className="w-full px-4 py-3 rounded-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Code postal du cabinet</label>
                <input 
                  type="text" 
                  name="postal_code"
                  required
                  pattern="[0-9]{5}"
                  maxLength={5}
                  className="w-full px-4 py-3 rounded-sm bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-brand-burgundy focus:border-transparent outline-none transition-all"
                  placeholder="75008"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full btn-burgundy font-bold py-3 rounded-sm shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Vérifier l'éligibilité"
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-black mb-4">Demande Reçue</h3>
            <p className="text-gray-600 mb-8">
              Notre équipe va analyser votre profil. Si votre zone est disponible, vous serez contacté sous 24h à l'adresse indiquée.
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