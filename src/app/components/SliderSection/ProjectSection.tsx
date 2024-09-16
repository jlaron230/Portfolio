import React from "react";
import { motion } from "framer-motion";
import { Link, Button } from "@nextui-org/react";
import Slider from "./Slider";

// Interface pour les props du composant ProjectSection
interface SectionType {
  title: string; // Titre du projet
  description: string; // Description du projet
  buttonHref: string; // URL du bouton
  buttonText: string; // Texte du bouton
  images: string[]; // Liste des images pour le slider
  page: number; // Page actuelle du slider
  direction: number; // Direction du slider (défilement)
  paginate: (direction: number) => void; // Fonction pour changer de page dans le slider
  imageSrc?: string; // Source de l'image de fond
  noBackground?: boolean; // Indique si l'image de fond est à ne pas afficher
  index: number; // Index du projet (pour la disposition)
  defilement: number; // Variable pour les effets de défilement
  defilement2: number; // Variable pour les effets de défilement secondaire
}

const ProjectSection: React.FC<SectionType> = ({
  title,
  description,
  buttonHref,
  buttonText,
  images,
  page,
  direction,
  paginate,
  imageSrc,
  noBackground = false,
  index,
  defilement,
  defilement2,
}) => {
  // Détermine la direction de l'affichage des projets (pour alterner les positions)
  const returnProject = index % 2 === 0;
  
  return (
    <article className={`relative max-w-[1280px] flex flex-wrap gap-10 justify-center items-center my-36 h-96 ${returnProject ? "flex-row" : "flex-row-reverse"} `}>
      {/* Conteneur pour le texte du projet */}
      <motion.div
        className="text-white md:w-[75%] lg:w-[40%]"
        initial={{ opacity: 0, scale: 1, x: 20, y: 0 }} // État initial de l'animation
        whileInView={{ opacity: 1, x: 0 }} // État lorsque le composant est visible
        transition={{ duration: 1 }} // Durée de la transition
        viewport={{ once: true }} // L'animation se joue une seule fois
      >
        <h3 className="projet_font">{title}</h3>
        <p>{description}</p>
        <div className="flex">
          <Button
            target="blank"
            href={buttonHref}
            as={Link}
            showAnchorIcon
            variant="solid"
            className="mt-2 colorSecondary text-white z-10"
          >
            {buttonText}
          </Button>
        </div>
      </motion.div>

      {/* Affiche l'image de fond si noBackground est faux */}
      {!noBackground && (
        <motion.div
          className={`absolute inset-0 z-0 ${returnProject ? "flex-row-reverse" : "flex-row"}`}
          initial={{ opacity: 0.5 }} // Opacité initiale
          animate={{ opacity: 0.1 }} // Opacité pendant l'animation
          transition={{ duration: 1 }} // Durée de la transition
        >
          <motion.img
            src={imageSrc}
            alt="Image de fond"
            className="w-full h-full object-cover" // Assure que l'image couvre tout le conteneur
          />
        </motion.div>
      )}

      {/* Composant Slider pour afficher les images */}
      <Slider
        images={images}
        page={page}
        direction={direction}
        paginate={paginate}
        defilement={defilement}
        defilement2={defilement2}
      />
    </article>
  );
};

export default ProjectSection;
