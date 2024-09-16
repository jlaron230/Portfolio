import React, { useState, useEffect } from "react";
import data from "../../data/images.json";
import ProjectSection from "./ProjectSection";
import MedhylemmeComponent from "./MedhylemmeComponent";

// Interface pour typer les données du slider
interface SliderData {
  Slider1?: string[];
  Slider2?: string[];
  Slider3?: string[];
}

const Portfolio: React.FC = () => {
  // États pour gérer la page actuelle et la direction du slider pour chaque slider
  const [page1, setPage1] = useState<number>(0);
  const [direction1, setDirection1] = useState<number>(0);
  const [page2, setPage2] = useState<number>(0);
  const [direction2, setDirection2] = useState<number>(0);
  const [page3, setPage3] = useState<number>(0);
  const [direction3, setDirection3] = useState<number>(0);

  // États pour stocker les images de chaque slider
  const [slider1, setSlider1] = useState<string[]>([]);
  const [slider2, setSlider2] = useState<string[]>([]);
  const [slider3, setSlider3] = useState<string[]>([]);

  // Effet pour charger les données du slider depuis le fichier JSON
  useEffect(() => {
    if (data.length > 0 && Array.isArray(data[0].Slider1)) {
      setSlider1(data[0].Slider1);
    }
    if (data.length > 1 && Array.isArray(data[1].Slider2)) {
      setSlider2(data[1].Slider2);
    }
    if (data.length > 2 && Array.isArray(data[2].Slider3)) {
      setSlider3(data[2].Slider3);
    }
  }, []);

  // Fonction pour gérer la pagination du slider
  const paginate = (slider: number, direction: number) => {
    if (slider === 1) {
      setPage1(prevPage => (prevPage + direction + slider1.length) % slider1.length);
      setDirection1(direction);
    } else if (slider === 2) {
      setPage2(prevPage => (prevPage + direction + slider2.length) % slider2.length);
      setDirection2(direction);
    } else if (slider === 3) {
      setPage3(prevPage => (prevPage + direction + slider3.length) % slider3.length);
      setDirection3(direction);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Titre de la section des projets */}
      <div className="flex text-white justify-center pb-12">
        <h2>Mes projets</h2>
      </div>
      
      {/* Section pour le premier projet */}
      <ProjectSection
        index={0} // Premier projet
        title="Deadline Drive"
        description="DeadlineDrive est une plateforme créée par quatre étudiants en développement web pour combattre la procrastination de manière ludique et motivante..."
        buttonHref="https://deadlinedrive-p8op.onrender.com/"
        buttonText="Le projet"
        images={slider1}
        page={page1}
        direction={direction1}
        paginate={(direction) => paginate(1, direction)}
        imageSrc="/images/DeadlineDrive/Logo-Deadlines-blanc.png"
        defilement={1}
        defilement2={-1}
      />

      {/* Section pour le deuxième projet */}
      <ProjectSection
        index={1} // Deuxième projet
        title="Adami"
        description="Plongez dans l'univers d'Adami, un RPG médiéval-fantastique à la première personne..."
        buttonHref="https://gamejolt.com/games/AdamiGame/851212"
        buttonText="Le projet"
        images={slider2}
        page={page2}
        direction={direction2}
        paginate={(direction) => paginate(2, direction)}
        imageSrc="/images/Adami/Adami-Capture5.jpg"
        noBackground={false}
        defilement={2}
        defilement2={-2}
      />

      {/* Composant pour le projet Medhylemme */}
      <MedhylemmeComponent />

      {/* Section pour le troisième projet */}
      <ProjectSection
        index={2} // Troisième projet
        title="Le Panchakarma"
        description="Le Panchakarma, offre une présentation claire de ses prestations..."
        buttonHref="https://www.lepanchakarma.fr/"
        buttonText="Le projet"
        images={slider3}
        page={page3}
        direction={direction3}
        paginate={(direction) => paginate(3, direction)}
        imageSrc={"/images/LePanchaKarma/LePanchakarmaCapture1.png"}
        noBackground={true}
        defilement={3}
        defilement2={-3}
      />
    </div>
  );
};

export default Portfolio;
