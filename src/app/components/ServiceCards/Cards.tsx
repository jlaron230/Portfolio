"use client";
import React, { useState } from 'react';
import CardComponent from './CardComponent';
import CardsInfos from '../../data/CardsInfos.json';

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
      <div className="pb-12 text-center">
        <h2>SERVICES</h2>
      </div>

      {/* Grille d'affichage des cartes avec une configuration réactive */}
      <div className="max-w-[900px] gap-2 grid lg:grid-cols-12 sm:grid-cols-8 grid-rows-2 mr-auto ml-auto">
        {/* Parcours des données des cartes depuis CardsInfos.json */}
        {CardsInfos.map(({ id, title, description, imageSrc, modalTitle, modalDescription, modalIcons, color, baliseAlt }) => (
          <CardComponent
            key={id} // Clé unique pour chaque carte
            id={id}
            title={title}
            description={description}
            imageSrc={imageSrc}
            modalTitle={modalTitle}
            modalDescription={modalDescription}
            modalIcons={modalIcons}
            showModal={showModal} // Passe l'état d'affichage du modal
            handleShowModal={handleShowModal} // Passe la fonction de gestion de modal
            currentCard={currentCard} // Passe la carte actuelle sélectionnée
            color={color}
            baliseAlt={baliseAlt}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
