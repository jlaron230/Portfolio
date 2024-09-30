import React from 'react';
import { motion } from 'framer-motion';

// Interface pour définir les props du modal
interface cardInterface {
  isOpen: boolean;
  title: string;
  description: string;
  icons: string[];
  color: string;
}

// Composant modal associé à chaque carte
const CardModal: React.FC<cardInterface> = ({ isOpen, title, description, icons, color }) => {
  return (
    <motion.div
      // Conteneur du modal, s'affiche si isOpen est vrai
      className={`absolute inset-0 flex items-center justify-center z-20 bg-white rounded-large ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      initial={{ opacity: 0, y: '25%' }} // Animation d'apparition
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? '0' : '25%' }} // Animation lorsque la modal s'ouvre ou se ferme
      transition={{ duration: 0.2, delay: 0.2 }} // Transition avec délai
    >
      <div className="text-center flex justify-center gap-2 flex-wrap p-4">
        {/* Titre du modal */}
        <h4 className={color}>{title}</h4>
        {/* Description du modal */}
        <p className="text-medium text-black/60 uppercase font-bold">{description}</p>

        {/* Liste d'icônes affichées dans le modal */}
        <div className="flex flex-wrap justify-center gap-4">
          {icons.map((icon, index) => (
            <motion.img
            loading='lazy'
              key={index} // Clé unique pour chaque icône
              initial={{ x: 0, y: 0, scale: 1, rotate: 0 }} // Animation initiale
              whileHover={{ x: 0, y: -4, scale: 1.1, rotate: 4 }} // Animation au survol
              src={icon} // Source de l'icône
              className="w-12"
              alt={`Icon ${index}`} // Texte alternatif pour chaque icône
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CardModal;
