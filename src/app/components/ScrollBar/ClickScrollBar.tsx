"use client"
import React, { useState, useEffect, useRef } from 'react';

const ClickScrollBar: React.FC = () => {
  // Créez des références pour vos éléments
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const progressBarClickRef = useRef<HTMLDivElement | null>(null);

  // État pour la hauteur totale de défilement
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    // Ce code s'exécute uniquement côté client
    const updateTotalHeight = () => {
      setTotalHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    };

    // Définir la hauteur initiale de défilement
    updateTotalHeight();

    // Écouter les événements de redimensionnement
    window.addEventListener('resize', updateTotalHeight);

    // Nettoyage lors du démontage
    return () => {
      window.removeEventListener('resize', updateTotalHeight);
    };
  }, []);

  useEffect(() => {
    // Obtenez la référence de la barre de progression
    const progressBar = progressBarRef.current;
    const progressBarClick = progressBarClickRef.current;

    if (!progressBar || !progressBarClick) return;

    const handleScroll = () => {
      const progress = (document.documentElement.scrollTop / totalHeight) * 100;
      progressBar.style.height = `${progress}%`;
      progressBar.style.opacity = `${progress}%`;
    };

    const handleClick = (e: MouseEvent) => {
      const newPageScroll = (e.clientY / progressBarClick.offsetHeight) * totalHeight;
      window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
      });
    };

    // Ajouter les écouteurs d'événements
    window.addEventListener('scroll', handleScroll);
    progressBarClick.addEventListener('click', handleClick);

    // Nettoyage lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
      progressBarClick.removeEventListener('click', handleClick);
    };
  }, [totalHeight]); // Utilisez la hauteur totale dans la dépendance

  return (
    <>
      <div ref={progressBarRef} className="scrollbar"></div>
      <div ref={progressBarClickRef} className="clickScrollbar"></div>
    </>
  );
};

export default ClickScrollBar;
