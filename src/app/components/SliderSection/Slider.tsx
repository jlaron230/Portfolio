import React from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";

// Interface pour les props du composant Slider
interface SliderProps {
  images: string[]; // Liste des images à afficher dans le slider
  page: number; // Page actuelle du slider
  direction: number; // Direction du slider pour l'animation (défilement)
  paginate: (direction: number) => void; // Fonction pour changer de page dans le slider
  defilement: number; // Variable pour les effets de défilement
  defilement2: number; // Variable pour les effets de défilement secondaire
}

const Slider: React.FC<SliderProps> = ({ images, page, direction, paginate, defilement, defilement2 }) => {
  return (
    <AnimatePresence initial={true} custom={direction}>
      {/* Conteneur pour les images du slider */}
      <motion.div
        className="overflow-hidden relative shadow-black/5 shadow-none rounded-large max-w-xl max-h-60 flex flex-wrap content-center"
        initial={{ opacity: 0, scale: 1, x: -5, y: 0 }} // État initial de l'animation
        whileInView={{ opacity: 1.5, x: 0 }} // État lorsque le composant est visible
        viewport={{ once: true }} // L'animation se joue une seule fois
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20 }, // Transition pour le mouvement horizontal
          opacity: { duration: 1 }, // Durée de la transition d'opacité
          scale: { duration: 3 }, // Durée de la transition de mise à l'échelle
          repeat: Infinity, // Animation en boucle infinie
          repeatType: "reverse", // Inverser l'animation après chaque répétition
        }}
      >
        {/* Affiche l'image actuelle du slider */}
        {images.length > 0 && (
          <motion.img
            className="img"
            key={page} // Clé unique pour l'image actuelle
            src={images[page]} // Source de l'image actuelle
            drag="x" // Permet de faire glisser l'image horizontalement
            dragConstraints={{ left: 0, right: 0 }} // Contraintes pour le glissement
            animate={{ x: 0, opacity: 1 }} // Animation pour l'image
            initial={{ x: direction > 0 ? 20 : -20, opacity: 0 }} // État initial de l'image
            exit={{ x: direction > 0 ? -20 : 20, opacity: 0 }} // État lors de la sortie de l'image
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 }, // Transition pour le mouvement horizontal
              opacity: { duration: 0.8 }, // Durée de la transition d'opacité
              repeat: Infinity, // Animation en boucle infinie
              repeatType: "loop", // Boucle l'animation
            }}
            onDragEnd={(e, { offset, velocity }) => {
              // Détermine la direction du glissement basé sur l'offset et la vélocité
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100) {
                paginate(defilement); // Glissement vers la gauche
              } else if (swipe > 100) {
                paginate(defilement2); // Glissement vers la droite
              }
            }}
          />
        )}
        {/* Bouton pour passer à l'image suivante */}
        <div
          className="next absolute top-1/2 right-2 bg-white rounded-full w-6 h-6 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10"
          onClick={() => paginate(defilement)} // Change la page vers la droite
        >
          <ChevronRightIcon />
        </div>
        {/* Bouton pour revenir à l'image précédente */}
        <div
          className="prev absolute top-1/2 left-2 bg-white rounded-full w-6 h-6 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 transform -scale-x-100"
          onClick={() => paginate(defilement2)} // Change la page vers la gauche
        >
          <ChevronRightIcon />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Slider;
