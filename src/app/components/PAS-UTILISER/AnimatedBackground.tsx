import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Définition des variantes d'animation pour les bulles
  const bubbleVariants = {
    start: { opacity: 0.7 }, // Opacité initiale des bulles
    end: { opacity: 0.1 }, // Opacité finale des bulles
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Création de 20 bulles animées */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index} // Clé unique pour chaque bulle
          className="absolute rounded-full bg-blue-500" // Style de la bulle : position absolue, forme ronde, couleur bleue
          style={{
            width: `${Math.random() * 50 + 20}px`, // Largeur aléatoire entre 20px et 70px
            height: `${Math.random() * 50 + 20}px`, // Hauteur aléatoire entre 20px et 70px
            left: `${Math.random() * 100}vw`, // Position horizontale aléatoire en pourcentage de la largeur de la vue
            top: `${Math.random() * 100}vh`, // Position verticale aléatoire en pourcentage de la hauteur de la vue
          }}
          variants={bubbleVariants} // Application des variantes d'animation
          initial="start" // État initial de l'animation
          animate="end" // État final de l'animation
          transition={{
            duration: Math.random() * 5 + 3, // Durée de l'animation aléatoire entre 3s et 8s
            repeat: Infinity, // Animation répétée indéfiniment
            repeatType: 'loop', // Répétition en boucle de l'animation
            ease: 'linear', // Type d'interpolation pour l'animation
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
