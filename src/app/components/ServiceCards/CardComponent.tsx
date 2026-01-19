"use client";
import React from 'react';
import CardModal from './../ServiceCards/CardsModal';
import { Card, CardHeader } from '@nextui-org/react';
import { motion } from 'framer-motion';
// Interface pour définir les props attendues dans CardComponent
interface cardInterface {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  modalTitle: string;
  modalIcons: React.FC<{ className?: string }>[];
  showModal: boolean;
  handleShowModal: (currentCard: number | null) => void; // Fonction pour gérer le clic sur une carte
  currentCard: number | null; // Permet de savoir quelle carte est actuellement ouverte
  color: string;
  modalDescription: string;
  baliseAlt: string;
}

// Composant de chaque carte individuelle
const CardComponent: React.FC<cardInterface> = React.memo (({
  id, title, description, imageSrc, modalTitle, modalDescription, modalIcons, showModal, handleShowModal, currentCard, color, baliseAlt
}) => {

  return (
        <motion.button
            type="button"
            key={id} // Clé unique pour chaque carte
            whileTap="hover" // Animation au clic
            onClick={() => handleShowModal(id)}// Gère l'ouverture de la modal au clic
            transition={{duration: 0.18}}
            whileHover={{scale: 1.03}} // Effet de survol
            className={`box col-span-12 sm:col-span-4 flex flex-row relative max-xl:overflow-hidden`}
        >
          <motion.div
              className={`relative w-full h-full`}
              style={{ willChange: "transform" }} //permet d'optimiser le rendu css avant que l'élément change
              transition={{duration: 0.35, ease: "easeOut"}} // Durée de la transition de déplacement
          >

            {/* Carte affichant le titre, description et l'image */}
            <Card className="relative w-full h-full col-span-12 sm:col-span-4">
              {/* Header de la carte contenant le titre et la description */}
              <CardHeader className="pointer-events-none font-bold absolute z-10 top-1 flex-col !items-start flex content-center flex-wrap">
                <h4 className="text-white text-4xl">{title}</h4>
                <p className="text-white uppercase font-bold text-lg">{description}</p>
              </CardHeader>

              {/* Image de fond de la carte */}
              <div
                  className="pointer-events-none relative w-full h-[20rem] sm:h-[25rem] md:h-[26rem] lg:h-[19rem] xl:h-[18rem] bg-black">
                <img
                    width={"295px"}
                    height={"288px"}
                    decoding="async"
                    style={{ contain: "paint" }} // limite le recalcule améliore le coutde repaint Spécifiquement recommandé pour images LCP animées
                    loading={id === 1 ? "eager" : "lazy"}//Priorité de chargement LCP
                    fetchPriority={id === 1 ? "high" : "auto"} //Priorise la promesse en fonction de l'id de l'image
                    alt={baliseAlt} // Texte alternatif pour l'image
                    className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-85"
                    srcSet={`${imageSrc}?w=600 600w, ${imageSrc}?w=1200 1200w`}
                    sizes="(max-width: 600px) 600px, 1200px"
                />
              </div>
            </Card>
          </motion.div>
          {/* Modal associée à la carte, affichée lorsque showModal et currentCard sont valides */}
          <CardModal
              isOpen={showModal && currentCard === id}
              title={modalTitle}
              description={modalDescription}
              icons={modalIcons}
              color={color}
          />
        </motion.button>
        )
        })
        CardComponent.displayName = 'CardComponent';
        export default CardComponent;
