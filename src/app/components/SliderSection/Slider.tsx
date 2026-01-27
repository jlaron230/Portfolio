"use client";
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
  alt: string;
}

const Slider: React.FC<SliderProps> = ({ images, page, direction, paginate, defilement, defilement2, alt }) => {

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    };
  return (
      <div className="relative overflow-hidden h-200 max-w-[41rem] rounded-large aspect-[16/9]">
          <AnimatePresence initial={true} custom={direction} mode="wait">
              {images.length > 0 && (
                  <motion.img
                      key={page}
                      src={images[page]}
                      alt={alt}
                      className=" inset-0 w-full h-full object-cover"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                          duration: 0.75,
                          ease: [0.16, 1, 0.3, 1], // easing Splide / Apple
                      }}
                      drag="x"
                      dragConstraints={{left: 0, right: 0}}
                      dragElastic={0.08} // ⭐ effet “glide” Splide
                      onDragEnd={(e, {offset, velocity}) => {
                          const swipe = offset.x * velocity.x;

                          if (swipe < -250) paginate(defilement);
                          else if (swipe > 250) paginate(defilement2);
                      }}
                  />
              )}
          </AnimatePresence>

          {/* Controls */}
          <div
              className="next absolute top-1/2 right-2 bg-white rounded-full w-6 h-6 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10"
              onClick={() => paginate(defilement)}
          // Change la page vers la droite
          >

          <ChevronRightIcon />
          </div>
          {/* Bouton pour revenir à l'image précédente */}
          <div className="prev absolute top-1/2 left-2 bg-white rounded-full w-6 h-6 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 transform -scale-x-100" onClick={() => paginate(defilement2)} // Change la page vers la gauche
          > <ChevronRightIcon />
          </div>
      </div>
  );
};

export default Slider;
