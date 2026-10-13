"use client";
import React, { useState, useEffect } from "react";
import data from "../../data/images.json";
import ProjectSection from "./ProjectSection";
import SkillNestComponent from "./SkillNestComponent";
import ProjectDetail from "../../data/ProjectDetail.json"

// Interface pour typer les données du slider
interface SliderData {
  Slider1?: string[];
  Slider2?: string[];
  Slider3?: string[];
}

interface alt {
  alt: string;
}

const Portfolio = ({alt}: alt) => {
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

  //Attribuer le bon id a la variable définit
  const projectGestock = ProjectDetail.find(
      project => project.id === 1
  );

  const projectAdami = ProjectDetail.find(
      project => project.id === 2
  );

  const projectNecromancien = ProjectDetail.find(
      project => project.id === 4
  );

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
      {projectGestock && (
      <ProjectSection
        index={projectGestock.id} // Premier projet
        title={projectGestock.title}
        logoVign={projectGestock.logoVign}
        altLogoVign={projectGestock.altLogoVign}
        description={projectGestock.description}
        buttonHref={`/ProjectDetail/${projectGestock.id}`}
        buttonText={projectGestock.buttonText}
        images={slider1}
        page={page1}
        direction={direction1}
        paginate={(direction) => paginate(1, direction)}
        imageSrc={projectGestock.imageSrc}
        defilement={1}
        defilement2={-1}
        alt={alt}
      />
      )}

      {/* Section pour le deuxième projet */}
      {projectAdami && (
      <ProjectSection
        index={projectAdami.id} // Deuxième projet
        title={projectAdami.title}
        logoVign={projectAdami.logoVign}
        altLogoVign={projectAdami.altLogoVign}
        description={projectAdami.description}
        buttonHref={`/ProjectDetail/${projectAdami.id}`}
        buttonText={projectAdami.buttonText}
        images={slider2}
        page={page2}
        direction={direction2}
        paginate={(direction) => paginate(2, direction)}
        imageSrc={projectAdami.imageSrc}
        noBackground={false}
        defilement={2}
        defilement2={-2}
        alt={alt}
      />
      )}

      {/* Composant pour le projet SkillNest */}
      <SkillNestComponent />

      {/* Section pour le troisième projet */}
      {projectNecromancien && (
      <ProjectSection
        index={projectNecromancien.id} // Troisième projet
        title={projectNecromancien.title}
        logoVign={projectNecromancien.logoVign}
        altLogoVign={projectNecromancien.altLogoVign}
        description={projectNecromancien.description}
        buttonHref={`/ProjectDetail/${projectNecromancien.id}`}
        buttonText={projectNecromancien.buttonText}
        images={slider3}
        page={page3}
        direction={direction3}
        paginate={(direction) => paginate(3, direction)}
        imageSrc={projectNecromancien.imageSrc}
        noBackground={true}
        defilement={3}
        defilement2={-3}
        alt={alt}
      />
      )}
    </div>
  );
};

export default Portfolio;
