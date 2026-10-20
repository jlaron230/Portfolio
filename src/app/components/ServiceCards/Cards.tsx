"use client";
import React, { useState } from 'react';
import CardComponent from './CardComponent';
import CardsInfos from '../../data/CardsInfos.json';
import { motion } from 'framer-motion';
import iconsComponents from "@/app/components/Icons/iconsComponents";

// Composant principal 'Cards' qui affiche une liste de cartes interactives
const Cards = () => {
  // État pour gérer l'affichage de la modal (showModal) et la carte sélectionnée (currentCard)
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<number | null>(null);

  // Fonction pour gérer l'affichage de la modal en fonction de la carte cliquée
  const handleShowModal = (cardNumber: number | null) => {
    setCurrentCard(cardNumber);  // Définit la carte actuelle sélectionnée
    setShowModal(prev => !prev); // Bascule l'état d'affichage de la modal
  };

  return (
    <>
      {/* Titre de la section */}
      <div className="pb-12 text-center flex-col items-center flex">
        <h2>SERVICES</h2>
          <hr className="!border-blue-800 border-t head-separator w-24" />
      </div>

      {/* Grille d'affichage des cartes avec une configuration réactive */}
      <div className="md:gap-4 max-w-[900px] gap-2 grid lg:grid-cols-12 sm:grid-cols-8 grid-rows-2 mr-auto ml-auto">
          {/* Parcours des données des cartes depuis CardsInfos.json */}
          {CardsInfos.map(({
                             id,
                             title,
                             description,
                             imageSrc,
                             modalTitle,
                             modalDescription,
                             modalIcons,
                             color,
                             baliseAlt,
                             icon
                           }) => (
              <CardComponent
                  key={id} // Clé unique pour chaque carte
                  id={id}
                  title={title}
                  description={description}
                  imageSrc={imageSrc}
                  modalTitle={modalTitle}
                  modalDescription={modalDescription}
                  modalIcons={modalIcons.map(name => iconsComponents[name]).filter(Boolean)}
                  showModal={showModal} // Passe l'état d'affichage du modal
                  handleShowModal={handleShowModal} // Passe la fonction de gestion de modal
                  currentCard={currentCard} // Passe la carte actuelle sélectionnée
                  color={color}
                  baliseAlt={baliseAlt}
                  icon={icon}
              />
            ))}
      </div>
    </>
  );
};

export default Cards;
