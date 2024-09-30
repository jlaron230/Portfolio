import React, {memo} from 'react';
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
  modalIcons: string[];
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
    <motion.div
      key={id} // Clé unique pour chaque carte
      whileTap="hover" // Animation au clic
      onClick={() => handleShowModal(id)} // Gère l'ouverture de la modal au clic
      initial={{ opacity: 0, scale: 1, x: id % 2 === 0 ? -20 : 20, y: -20 }} // Animation d'apparition initiale
      whileInView={{ opacity: 1, x: 0, y: 0 }} // Animation lorsque la carte entre dans le viewport
      transition={{ duration: 0.6 }} // Durée de la transition d'apparition
      viewport={{ once: true }} // Ne déclenche l'animation qu'une seule fois
      whileHover={{ scale: 1.03 }} // Effet de survol
      className="-z-0 box col-span-12 sm:col-span-4 flex flex-row relative max-xl:overflow-hidden"
    >
      <motion.div
        className="relative w-full h-full"
        animate={showModal && currentCard === id ? { x: id % 2 === 0 ? "-100%" : "100%" } : { x: 0 }} // Animation de déplacement si la modal est ouverte
        transition={{ duration: 0.5 }} // Durée de la transition de déplacement
      >
        {/* Carte affichant le titre, description et l'image */}
        <Card className="col-span-12 sm:col-span-4">
          {/* Header de la carte contenant le titre et la description */}
          <CardHeader className="font-bold absolute z-10 top-1 flex-col !items-start flex content-center flex-wrap">
            <h4 className="text-white text-4xl">{title}</h4>
            <p className="text-white uppercase font-bold text-lg">{description}</p>
          </CardHeader>

          {/* Image de fond de la carte */}
          <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[26rem] lg:h-[19rem] xl:h-[18rem] bg-black">
            <motion.img
            loading='lazy'
              alt={baliseAlt} // Texte alternatif pour l'image
              className="z-0 absolute top-0 left-0 w-full h-full object-cover opacity-85"
              src={imageSrc} // Image source
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
    </motion.div>
  )
})
CardComponent.displayName = 'CardComponent';
export default CardComponent;
