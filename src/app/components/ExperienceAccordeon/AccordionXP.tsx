"use client";
import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/react";

// Déclaration du composant AccordionXP
export default function AccordionXP() {
  // Utilisation du hook useState pour gérer l'état des éléments sélectionnés dans l'Accordion
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["1"]));

  // Fonction pour déterminer les styles des titres des éléments de l'Accordion en fonction de l'état sélectionné
  const addStyleAccordion = (key: string): string => {
    return selectedKeys.has(key) ? "txt_colorSecondary font_container" : "text-stone-400 font_container";
  };

  // Fonction pour ajouter un style de fond différent si l'élément de l'Accordion est sélectionné
  const addStyleAccordionBg = (key: string): string => {
    return selectedKeys.has(key) ? "p-2 duration-75 bg-zinc-100 bg-white" : "";
  };

  // Gestionnaire de changement de sélection, assure la mise à jour correcte de l'état de selectedKeys
  const handleSelectionChange = (keys: "all" | Set<React.Key>) => {
    if (typeof keys === "string") {
      setSelectedKeys(new Set([keys]));
    } else {
      // Conversion des clés en chaîne de caractères pour les utiliser dans Set<string>
      setSelectedKeys(new Set(Array.from(keys).map(key => key.toString())));
    }
  };

  return (
    <>
      {/* Titre principal de la section */}
      <div className="pb-12 text-center">
        <h2 className="max-sm:text-3xl">Éxpériences</h2>
      </div>

      {/* Conteneur flexible pour aligner les deux sections principales (Développement informatique et Graphisme) */}
      <div className="flex justify-center flex-flow-row flex-wrap gap-8">
        
        {/* Section pour les expériences de Développement informatique */}
        <motion.div
          className="lg:basis-5/12 sm:basis-3/6 max-sm:basis-full"
          initial={{ opacity: 0, scale: 1, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Titre de la catégorie */}
          <h3>Développement informatique</h3>
          
          {/* Composant Accordion pour afficher les expériences liées */}
          <Accordion selectedKeys={selectedKeys} onSelectionChange={handleSelectionChange} className="mt-8">
            {/* Élément 1: Développeur web (stage) */}
            <AccordionItem
              key="1"
              aria-label="Développeur web (alternance)"
              title={<span className={addStyleAccordion("1")}>Développeur d'application (alternance)</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("1")}`}
            >
              {/* Informations liées à l'expérience */}
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers le service de la Dirnum AMU" href="https://dirnum.univ-amu.fr/fr">Dirnum AMU</Link> | novembre 2024 - octobre 2025
                </span>
              </div>
              <p>
                {/* Description des tâches réalisées pendant l'expérience */}
                Migration d’une application web métier <span className="txt_colorSecondary">(Symfony 5.4 → 6.4)</span>.
                Refactorisation du code,
                résolution des dépréciations,
                amélioration de la maintenabilité et de la modularité
                <span className="txt_colorSecondary"> (POO, Clean Code). </span>
                <br/>
                <br/>
                Utilisation de Rector et PHPStan. Gestion du versioning GitLab et
                <span className="txt_colorSecondary"> CI/CD avec Docker</span> Déploiement et tests sur serveur Debian
                <span className="txt_colorSecondary"> (Linux)</span>.
                Travail en équipe et participation aux réunions techniques.
              </p>
            </AccordionItem>

            {/* Élément 2: Développeur web (stage) */}
            <AccordionItem
                key="2"
                aria-label="Développeur web (alternance)"
                title={<span className={addStyleAccordion("2")}>Développeur web (stage)</span>}
                className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("2")}`}
            >
              {/* Informations liées à l'expérience */}
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers le site de l'agence Oyopi" href="https://www.oyopi.com/">Oyopi</Link> | mai 2024 - juin 2024
                </span>
              </div>
              <p>
                {/* Description des tâches réalisées pendant l'expérience */}
                Plugins graphiques <span className="txt_colorSecondary">(intégration/déploiement)</span>.
                Dév. web <span className="txt_colorSecondary">(HTML/CSSJS/PHP)</span>
                Analyse code, maquettage
                CMS, Filtrage <span className="txt_colorSecondary"> (Jetengine). </span> SEO,
                responsive design, debugging.
                <br/>
                <br/>
                Design web, logique
                <span className="txt_colorSecondary"> (constructeur thème), CSS JS</span> Fonctionnalités web
                <span className="txt_colorSecondary"> (maquettes, Déploiement, tests) </span>.
                Design web responsive
                Propositions & travail d’équipe
              </p>
            </AccordionItem>

            {/* Élément 3: Développement jeu vidéo */}
            <AccordionItem
              key="3"
              aria-label="Développement jeu vidéo"
              title={<span className={addStyleAccordion("3")}>Développement jeu vidéo</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("3")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers le site pour télécharger Adami, le jeu vidéo RPG Fantastique" href="https://gamejolt.com/games/AdamiGame/851212">Projet personnel</Link> | 2026
                </span>
              </div>
              <p>
                {/* Description des tâches liées au développement de jeu vidéo */}
                Développement orienté objet. Codage informatique <span className="txt_colorSecondary">(C#, Javascript)</span>.
                Utilisation du moteur de développement <span className="txt_colorSecondary">Unity Engine</span>. Level design et mise en application des éléments du jeu.
                <br />
                <br />
                Conception de l’espace UI et des graphismes 2D. Stratégie marketing et promotion du projet
                <span className="txt_colorSecondary"> (concours, réseaux sociaux, Bêta-test, exposition)</span>.
              </p>
            </AccordionItem>
            {/* Élément 4: Développement Start-up */}
            <AccordionItem
                key="4"
                aria-label="Développement Start-up"
                title={<span className={addStyleAccordion("4")}>Développement Start-up</span>}
                className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("3")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers le site de la start up" href="https://beta.skillnest.fr/">Projet collaboratif</Link> | 2025 - 2026
                </span>
              </div>
              <p>
                {/* Description des tâches liées au développement d'une start up */}
                Projet startup – Co-fondateur & Développeur Front-end.
                Développement en Next.js <span className="txt_colorSecondary">(TypeScript, JavaScript)</span>.
                Maquettage UI/UX <span className="txt_colorSecondary"> (Figma)</span>  et graphisme <span className="txt_colorSecondary"> (Illustrator)</span>.
                <br />
                <br />
                Participation à la pré-production, à la conception de
                l’application et aux choix
                fonctionnels. Promotion du projet :
                <span className="txt_colorSecondary"> (réunions, concours nationaux et pitch)</span>. Force de proposition et travail d’équipe.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Section pour les expériences de Graphisme */}
        <motion.div
          className="lg:basis-5/12 sm:basis-3/6 max-sm:basis-full"
          initial={{ opacity: 0, scale: 1, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3>Graphisme</h3>
          <Accordion selectedKeys={selectedKeys} onSelectionChange={handleSelectionChange} className="mt-8">
            {/* Élément 5: Imprimeur polyvalent */}
            <AccordionItem
              key="5"
              aria-label="Imprimeur polyvalent"
              title={<span className={addStyleAccordion("5")}>Imprimeur polyvalent</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("5")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers l'université d'Aix-Marseille" href="https://www.univ-amu.fr/fr">Aix Marseille Université</Link> | 2020 - 2022
                </span>
              </div>
              <p>
                {/* Description des tâches liées à l'impression et la signalétique */}
                Traitement de fichier d’impression. Configuration des imprimantes. Création graphiques de supports de communication print et web.
                <br />
                <br />
                Signalétique : <span className="txt_colorSecondary">intérieur, extérieur. Impression grand format et façonnage.</span> Accueil et conseil client.
              </p>
            </AccordionItem>

            {/* Élément 6: Graphiste */}
            <AccordionItem
              key="6"
              aria-label="Graphiste"
              title={<span className={addStyleAccordion("6")}>Graphiste</span>}
              className={`flex flex-wrap justify-between flex-col ${addStyleAccordionBg("6")}`}
            >
              <div className="flex flex-wrap justify-between">
                <span className="txt_colorSecondary text-xl pb-3.5">
                  <Link className="text-xl" aria-label="Lien vers l'agence signalétique de Monaco" href="https://powergeneration.mc/">Power Generation</Link> | février 2020 - août 2020
                </span>
              </div>
              <p>
                {/* Description des tâches graphiques et de création */}
                Traitement de fichiers graphiques. Montage, assemblage d’éléments de signalétique.
                Création graphique sur <span className="txt_colorSecondary">Illustrator/CorelDraw/Photoshop</span>.
                <br />
                <br />
                Configuration d’une imprimante numérique. Utilisation d’un plotter de découpe. Gestion des stocks. Analyse, conseils clients.
              </p>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </>
  );
}
