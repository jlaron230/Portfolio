import React from 'react'
import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";

// Composant MedhylemmeComponent
const MedhylemmeComponent = () => {
  return (
    <article className="Interlaptop:flex-row-reverse relative max-w-[1280px] flex flex-wrap gap-10 justify-center items-center my-36 h-96">
      {/* Conteneur principal avec les styles de mise en page */}
      <motion.div
        className="text-white md:w-[75%] lg:w-[40%]"
        initial={{ opacity: 0, scale: 1, x: 20, y: 0 }} // État initial de l'animation
        whileInView={{ opacity: 1, x: 0 }} // État lorsque le composant est visible
        transition={{ duration: 1 }} // Durée de la transition
        viewport={{ once: true }} // L'animation se joue une seule fois
      >
        <h3 className="projet_font">Medhylemme</h3>
        <p>
          Medhylemme est une application dédiée aux dilemmes et choix
          difficiles...
        </p>
        <div className="flex ">
          <Button
            target="blank"
            href="https://medhylemme.vercel.app/"
            as={Link}
            showAnchorIcon
            variant="solid"
            className="mt-2 colorSecondary text-white z-10"
          >
            Le projet
          </Button>
        </div>
      </motion.div>

      {/* Image de fond avec opacité animée */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.5 }} // Opacité initiale
        animate={{ opacity: 0.1 }} // Opacité pendant l'animation
        transition={{ duration: 1 }} // Durée de la transition
      />

      {/* Conteneur pour l'image avec animation */}
      <motion.div
        className="overflow-hidden relative shadow-black/5 shadow-none rounded-large max-w-xl max-h-60"
        initial={{ opacity: 0, scale: 1, x: -5, y: 0 }} // État initial de l'animation
        whileInView={{ opacity: 1.5, x: 0 }} // État lorsque le composant est visible
        viewport={{ once: true }} // L'animation se joue une seule fois
        transition={{
          x: { type: "spring", stiffness: 300, damping: 20 }, // Animation du mouvement horizontal
          opacity: { duration: 1 }, // Animation de l'opacité
          scale: { duration: 3 }, // Animation de l'échelle
          repeat: Infinity, // Répéter l'animation à l'infini
          repeatType: "reverse", // Inverser l'animation après chaque répétition
        }}
      >
        {/* Image animée */}
        <motion.img
          className="img"
          src="./images/Medhylemme.png"
          drag="x" // Permet le glissement horizontal
          dragConstraints={{ left: 0, right: 0 }} // Contraintes de glissement horizontal
          animate={{ x: 0, opacity: 1 }} // Animation des propriétés
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 }, // Animation du mouvement horizontal
            opacity: { duration: 0.8 }, // Animation de l'opacité
            repeat: Infinity, // Répéter l'animation à l'infini
            repeatType: "loop", // Boucle continue de l'animation
          }}
        />
      </motion.div>

      {/* Deuxième couche d'image de fond avec opacité animée */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.5 }} // Opacité initiale
        animate={{ opacity: 0.1 }} // Opacité pendant l'animation
        transition={{ duration: 1 }} // Durée de la transition
      ></motion.div>
    </article>
  )
}

export default MedhylemmeComponent
